/** Lightweight skeleton shown while a lazy-loaded section chunk downloads. */
export function SectionFallback() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-7xl animate-pulse flex-col gap-4 px-6 py-24 sm:px-10 lg:px-16">
      <div className="h-6 w-40 rounded-full bg-white/5" />
      <div className="h-12 w-2/3 rounded-2xl bg-white/5" />
      <div className="mt-6 h-64 w-full rounded-3xl bg-white/5" />
    </div>
  )
}
