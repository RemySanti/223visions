/** Sends form copy to notification inboxes via Vercel + Resend (best-effort). */
export async function notifyFormSubmission(payload) {
  const response = await fetch('/api/notify-contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || `Notification email failed (${response.status})`);
  }
}