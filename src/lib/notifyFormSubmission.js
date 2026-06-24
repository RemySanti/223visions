import { FORM_NOTIFICATION_EMAILS } from '../data/constants';

function buildEmailBody(payload) {
  const [primary, ...cc] = FORM_NOTIFICATION_EMAILS;

  return {
    _subject: `New project inquiry — ${payload.name || '223 Visions'}`,
    _template: 'table',
    _captcha: 'false',
    ...(cc.length ? { _cc: cc.join(',') } : {}),
    Name: payload.name || `${payload.firstName || ''} ${payload.lastName || ''}`.trim(),
    Email: payload.email,
    Phone: payload.phone || '—',
    Organization: payload.companyName || '—',
    'Project Type': payload.projectType,
    'Services Needed': payload.servicesNeeded,
    'Project Date': payload.projectDate || '—',
    Location: payload.location || '—',
    Budget: payload.budget,
    Deliverables: payload.deliverables || '—',
    Message: payload.message,
    Source: payload.source,
    'Form Page': payload.formPage || '—',
    Referrer: payload.referrer || '—',
    _replyto: payload.email,
  };
}

/** Sends a formatted copy to notification inboxes (best-effort). */
export async function notifyFormSubmission(payload) {
  const [primary] = FORM_NOTIFICATION_EMAILS;
  if (!primary) return;

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(primary)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(buildEmailBody(payload)),
  });

  if (!response.ok) {
    throw new Error(`Notification email failed (${response.status})`);
  }
}