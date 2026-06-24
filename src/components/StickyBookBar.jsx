import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BOOKING_URL } from '../data/constants';

const HIDDEN_PATHS = ['/contact', '/landing', '/thank-you', '/owner', '/internal'];

export function StickyBookBar() {
  const { pathname } = useLocation();

  if (HIDDEN_PATHS.some((p) => pathname.startsWith(p))) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[54] border-t border-white/10 bg-brand-black/95 p-3 backdrop-blur-md sm:p-4">
      <div className="mx-auto flex max-w-lg items-center gap-3 sm:max-w-2xl">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex flex-1 items-center justify-center gap-2 !py-3 !text-xs sm:!text-sm"
        >
          <Calendar size={16} />
          Book Session
        </a>
        <Link to="/contact" className="btn-ghost flex flex-1 justify-center !py-3 !text-xs sm:!text-sm">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
