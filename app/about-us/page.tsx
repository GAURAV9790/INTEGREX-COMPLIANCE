export default function AboutUsPage() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">About Us</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building sustainable, growth-focused solutions for businesses.
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            We are a technology-driven team focused on creating practical, scalable, and sustainable
            solutions that empower micro, small, and medium enterprises to grow with confidence.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Our Story</h2>
            <p className="text-sm text-gray-700 sm:text-base">
              Our journey started with a simple observation: businesses spend too much time navigating
              complexity and too little time focusing on what they do best. We set out to change that
              by building tools and experiences that simplify operations, unlock insights, and
              accelerate decision-making.
            </p>
            <p className="text-sm text-gray-700 sm:text-base">
              Today, we work closely with organizations of all sizes, with a special focus on MSMEs,
              to help them adopt technology that is intuitive, transparent, and aligned with their
              long-term goals.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">What We Believe</h2>
            <ul className="space-y-3 text-sm text-gray-700 sm:text-base">
              <li>
                <span className="font-semibold text-gray-900">Human-centered design:</span> Technology
                should feel natural, not overwhelming.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Sustainable growth:</span> We prioritize
                decisions that create long-term value over short-term wins.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Transparency & trust:</span> Clear
                communication and measurable outcomes are at the core of every engagement.
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 rounded-2xl bg-gray-50 p-6 sm:p-8 md:grid-cols-3">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Experience</p>
            <p className="text-2xl font-bold text-gray-900">+X years</p>
            <p className="text-xs text-gray-600">of combined industry and technology expertise.</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Sectors</p>
            <p className="text-2xl font-bold text-gray-900">Multiple</p>
            <p className="text-xs text-gray-600">experience across MSME, finance, services, and more.</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Approach</p>
            <p className="text-2xl font-bold text-gray-900">Partner-first</p>
            <p className="text-xs text-gray-600">we collaborate closely with every stakeholder.</p>
          </div>
        </section>

        <section className="mt-4 border-t border-gray-200 pt-6 sm:pt-8">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">Want to work with us?</h2>
          <p className="mt-2 text-sm text-gray-700 sm:text-base">
            Whether you are exploring a new initiative or scaling an existing one, we would love to
            understand your goals and explore how we can help.
          </p>
          <div className="mt-4">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Contact us
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
