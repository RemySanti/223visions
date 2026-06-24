import { Link, useLocation } from 'react-router-dom';
import { PRIMARY_CTA_LABEL, PRIMARY_CTA_PATH } from '../data/constants';

const HIDDEN_PATHS = ['/contact', '/landing', '/thank-you', '/owner', '/internal'];

export function StickyBookBar() {
  const { pathname } = useLocation();

  if (HIDDEN_PATHS.some((p) => pathname.startsWith(p))) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[54] border-t border-white/10 bg-brand-black/95 p-3 backdrop-blur-md sm:p-4">
      <div className="mx-auto flex max-w-lg items-center gap-3 sm:max-w-2xl">
        <Link
          to={PRIMARY_CTA_PATH}
          className="btn-primary flex flex-1 items-center justify-center whitespace-nowrap !px-3 !py-3 !text-[11px] !tracking-wide sm:!px-6 sm:!text-sm sm:!tracking-wider"
        >
          {PRIMARY_CTA_LABEL}
        </Link>
        <Link
          to="/portfolio"
          className="btn-ghost flex flex-1 items-center justify-center whitespace-nowrap !px-3 !py-3 !text-[11px] !tracking-wide sm:!px-6 sm:!text-sm sm:!tracking-wider"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  );
}
