import { site } from "../lib/site.js";

export function Header() {
  return (
    <header className="relative z-10 bg-gradient-to-b from-white to-[#fbf8f1] shadow-[0_4px_20px_-8px_rgba(120,80,10,0.25)]">
      {/* Accent strip echoing the banner's orange-to-yellow gradient */}
      <div className="h-1 bg-gradient-to-r from-[#c4661f] via-[#e3a03a] to-[#f7cb2d]" />
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-3 sm:gap-8 sm:px-8 sm:py-4">
        <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-brand/50 sm:block" />
        <a href="#top" aria-label={`${site.name} home`} className="shrink-0">
          <img
            src={site.logo}
            alt={site.name}
            width={480}
            height={237}
            fetchPriority="high"
            className="h-16 w-auto sm:h-20 lg:h-24"
          />
        </a>
        <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-brand/50 sm:block" />
      </div>
    </header>
  );
}
