import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ClipboardCopy,
  Film,
  LayoutGrid,
  Lock,
  Mail,
  LayoutDashboard,
} from 'lucide-react';
import { SEOHead } from '../SEOHead';
import { CONVERSION_SECTIONS } from '../../data/conversionSections';
import {
  ConversionSectionsPanel,
  useConversionSectionPicks,
} from './ConversionSectionsPanel';
import { FormEmailsPanel } from './FormEmailsPanel';
import { HeroLayoutPanel, useHeroLayoutPick } from './HeroLayoutPicker';

const TABS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'hero', label: 'Hero video', icon: Film },
  { id: 'emails', label: 'Form emails', icon: Mail },
  { id: 'sections', label: 'Sections', icon: LayoutGrid },
];

function StatusCard({ label, value, detail }) {
  return (
    <div className="card-dark p-4">
      <p className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">{label}</p>
      <p className="mt-1 text-sm font-medium text-brand-offwhite">{value}</p>
      {detail && <p className="mt-1 text-xs text-brand-muted">{detail}</p>}
    </div>
  );
}

export function OwnerDashboard() {
  const [tab, setTab] = useState('overview');
  const [copied, setCopied] = useState(false);
  const { picks, toggle, selectedSections, copyPicks: copySections } =
    useConversionSectionPicks();
  const { pick, setPick, selected: heroPick, copyPick: copyHero } = useHeroLayoutPick();

  const copyActiveTab = async () => {
    if (tab === 'hero') await copyHero();
    else if (tab === 'sections') await copySections();
    else return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const canCopy = tab === 'hero' || tab === 'sections';

  return (
    <>
      <SEOHead
        title="Owner Dashboard"
        description="Internal tools for 223 Visions site configuration."
        path="/owner"
        noindex
      />

      <div className="border-b border-amber-400/20 bg-amber-400/5">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2 text-xs text-amber-200/90 sm:px-6">
          <Lock size={12} className="shrink-0" />
          Internal only — selections save in this browser.
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-6 md:pt-32">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-display text-4xl font-bold text-brand-offwhite md:text-5xl">
            Owner <span className="text-gradient-brand">Dashboard</span>
          </h1>
          <p className="mt-2 text-sm text-brand-muted">
            Preview emails, pick a hero layout, and queue conversion sections.
          </p>
        </motion.div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-white/10 pb-px">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                tab === id
                  ? 'border-brand-red text-brand-offwhite'
                  : 'border-transparent text-brand-muted hover:text-brand-offwhite'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
          {canCopy && (
            <button
              type="button"
              onClick={copyActiveTab}
              className="btn-ghost mb-1 ml-auto !py-1.5 !text-xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 size={13} />
                  Copied
                </>
              ) : (
                <>
                  <ClipboardCopy size={13} />
                  Copy picks
                </>
              )}
            </button>
          )}
        </div>

        <div className="mt-8">
          {tab === 'overview' && (
            <div className="space-y-6">
              <div className="grid gap-3 sm:grid-cols-3">
                <StatusCard
                  label="Hero layout"
                  value={heroPick?.title ?? 'Not selected'}
                  detail={heroPick ? 'Tap Hero video tab to change' : undefined}
                />
                <StatusCard
                  label="Form emails"
                  value="Resend + GHL"
                  detail="Team copy + lead confirmation"
                />
                <StatusCard
                  label="Conversion sections"
                  value={`${picks.length} of ${CONVERSION_SECTIONS.length}`}
                  detail={
                    selectedSections.length
                      ? selectedSections.map((s) => s.title).join(', ')
                      : 'None selected'
                  }
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => setTab('hero')} className="btn-ghost !py-2 !text-xs">
                  Hero options
                </button>
                <button type="button" onClick={() => setTab('emails')} className="btn-ghost !py-2 !text-xs">
                  Email previews
                </button>
                <button
                  type="button"
                  onClick={() => setTab('sections')}
                  className="btn-ghost !py-2 !text-xs"
                >
                  Section picks
                </button>
              </div>
            </div>
          )}

          {tab === 'hero' && <HeroLayoutPanel pick={pick} onPick={setPick} />}
          {tab === 'emails' && <FormEmailsPanel />}
          {tab === 'sections' && (
            <ConversionSectionsPanel picks={picks} onToggle={toggle} />
          )}
        </div>
      </div>
    </>
  );
}