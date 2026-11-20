import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div id="top" className="contents">
      <Header />
      <main className="flex-1">
        <Banner />
        <section className="px-4 py-14 text-center sm:py-20">
          <h1 className="text-2xl font-extrabold tracking-wide text-foreground sm:text-4xl lg:text-5xl">
            WE HAVE MOVED TO A NEW ADDRESS
          </h1>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-brand sm:mt-6" />
          <p className="mt-8 flex flex-col items-center gap-1 text-sm font-medium uppercase tracking-[0.15em] text-muted sm:mt-10 sm:text-base">
            Click here to visit our new website
            <svg viewBox="0 0 24 24" className="h-6 w-6 animate-bounce text-brand" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>
          <a
            href={site.websiteUrl}
            className="group relative mt-3 inline-flex max-w-full items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#c4661f] via-[#e3a03a] to-[#f2b92a] px-5 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#c4661f]/30 transition hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-[#c4661f]/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:px-8 sm:py-4 sm:text-xl"
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent motion-safe:animate-shine" />
            <span className="relative whitespace-nowrap">{site.websiteLabel}</span>
            <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/25 sm:h-9 sm:w-9">
              <svg viewBox="0 0 24 24" className="h-5 w-5 motion-safe:animate-nudge" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </section>
      </main>
    </div>
  );
}
