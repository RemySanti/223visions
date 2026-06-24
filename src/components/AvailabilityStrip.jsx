import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarClock } from 'lucide-react';
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_PATH } from '../data/constants';
import { AVAILABILITY, getSeasonalAvailabilityNote } from '../data/clientInfo';

export function AvailabilityStrip() {
  const seasonalNote = getSeasonalAvailabilityNote();
  return (
    <section className="border-b border-brand-red/20 bg-gradient-to-r from-brand-red/10 via-brand-magenta/5 to-brand-red/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/15">
            <CalendarClock size={18} className="text-brand-red-light" />
          </span>
          <div>
            <p className="text-sm font-semibold text-brand-offwhite">
              <span className="text-brand-red-light">{AVAILABILITY.openSlots} dates</span> open this
              month
            </p>
            <p className="text-xs text-brand-muted">{seasonalNote}</p>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="shrink-0">
          <Link to={PRIMARY_CTA_PATH} className="btn-primary inline-flex !py-2.5 !text-xs">
            {PRIMARY_CTA_LABEL}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
