const services = [
  "Canada–U.S. Cross-Border Truckload", "53' Dry Van Freight", "Food Grade & Plated Trailer Capacity",
  "Hazmat-Capable Transportation", "Expedited Team Service", "Bonded Freight Solutions",
];
const lanes = ["Ontario ⇄ California", "Ontario ⇄ Texas", "Ontario ⇄ Georgia", "Ontario ⇄ Tennessee", "Ontario ⇄ Florida", "Ontario ⇄ Arizona"];
const credentials = ["CTPAT", "Hazmat", "Canadian Bonded", "U.S. Bonded", "ELD Tracked", "Cross-Border Ready"];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="rounded-xl bg-white px-3 py-2"><img src="/logo.png" alt="Raptors Linehaul" className="h-9 w-auto" /></a>
          <nav className="hidden gap-7 text-sm font-semibold text-neutral-300 md:flex">
            <a href="#services" className="hover:text-red-500">Services</a><a href="#fleet" className="hover:text-red-500">Fleet</a><a href="#lanes" className="hover:text-red-500">Lanes</a><a href="#contact" className="hover:text-red-500">Contact</a>
          </nav>
          <a href="mailto:info@raptorslh.com" className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-black hover:bg-red-700">Get a Quote</a>
        </div>
      </header>

      <section id="home" className="relative min-h-[88vh] overflow-hidden">
        <img src="/hero-truck.jpg" alt="Raptors red Volvo truck" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-[1.05fr_0.95fr] md:py-32">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-red-500/40 bg-red-600/15 px-4 py-2 text-sm font-bold">Cross-Border Truckload Carrier</div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">Reliable freight. Sharp trucks. North American reach.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 md:text-xl">Raptors Linehaul is a GTA-based carrier moving Canada–U.S. dry van freight with strong dispatch communication, modern equipment, and service-first execution.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="mailto:info@raptorslh.com" className="rounded-2xl bg-red-600 px-8 py-4 font-black hover:bg-red-700">Request Capacity →</a><a href="mailto:dispatch@raptorslh.com" className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-black hover:bg-white/20">Contact Dispatch</a></div>
          </div>
          <div className="hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl md:block">
            <img src="/logo.png" alt="Raptors Linehaul" className="mx-auto mb-4 w-80 rounded-2xl bg-white p-5" />
            <div className="grid grid-cols-2 gap-3">{credentials.map((x)=><div key={x} className="rounded-2xl border border-white/10 bg-black/50 p-4 text-center text-sm font-black">{x}</div>)}</div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20"><p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">Services</p><h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">Built for cross-border truckload freight.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">From routine dry van freight to expedited team coverage, Raptors gives brokers and shippers dependable capacity backed by real communication.</p><div className="mt-10 grid gap-4 md:grid-cols-3">{services.map((s)=><div key={s} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-lg font-black hover:border-red-500/50 hover:bg-red-600/10">✓ {s}</div>)}</div></section>

      <section id="fleet" className="border-y border-white/10 bg-white/[0.03]"><div className="mx-auto max-w-7xl px-5 py-20"><p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">Fleet</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Equipment that represents the brand.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">Red, black, and white fleet branding with modern Volvo and Freightliner tractors built for long-haul cross-border work.</p><div className="mt-10 grid gap-5 md:grid-cols-4 md:grid-rows-2"><div className="relative overflow-hidden rounded-[2rem] border border-white/10 md:col-span-2 md:row-span-2"><img src="/red-truck-front.jpg" className="h-full min-h-[520px] w-full object-cover" alt="Red Volvo"/><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent"/><div className="absolute bottom-6 left-6"><p className="text-3xl font-black">Flagship red Volvo fleet</p><p className="text-neutral-200">Premium brand presence on the road.</p></div></div><div className="relative overflow-hidden rounded-[2rem] border border-white/10 md:col-span-2"><img src="/fleet-pair.png" className="h-64 w-full object-cover" alt="Raptors trucks"/></div><img src="/red-truck-side.jpg" className="h-64 w-full rounded-[2rem] border border-white/10 object-cover" alt="Red truck side"/><img src="/white-truck.jpeg" className="h-64 w-full rounded-[2rem] border border-white/10 object-cover" alt="White truck"/></div></div></section>

      <section id="lanes" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">Core Lanes</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Capacity where your freight needs to go.</h2><p className="mt-5 text-lg leading-8 text-neutral-300">Focused Canada–U.S. coverage from Ontario into major U.S. markets, supported by appointment protection, driver updates, and paperwork follow-through.</p></div><div className="grid gap-4 sm:grid-cols-2">{lanes.map((lane)=><div key={lane} className="rounded-3xl border border-white/10 bg-neutral-950 p-6 text-xl font-black hover:border-red-500/50">📍 {lane}</div>)}</div></section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-20"><div className="rounded-[2rem] border border-red-500/30 bg-gradient-to-br from-red-700 to-black p-8 md:p-12"><img src="/logo.png" className="mb-7 w-72 rounded-2xl bg-white p-4" alt="Raptors logo"/><h2 className="text-4xl font-black md:text-5xl">Need cross-border capacity?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-red-50">Send your lane, pickup date, commodity, weight, equipment needs, and delivery requirements. Our team will review and respond with available capacity.</p><div className="mt-8 grid gap-3 text-lg font-black"><a href="mailto:info@raptorslh.com">info@raptorslh.com</a><a href="mailto:dispatch@raptorslh.com">dispatch@raptorslh.com</a><span>Add company phone number</span></div></div></section>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-neutral-500">© {new Date().getFullYear()} Raptors Linehaul Inc. All rights reserved. raptorslh.com</footer>
    </main>
  );
}
