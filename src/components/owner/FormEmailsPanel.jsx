import { useState } from 'react';
import {
  buildLeadConfirmationEmail,
  buildTeamNotificationHtml,
  buildTeamNotificationSubject,
  CONFIRMATION_FROM,
  CONFIRMATION_REPLY_TO,
  SAMPLE_FORM_SUBMISSION,
  TEAM_NOTIFICATION_FROM,
  TEAM_NOTIFICATION_TO,
} from '../../../shared/formSubmissionEmails.js';

function MetaRow({ label, value }) {
  return (
    <div className="grid gap-0.5 border-b border-white/5 py-2 sm:grid-cols-[72px_1fr]">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
        {label}
      </span>
      <span className="break-all text-xs text-brand-offwhite">{value}</span>
    </div>
  );
}

function EmailPreviewFrame({ html, title }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#e8e8e8]">
      <div className="border-b border-black/10 bg-white px-3 py-1.5 text-[11px] text-gray-500">
        {title}
      </div>
      <iframe
        title={title}
        srcDoc={html}
        className="block h-[min(480px,60vh)] w-full border-0 bg-white"
        sandbox="allow-same-origin"
      />
    </div>
  );
}

const EMAIL_TABS = [
  { id: 'team', label: 'Team notification' },
  { id: 'lead', label: 'Lead confirmation' },
];

export function FormEmailsPanel() {
  const [tab, setTab] = useState('team');
  const sample = SAMPLE_FORM_SUBMISSION;
  const teamSubject = buildTeamNotificationSubject(sample);
  const teamHtml = buildTeamNotificationHtml(sample);
  const { subject: leadSubject, html: leadHtml } = buildLeadConfirmationEmail(sample);

  return (
    <div>
      <p className="text-sm text-brand-muted">
        Sent via Resend on form submit, in addition to the GHL webhook.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {EMAIL_TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTab(item.id)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              tab === item.id
                ? 'bg-brand-red text-white'
                : 'border border-white/10 text-brand-muted hover:border-white/20 hover:text-brand-offwhite'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="card-dark mt-4 overflow-hidden">
        {tab === 'team' ? (
          <>
            <div className="border-b border-white/10 px-4 py-3">
              <MetaRow label="From" value={TEAM_NOTIFICATION_FROM} />
              <MetaRow label="To" value={TEAM_NOTIFICATION_TO.join(', ')} />
              <MetaRow label="Reply" value={sample.email} />
              <MetaRow label="Subject" value={teamSubject} />
            </div>
            <div className="p-3 sm:p-4">
              <EmailPreviewFrame html={teamHtml} title="Team notification" />
            </div>
          </>
        ) : (
          <>
            <div className="border-b border-white/10 px-4 py-3">
              <MetaRow label="From" value={CONFIRMATION_FROM} />
              <MetaRow label="To" value={sample.email} />
              <MetaRow label="Reply" value={CONFIRMATION_REPLY_TO} />
              <MetaRow label="Subject" value={leadSubject} />
            </div>
            <div className="p-3 sm:p-4">
              <EmailPreviewFrame html={leadHtml} title="Lead confirmation" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}