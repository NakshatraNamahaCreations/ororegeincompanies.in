import { banner, site } from "../lib/site.js";

export function Banner() {
  return (
    <section aria-label="ORO Regen Companies" className="w-full bg-[#c4661f]">
      <a href={site.websiteUrl} className="group relative block" aria-label={`Visit our new website ${site.websiteLabel}`}>
        <img
          src={banner.src}
          srcSet={banner.srcSet}
          sizes="100vw"
          alt={banner.alt}
          width={banner.width}
          height={banner.height}
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full"
        />

        {/* Tablet/desktop: inside the banner, under the intro text */}
        <span className="absolute left-[4.8%] top-[81.5%] hidden -translate-y-1/2 md:block">
          <CtaPill />
        </span>

        {/* Phones: the banner is too short to overlay, so the link sits as a strip just below it */}
        <span className="flex justify-center bg-gradient-to-r from-[#c4661f] to-[#f2b92a] px-4 py-3 md:hidden">
          <CtaPill />
        </span>
      </a>
    </section>
  );
}

function CtaPill() {
  return (
    <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#8a3f0c] transition-transform group-hover:-translate-y-0.5 group-hover:scale-105 motion-safe:animate-glow lg:gap-3 lg:px-5 lg:py-2.5 lg:text-base xl:px-6 xl:py-3 xl:text-lg">
      <span className="whitespace-nowrap">Visit {site.websiteLabel}</span>
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 motion-safe:animate-nudge xl:h-5 xl:w-5" fill="none" stroke="currentColor" strokeWidth={2.6} aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#f2b92a]/40 to-transparent motion-safe:animate-shine" />
    </span>
  );
}
