import { GHL_INBOUND_WEBHOOK_URL } from '../data/constants';
import { notifyFormSubmission } from './notifyFormSubmission';

function splitName(name) {
  const trimmed = name.trim();
  if (!trimmed) return { firstName: '', lastName: '' };
  const parts = trimmed.split(/\s+/);
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  };
}

export function buildGhlContactPayload(form, meta = {}) {
  const { firstName, lastName } = splitName(form.name);

  return {
    firstName,
    lastName,
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    companyName: form.organization.trim(),
    organization: form.organization.trim(),
    projectType: form.projectType,
    service: form.service,
    servicesNeeded: form.service,
    projectDate: form.date,
    location: form.location.trim(),
    budget: form.budget,
    deliverables: form.deliverables.join(', '),
    message: form.message.trim(),
    source: '223 Visions Website',
    notificationEmails: 'christian@223visions.com, remysanti10@gmail.com',
    ...meta,
  };
}

export async function submitContactToGhl(form, meta = {}) {
  const payload = buildGhlContactPayload(form, meta);

  const response = await fetch(GHL_INBOUND_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { status: text };
  }

  if (!response.ok) {
    throw new Error(data?.status || data?.message || `Submission failed (${response.status})`);
  }

  if (typeof data?.status === 'string' && data.status.toLowerCase().includes('error')) {
    throw new Error(data.status);
  }

  notifyFormSubmission(payload).catch(() => {});

  return data;
}