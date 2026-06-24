export const SAMPLE_FORM_SUBMISSION = {
  name: 'Jordan Smith',
  email: 'jordan@example.com',
  phone: '(404) 555-0199',
  companyName: 'Smith Events Co.',
  organization: 'Smith Events Co.',
  projectType: 'Wedding',
  service: 'Hybrid (Photo + Video)',
  servicesNeeded: 'Hybrid (Photo + Video)',
  projectDate: '2026-11-08',
  location: 'Virginia-Highland, Atlanta',
  budget: '$5,000 - $10,000',
  deliverables: 'Photo Gallery, Highlight Reel',
  message:
    'We are planning a November wedding in Virginia-Highland and love your cinematic style. Looking for both photography and a highlight film for guests.',
  source: '223 Visions Website',
  formPage: '/contact',
  referrer: 'https://www.google.com/',
};

export const TEAM_NOTIFICATION_FROM = '223 Visions <notifications@223visions.com>';
export const CONFIRMATION_FROM = 'Christian Bates <christian@223visions.com>';
export const CONFIRMATION_REPLY_TO = 'christian@223visions.com';
export const TEAM_NOTIFICATION_TO = [
  'christian@223visions.com',
  'remysanti10@gmail.com',
];

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function leadFirstName(payload) {
  const full =
    payload.name || `${payload.firstName || ''} ${payload.lastName || ''}`.trim();
  const first = full.split(/\s+/)[0];
  return first || 'there';
}

function projectSummary(payload) {
  const parts = [payload.projectType, payload.servicesNeeded || payload.service].filter(
    (p) => p && p !== 'Other' && p !== 'Not sure yet'
  );
  return parts.length ? parts.join(' · ') : 'your project';
}

export function leadDisplayName(payload) {
  return (
    payload.name || `${payload.firstName || ''} ${payload.lastName || ''}`.trim() || 'New lead'
  );
}

export function buildTeamNotificationSubject(payload) {
  return `New project inquiry — ${leadDisplayName(payload)}`;
}

function row(label, value) {
  if (!value) return '';
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;font-weight:600;width:160px;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;">${escapeHtml(value)}</td></tr>`;
}

export function buildTeamNotificationHtml(payload) {
  const rows = [
    row('Name', leadDisplayName(payload)),
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

export function buildLeadConfirmationEmail(payload) {
  const firstName = leadFirstName(payload);
  const summary = projectSummary(payload);
  const siteUrl = 'https://www.223visions.com';
  const instagram = 'https://www.instagram.com/223.visions/';
  const subject = 'We got your project — 223 Visions';
  const html = `<!DOCTYPE html><html lang="en"><body style="margin:0;padding:0;background:#0a0a0a;font-family:Georgia,'Times New Roman',serif;"><div style="display:none;max-height:0;overflow:hidden;">Thanks for reaching out. Christian will review your details and respond within 24 hours.</div><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0a;padding:32px 16px;"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#111;border:1px solid #222;border-radius:12px;overflow:hidden;"><tr><td style="background:#000;padding:28px 32px;border-bottom:3px solid #e60000;"><p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#999;font-family:Arial,sans-serif;">223 Visions</p><h1 style="margin:10px 0 0;font-size:26px;line-height:1.25;color:#f5f5f0;font-weight:normal;">Thanks, ${escapeHtml(firstName)}.</h1></td></tr><tr><td style="padding:32px;font-family:Arial,Helvetica,sans-serif;"><p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:#d4d4d4;">I&apos;m Christian — founder of 223 Visions. Your inquiry just landed in my inbox, and I&apos;m genuinely looking forward to learning more about <strong style="color:#f5f5f0;">${escapeHtml(summary)}</strong>.</p><p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:#d4d4d4;">Every project we take on gets personal attention. I&apos;ll review what you shared${payload.location ? ` for <strong style="color:#f5f5f0;">${escapeHtml(payload.location)}</strong>` : ''} and come back within <strong style="color:#f5f5f0;">24 hours</strong> with thoughtful next steps — whether that&apos;s a custom plan, accurate quote, or a quick call to align on vision.</p><p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#d4d4d4;">In the meantime, here&apos;s a look at recent work from our Atlanta team:</p><table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 28px;"><tr><td style="padding-right:10px;"><a href="${siteUrl}/portfolio" style="display:inline-block;background:#e60000;color:#fff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 22px;border-radius:6px;font-family:Arial,sans-serif;">View Portfolio</a></td><td><a href="${instagram}" style="display:inline-block;border:1px solid #444;color:#f5f5f0;text-decoration:none;font-size:14px;font-weight:600;padding:12px 22px;border-radius:6px;font-family:Arial,sans-serif;">Follow @223.visions</a></td></tr></table><p style="margin:0 0 6px;font-size:15px;line-height:1.6;color:#d4d4d4;">Talk soon,</p><p style="margin:0;font-size:16px;line-height:1.6;color:#f5f5f0;font-weight:600;">Christian Bates</p><p style="margin:4px 0 0;font-size:13px;color:#888;">Founder, 223 Visions · Atlanta</p><p style="margin:16px 0 0;font-size:13px;color:#666;"><a href="mailto:christian@223visions.com" style="color:#e60000;text-decoration:none;">christian@223visions.com</a></p></td></tr><tr><td style="padding:18px 32px;background:#0a0a0a;border-top:1px solid #222;font-family:Arial,sans-serif;"><p style="margin:0;font-size:11px;line-height:1.5;color:#555;text-align:center;">You received this because you submitted a project inquiry at <a href="${siteUrl}/contact" style="color:#888;text-decoration:none;">223visions.com</a>.</p></td></tr></table></td></tr></table></body></html>`;
  return { subject, html };
}