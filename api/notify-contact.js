import { Resend } from 'resend';
import { buildLeadConfirmationEmail } from './lib/leadConfirmationEmail.js';

const resend = new Resend(process.env.RESEND_API_KEY);

const DEFAULT_TO = ['christian@223visions.com', 'remysanti10@gmail.com'];
const DEFAULT_FROM = '223 Visions <notifications@223visions.com>';
const DEFAULT_CONFIRMATION_FROM = 'Christian Bates <christian@223visions.com>';
const CHRISTIAN_REPLY_TO = 'christian@223visions.com';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function row(label, value) {
  if (!value) return '';
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;font-weight:600;width:160px;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;">${escapeHtml(value)}</td></tr>`;
}

function buildTeamNotificationHtml(payload) {
  const name =
    payload.name || `${payload.firstName || ''} ${payload.lastName || ''}`.trim() || 'Unknown';

  const rows = [
    row('Name', name),
    row('Email', payload.email),
    row('Phone', payload.phone),
    row('Organization', payload.companyName || payload.organization),
    row('Project Type', payload.projectType),
    row('Services Needed', payload.servicesNeeded || payload.service),
    row('Project Date', payload.projectDate),
    row('Location', payload.location),
    row('Budget', payload.budget),
    row('Deliverables', payload.deliverables),
    row('Message', payload.message),
    row('Form Page', payload.formPage),
    row('Referrer', payload.referrer),
    row('Source', payload.source || '223 Visions Website'),
  ].join('');

  return `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:24px;"><div style="max-width:640px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e5e5e5;"><div style="background:#000;color:#fff;padding:20px 24px;"><h1 style="margin:0;font-size:20px;">New project inquiry</h1><p style="margin:8px 0 0;color:#ccc;font-size:14px;">223visions.com contact form</p></div><table style="width:100%;border-collapse:collapse;">${rows}</table></div></body></html>`;
}

function getRecipients() {
  const raw = process.env.CONTACT_NOTIFICATION_EMAILS;
  if (!raw) return DEFAULT_TO;
  return raw.split(',').map((e) => e.trim()).filter(Boolean);
}

function leadDisplayName(payload) {
  return (
    payload.name || `${payload.firstName || ''} ${payload.lastName || ''}`.trim() || 'New lead'
  );
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(503).json({ error: 'Email service not configured' });
  }

  const payload = req.body;
  if (!payload?.email) {
    return res.status(400).json({ error: 'Missing lead email' });
  }

  const name = leadDisplayName(payload);
  const teamFrom = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;
  const confirmationFrom =
    process.env.RESEND_CONFIRMATION_FROM || DEFAULT_CONFIRMATION_FROM;
  const { subject: confirmSubject, html: confirmHtml } = buildLeadConfirmationEmail(payload);

  try {
    const [teamResult, confirmResult] = await Promise.all([
      resend.emails.send({
        from: teamFrom,
        to: getRecipients(),
        replyTo: payload.email,
        subject: `New project inquiry — ${name}`,
        html: buildTeamNotificationHtml(payload),
      }),
      resend.emails.send({
        from: confirmationFrom,
        to: [payload.email.trim()],
        replyTo: CHRISTIAN_REPLY_TO,
        subject: confirmSubject,
        html: confirmHtml,
      }),
    ]);

    const teamError = teamResult.error;
    const confirmError = confirmResult.error;

    if (teamError) console.error('Team notification error:', teamError);
    if (confirmError) console.error('Lead confirmation error:', confirmError);

    if (teamError && confirmError) {
      return res.status(502).json({
        error: teamError.message || confirmError.message || 'Failed to send email',
      });
    }

    return res.status(200).json({
      ok: true,
      teamId: teamResult.data?.id ?? null,
      confirmationId: confirmResult.data?.id ?? null,
      confirmationSent: !confirmError,
    });
  } catch (err) {
    console.error('Notify contact error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}