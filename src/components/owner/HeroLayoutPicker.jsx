import { useEffect, useState } from 'react';
import { Check, ChevronDown, User } from 'lucide-react';
import {
  HERO_LAYOUT_OPTIONS,
  HERO_LAYOUT_STORAGE_KEY,
  getHeroLayoutById,
} from '../../data/heroLayoutOptions';

const POSTER = '/hero-poster.jpg';

function loadPick() {
  try {
    return localStorage.getItem(HERO_LAYOUT_STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

function LayoutMock({ optionId }) {
  const face = (
    <div
      className="absolute flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/10"
      style={
        optionId === 'object-position'
          ? { top: '18%', left: '50%', transform: 'translateX(-50%)' }
          : optionId === 'lower-third-copy'
            ? { top: '22%', left: '50%', transform: 'translateX(-50%)' }
            : optionId === 'split-layout'
              ? { top: '35%', right: '18%' }
              : optionId === 'bottom-panel'
                ? { top: '20%', left: '50%', transform: 'translateX(-50%)' }
                : { top: '30%', right: '22%' }
      }
    >
      <User size={10} className="text-white/70" />
    </div>
  );

  const textBlock = (className) => (
    <div className={`absolute space-y-1 ${className}`}>
      <div className="h-1.5 w-12 rounded bg-white/90" />
      <div className="h-1 w-8 rounded bg-white/50" />
      <div className="mt-1 flex gap-0.5">
        <div className="h-1.5 w-5 rounded bg-brand-red/90" />
        <div className="h-1.5 w-5 rounded border border-white/30" />
      </div>
    </div>
  );

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-black">
      {optionId === 'split-layout' ? (
        <>
          <div className="absolute inset-y-0 left-0 w-[42%] bg-brand-black" />
          <div
            className="absolute inset-y-0 right-0 w-[58%] bg-cover bg-center"
            style={{ backgroundImage: `url(${POSTER})` }}
          />
          {textBlock('bottom-2 left-2')}
        </>
      ) : optionId === 'bottom-panel' ? (
        <>
          <div
            className="absolute inset-x-0 top-0 h-[62%] bg-cover bg-center"
            style={{ backgroundImage: `url(${POSTER})` }}
          />
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-brand-black/95" />
          {textBlock('bottom-2 left-1/2 -translate-x-1/2')}
        </>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${POSTER})` }}
        />
      )}
      {optionId !== 'split-layout' && optionId !== 'bottom-panel' && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      {optionId === 'object-position' && textBlock('bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')}
      {optionId === 'lower-third-copy' && textBlock('bottom-2 left-1/2 -translate-x-1/2')}
      {optionId === 'asymmetric-minimal' && textBlock('bottom-6 left-2')}
      {face}
    </div>
  );
}

function OptionCard({ option, selected, expanded, onSelect, onToggleDetails }) {
  return (
    <article
      className={`card-dark overflow-hidden transition-colors ${
        selected ? 'border-brand-red/50 ring-1 ring-brand-red/20' : ''
      }`}
    >
      <div className="p-3">
        <LayoutMock optionId={option.id} />
      </div>
      <div className="border-t border-white/10 px-4 pb-4">
        <button
          type="button"
          onClick={onSelect}
          className="flex w-full items-start gap-3 pt-3 text-left"
          aria-pressed={selected}
        >
          <div
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
              selected
                ? 'border-brand-red bg-brand-red text-white'
                : 'border-white/20 bg-white/5 text-transparent'
            }`}
          >
            <Check size={12} strokeWidth={3} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-brand-offwhite">{option.title}</h3>
              <span className="rounded-full bg-brand-red/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-brand-red-light">
                {option.tag}
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-brand-muted">{option.summary}</p>
          </div>
        </button>
        <button
          type="button"
          onClick={onToggleDetails}
          className="mt-2 flex items-center gap-1 text-xs text-brand-muted hover:text-brand-offwhite"
        >
          <ChevronDown
            size={14}
            className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
          {expanded ? 'Less detail' : 'More detail'}
        </button>
        {expanded && (
          <div className="mt-3 space-y-2 border-t border-white/5 pt-3 text-xs text-brand-muted">
            <p>{option.whyItWorks}</p>
            <p>
              <span className="text-brand-muted/90">Tradeoff:</span> {option.tradeoff}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

export function HeroLayoutPanel({ pick, onPick }) {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div>
      <p className="text-sm text-brand-muted">
        Face is behind centered hero copy today. Pick a layout — we&apos;ll implement on the home hero.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HERO_LAYOUT_OPTIONS.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            selected={pick === option.id}
            expanded={expandedId === option.id}
            onSelect={() => onPick(option.id)}
            onToggleDetails={() =>
              setExpandedId((id) => (id === option.id ? null : option.id))
            }
          />
        ))}
      </div>
      <p className="mt-4 text-center text-[11px] text-brand-muted">
        Dot = face · bars = headline &amp; CTAs
      </p>
    </div>
  );
}

export function useHeroLayoutPick() {
  const [pick, setPick] = useState(loadPick);

  useEffect(() => {
    if (pick) localStorage.setItem(HERO_LAYOUT_STORAGE_KEY, pick);
  }, [pick]);

  const selected = getHeroLayoutById(pick);

  const copyPick = async () => {
    const text = selected
      ? `Hero layout pick: ${selected.title} (${selected.id})\n\n${selected.summary}`
      : 'No hero layout selected.';
    await navigator.clipboard.writeText(text);
    return text;
  };

  return { pick, setPick, selected, copyPick };
}