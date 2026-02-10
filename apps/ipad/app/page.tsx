import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Top Navigation Tabs - iPad Models */}
      <div className="bg-[#f5f5f7] sticky top-0 z-40">
        <div className="flex items-center justify-center gap-8 h-12 text-xs">
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPad Pro
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPad Air
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPad
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPad mini
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Apple Pencil
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Keyboards
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            AirPods
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Accessories
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPadOS 18
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Shop iPad
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16">
        <div className="max-w-[980px] mx-auto px-8">
          <h1 className="text-6xl font-semibold text-[#1d1d1f] mb-16">iPad</h1>

          {/* iPad Models Grid */}
          <div className="grid grid-cols-4 gap-6 mb-20">
            {/* iPad Pro */}
            <div className="text-center">
              <div className="bg-black rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full">
                  {/* Simulated iPad Pro display with colorful lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-y-3">
                      <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                      <div className="h-1 w-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                      <div className="h-1 w-36 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                      <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#bf4800] font-semibold mb-1">New</p>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                iPad Pro
              </h3>
              <p className="text-sm text-[#1d1d1f] mb-1">
                The ultimate iPad experience
              </p>
              <p className="text-sm text-[#1d1d1f] mb-1">
                with the most advanced technology.
              </p>
              <p className="text-sm text-[#86868b] mb-4">
                From $999 or $83.25/mo. for 12 mo.*
              </p>
              <button className="bg-[#0071e3] text-white text-sm px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors">
                Buy
              </button>
            </div>

            {/* iPad Air */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-blue-400 rounded-3xl transform rotate-12"></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#bf4800] font-semibold mb-1">New</p>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                iPad Air
              </h3>
              <p className="text-sm text-[#1d1d1f] mb-1">
                Serious performance in a
              </p>
              <p className="text-sm text-[#1d1d1f] mb-1">
                thin and light design.
              </p>
              <p className="text-sm text-[#86868b] mb-4">
                From $599 or $49.91/mo. for 12 mo.*
              </p>
              <button className="bg-[#0071e3] text-white text-sm px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors">
                Buy
              </button>
            </div>

            {/* iPad */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-40 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-2xl"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                iPad
              </h3>
              <p className="text-sm text-[#1d1d1f] mb-1">
                The colorful, all‑screen iPad
              </p>
              <p className="text-sm text-[#1d1d1f] mb-1">
                for the things you do every day.
              </p>
              <p className="text-sm text-[#86868b] mb-4">
                From $349 or $29.08/mo. for 12 mo.*
              </p>
              <button className="bg-[#0071e3] text-white text-sm px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors">
                Buy
              </button>
            </div>

            {/* iPad mini */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-20 h-28 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl transform -rotate-12"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                iPad mini
              </h3>
              <p className="text-sm text-[#1d1d1f] mb-1">
                The full iPad experience
              </p>
              <p className="text-sm text-[#1d1d1f] mb-1">
                in an ultraportable design.
              </p>
              <p className="text-sm text-[#86868b] mb-4">
                From $499 or $41.58/mo. for 12 mo.*
              </p>
              <button className="bg-[#0071e3] text-white text-sm px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors">
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apple Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-4xl font-semibold text-[#1d1d1f]">
              Why Apple is the best
              <br />
              place to buy iPad.
            </h2>
            <Link href="#" className="text-[#06c] text-lg hover:underline">
              See all
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6">
              <div className="mb-4">
                <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                  <rect
                    x="8"
                    y="14"
                    width="32"
                    height="20"
                    rx="2"
                    stroke="#1d1d1f"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 18h24M12 22h16M12 26h20"
                    stroke="#1d1d1f"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                Pay over time, interest‑free.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                When you choose to check out with Apple Card Monthly
                Installments.**
              </p>
              <Link
                href="#"
                className="text-[#06c] text-sm hover:underline inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="mb-4">
                <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                  <circle
                    cx="24"
                    cy="24"
                    r="16"
                    stroke="#1d1d1f"
                    strokeWidth="2"
                  />
                  <path
                    d="M24 16v8l6 4"
                    stroke="#1d1d1f"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                Save up to $465 with Apple Trade In.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                Get credit toward your new iPad when you trade in an eligible
                device.***
              </p>
              <Link
                href="#"
                className="text-[#06c] text-sm hover:underline inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="mb-4">
                <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                  <rect
                    x="10"
                    y="12"
                    width="28"
                    height="24"
                    rx="2"
                    stroke="#1d1d1f"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 24h12M18 28h8"
                    stroke="#1d1d1f"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                Trade in a new iPad with Personal Setup.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                Get help transferring your data and setting up your new iPad in
                store or online.****
              </p>
              <Link
                href="#"
                className="text-[#06c] text-sm hover:underline inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="mb-4">
                <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 8L16 16M24 8L32 16M24 8v24"
                    stroke="#1d1d1f"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="12"
                    y="32"
                    width="24"
                    height="8"
                    rx="2"
                    stroke="#1d1d1f"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                Meet your new iPad with Personal Setup.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                Whether you shop online or in a store, we can help you customize
                your new iPad.
              </p>
              <Link
                href="#"
                className="text-[#06c] text-sm hover:underline inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get to Know iPad Section */}
      <section className="py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            Get to know iPad.
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {/* Video Card 1 */}
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gradient-to-br from-orange-400 to-orange-600">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    Watch the film
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Meet your iPad like never before.
                  </h3>
                </div>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center self-start">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gradient-to-br from-gray-700 to-gray-900">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    Hosted by Liza Koshy
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    iPad creativity at your fingertips.
                  </h3>
                </div>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center self-start">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gradient-to-br from-amber-600 to-amber-800">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    Shot on iPad
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Kids See. Take a closer look.
                  </h3>
                </div>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center self-start">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Card 4 */}
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gradient-to-br from-purple-600 to-purple-900">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    Made with
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Discover all the amazing things you can do with iPad.
                  </h3>
                </div>
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center self-start">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iPad Essentials Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            iPad essentials.
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {/* Apple Pencil Card */}
            <div className="bg-white rounded-2xl p-12 text-center">
              <div className="mb-8">
                <div className="inline-block bg-gray-100 rounded-2xl p-8">
                  <div className="relative w-64 h-48">
                    {/* Simulated Apple Pencil drawing */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 300 200" className="w-full h-full">
                        <circle
                          cx="150"
                          cy="100"
                          r="60"
                          fill="#FF6B35"
                          opacity="0.3"
                        />
                        <circle
                          cx="150"
                          cy="100"
                          r="40"
                          fill="#FFB830"
                          opacity="0.5"
                        />
                        <circle cx="150" cy="100" r="20" fill="#FCD34D" />
                        <path
                          d="M100 80 Q150 40 200 80"
                          stroke="#1d1d1f"
                          strokeWidth="2"
                          fill="none"
                        />
                        <text
                          x="150"
                          y="160"
                          textAnchor="middle"
                          fontSize="14"
                          fill="#86868b"
                        >
                          Brainstorm
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                Apple Pencil
              </h3>
              <p className="text-sm text-[#86868b] mb-6">
                Pixel‑perfect precision and low latency for drawing,
                note‑taking, and more.
              </p>
              <Link href="#" className="text-[#06c] text-sm hover:underline">
                Learn more
              </Link>
            </div>

            {/* Keyboards Card */}
            <div className="bg-white rounded-2xl p-12 text-center">
              <div className="mb-8">
                <div className="inline-block bg-gray-100 rounded-2xl p-8">
                  <div className="relative w-64 h-48 flex items-center justify-center">
                    {/* Simulated Keyboard */}
                    <div className="bg-gray-200 rounded-lg p-4 w-56">
                      <div className="grid grid-cols-10 gap-1">
                        {[...Array(30)].map((_, i) => (
                          <div key={i} className="bg-white rounded h-6"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                Keyboards for iPad
              </h3>
              <p className="text-sm text-[#86868b] mb-6">
                Go from laptop to drawing tablet and everything in between.
              </p>
              <Link href="#" className="text-[#06c] text-sm hover:underline">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Significant Others Section */}
      <section className="py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            Significant others.
          </h2>

          <div className="grid grid-cols-2 gap-12">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="border-b border-gray-300 pb-6">
                <button className="w-full text-left flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-[#1d1d1f]">
                    iPad and iPhone
                  </h3>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="mt-4 text-sm text-[#86868b]">
                  <p className="mb-3">
                    Keep a sketch flowing across devices with Universal
                    Clipboard. Use your iPhone to scan a document and it will
                    appear instantly on your iPad. And with iCloud, you can
                    access your files from your iPhone or iPad.
                  </p>
                  <Link href="#" className="text-[#06c] hover:underline">
                    Learn more about iPad and iPhone
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-6">
                <button className="w-full text-left flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-[#1d1d1f]">
                    iPad and Mac
                  </h3>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="border-b border-gray-300 pb-6">
                <button className="w-full text-left flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-[#1d1d1f]">
                    iPad and Apple Watch
                  </h3>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* iPhone Image */}
                <div className="bg-black rounded-3xl p-6 aspect-[9/16] flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-2xl"></div>
                </div>

                {/* iPad Image */}
                <div className="bg-white rounded-3xl shadow-2xl p-4 aspect-[4/3] flex items-center justify-center row-span-2">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop iPad Section */}
      <section className="bg-[#f5f5f7] py-16">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">iPad</h2>

          <div className="grid grid-cols-4 gap-12 text-sm">
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">
                Shop for iPad
              </h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    iPad Pro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPad Air
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPad mini
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Pencil
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Keyboards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    AirPods
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">
                Explore iPad
              </h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    Explore All iPad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPadOS 18
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apps by Apple
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iCloud+
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Education
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">
                More from iPad
              </h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    iPad Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    AppleCare+ for iPad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPadOS 18 Preview
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Final Cut Camera
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Store App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Where to Buy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
