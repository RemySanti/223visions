import { Resend } from 'resend';
import {
  buildLeadConfirmationEmail,
  buildTeamNotificationHtml,
  buildTeamNotificationSubject,
  CONFIRMATION_FROM,
  CONFIRMATION_REPLY_TO,
  leadDisplayName,
  TEAM_NOTIFICATION_FROM,
  TEAM_NOTIFICATION_TO,
} from '../shared/formSubmissionEmails.js';

function getRecipients() {
  const raw = process.env.CONTACT_NOTIFICATION_EMAILS;
  if (!raw) return TEAM_NOTIFICATION_TO;
  return raw.split(',').map((e) => e.trim()).filter(Boolean);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(503).json({ error: 'Email service not configured' });
  }

  const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  if (!payload?.email) {
    return res.status(400).json({ error: 'Missing lead email' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const teamFrom = process.env.RESEND_FROM_EMAIL || TEAM_NOTIFICATION_FROM;
  const confirmationFrom = process.env.RESEND_CONFIRMATION_FROM || CONFIRMATION_FROM;
  const { subject: confirmSubject, html: confirmHtml } = buildLeadConfirmationEmail(payload);

  try {
    const [teamResult, confirmResult] = await Promise.all([
      resend.emails.send({
        from: teamFrom,
        to: getRecipients(),
        replyTo: payload.email,
        subject: buildTeamNotificationSubject(payload),
        html: buildTeamNotificationHtml(payload),
      }),
      resend.emails.send({
        from: confirmationFrom,
        to: [payload.email.trim()],
        replyTo: CONFIRMATION_REPLY_TO,
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
    return res.status(500).json({ error: err?.message || 'Failed to send email' });
  }
}