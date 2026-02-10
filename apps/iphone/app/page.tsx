import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Top Navigation Tabs - iPhone Models */}
      <div className="bg-[#f5f5f7] sticky top-0 z-40">
        <div className="flex items-center justify-center gap-8 h-12 text-xs">
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPhone 16 Pro
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPhone 16
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPhone 15
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPhone 14
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iPhone SE
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Compare
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            AirPods
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            AirTag
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Accessories
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iOS 18
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Shop iPhone
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16">
        <div className="max-w-[980px] mx-auto px-8">
          <h1 className="text-6xl font-semibold text-[#1d1d1f] mb-16">
            iPhone
          </h1>

          {/* iPhone Color Lineup */}
          <div className="flex items-center justify-center gap-6 mb-20">
            {/* iPhone 16 Pro - Natural Titanium */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-gray-400 to-gray-600 rounded-lg mb-2"></div>
              <span className="text-xs text-[#86868b]">Natural Titanium</span>
            </div>

            {/* iPhone 16 Pro - Blue Titanium */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-blue-300 to-blue-600 rounded-lg mb-2"></div>
              <span className="text-xs text-[#86868b]">Blue Titanium</span>
            </div>

            {/* iPhone 16 Pro - White Titanium */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg mb-2"></div>
              <span className="text-xs text-[#86868b]">White Titanium</span>
            </div>

            {/* iPhone 16 Pro - Black Titanium */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-gray-700 to-black rounded-lg mb-2"></div>
              <span className="text-xs text-[#86868b]">Black Titanium</span>
            </div>

            {/* iPhone 16 - Ultramarine */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-blue-400 to-blue-700 rounded-lg mb-2"></div>
              <span className="text-xs text-[#86868b]">Ultramarine</span>
            </div>

            {/* iPhone 16 - Teal */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-teal-300 to-teal-600 rounded-lg mb-2"></div>
              <span className="text-xs text-[#86868b]">Teal</span>
            </div>

            {/* iPhone 16 - Pink */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-pink-300 to-pink-500 rounded-lg mb-2"></div>
              <span className="text-xs text-[#86868b]">Pink</span>
            </div>

            {/* iPhone SE - Blue */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-gradient-to-b from-sky-200 to-sky-400 rounded-full mb-2"></div>
              <span className="text-xs text-[#86868b]">Blue</span>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the Lineup Section */}
      <section className="py-16">
        <div className="max-w-[980px] mx-auto px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1d1d1f]">
              Explore the lineup.
            </h2>
            <Link href="#" className="text-[#06c] text-lg hover:underline">
              Compare all models
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {/* iPhone 16 Pro */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-28 h-56 bg-gradient-to-b from-orange-400 to-orange-600 rounded-[40px] shadow-2xl"></div>
                </div>
              </div>
              <p className="text-xs text-[#bf4800] font-semibold mb-1">New</p>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                iPhone 16 Pro
              </h3>
              <p className="text-sm text-[#1d1d1f] mb-1">
                The ultimate iPhone.
              </p>
              <p className="text-sm text-[#86868b] mb-4">
                From $999 or $41.62/mo. for 24 mo.*
              </p>
              <button className="bg-[#0071e3] text-white text-sm px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors mb-2">
                Buy
              </button>
              <div className="mt-2">
                <Link href="#" className="text-[#06c] text-sm hover:underline">
                  Learn more
                </Link>
              </div>
            </div>

            {/* iPhone 16 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-28 h-56 bg-gradient-to-b from-blue-300 to-blue-500 rounded-[40px] shadow-2xl"></div>
                </div>
              </div>
              <p className="text-xs text-[#bf4800] font-semibold mb-1">New</p>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                iPhone 16
              </h3>
              <p className="text-sm text-[#1d1d1f] mb-1">A total powerhouse.</p>
              <p className="text-sm text-[#86868b] mb-4">
                From $799 or $33.29/mo. for 24 mo.*
              </p>
              <button className="bg-[#0071e3] text-white text-sm px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors mb-2">
                Buy
              </button>
              <div className="mt-2">
                <Link href="#" className="text-[#06c] text-sm hover:underline">
                  Learn more
                </Link>
              </div>
            </div>

            {/* iPhone 15 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-28 h-56 bg-gradient-to-b from-purple-400 to-purple-600 rounded-[40px] shadow-2xl"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                iPhone 15
              </h3>
              <p className="text-sm text-[#1d1d1f] mb-1">A great value.</p>
              <p className="text-sm text-[#86868b] mb-4">
                From $699 or $29.12/mo. for 24 mo.*
              </p>
              <button className="bg-[#0071e3] text-white text-sm px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors mb-2">
                Buy
              </button>
              <div className="mt-2">
                <Link href="#" className="text-[#06c] text-sm hover:underline">
                  Learn more
                </Link>
              </div>
            </div>

            {/* iPhone 14 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-28 h-56 bg-gradient-to-b from-indigo-400 to-indigo-700 rounded-[40px] shadow-2xl"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">
                iPhone 14
              </h3>
              <p className="text-sm text-[#1d1d1f] mb-1">As amazing as ever.</p>
              <p className="text-sm text-[#86868b] mb-4">
                From $599 or $24.95/mo. for 24 mo.*
              </p>
              <button className="bg-[#0071e3] text-white text-sm px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors mb-2">
                Buy
              </button>
              <div className="mt-2">
                <Link href="#" className="text-[#06c] text-sm hover:underline">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take a Closer Look Section */}
      <section className="py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            Take a closer look.
          </h2>

          <div className="bg-gradient-to-r from-gray-100 to-orange-100 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-2 items-center min-h-[400px]">
              <div className="p-12">
                <p className="text-xs text-[#bf4800] font-semibold mb-3">
                  iPhone 16 Pro
                </p>
                <h3 className="text-5xl font-semibold text-[#1d1d1f] mb-6">
                  It's Glowtime for
                  <br />
                  Apple Intelligence.
                </h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-[#06c] text-lg hover:underline"
                  >
                    Learn more
                  </Link>
                  <Link
                    href="#"
                    className="text-[#06c] text-lg hover:underline"
                  >
                    Buy
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center p-12">
                <div className="relative">
                  <div className="w-64 h-80 bg-gradient-to-b from-orange-400 to-orange-600 rounded-[50px] shadow-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apple Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            Why Apple is the best
            <br />
            place to buy iPhone.
          </h2>

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
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                Get 3% Daily Cash back with Apple Card.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                And pay over time, interest-free when you choose to check out
                with Apple Card Monthly Installments.**
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
                <div className="w-16 h-12 relative">
                  <div className="absolute left-0 w-10 h-10 bg-white border-2 border-gray-300 rounded-lg shadow"></div>
                  <div className="absolute right-0 w-10 h-10 bg-gray-100 border-2 border-gray-300 rounded-lg shadow"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                Save up to $650 on a new iPhone.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                Trade in your current iPhone and get credit toward a new one.***
              </p>
              <Link
                href="#"
                className="text-[#06c] text-sm hover:underline inline-flex items-center"
              >
                Get your estimate
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
                <div className="flex gap-2">
                  <div className="w-8 h-12 bg-blue-500 rounded"></div>
                  <div className="w-8 h-12 bg-pink-500 rounded"></div>
                  <div className="w-8 h-12 bg-yellow-500 rounded"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                Get flexible delivery and easy pickup.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                Choose two-hour delivery from an Apple Store, free delivery, or
                easy pickup options.****
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
                    d="M16 20h16M16 24h12M16 28h14"
                    stroke="#1d1d1f"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                Get help buying with a Specialist.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                Connect with a Specialist online or visit an Apple Store for
                personalized support.
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

      {/* Get to Know iPhone Section */}
      <section className="py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            Get to know iPhone.
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {/* Video Card 1 */}
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gradient-to-br from-orange-500 to-orange-700">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    Apple Intelligence
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Writing Tools can proofread your writing and rewrite
                    different versions.
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
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-black">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    Camera Control
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Capture the perfect shot faster than ever.
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
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gray-800">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    Audio Mix
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Say hello. Say goodbye. Say it in studio quality.
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
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gradient-to-br from-blue-600 to-blue-900">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    The latest iPhone
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Customize your Lock Screen and Home Screen.
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

      {/* iPhone Essentials Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            iPhone essentials.
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {/* MagSafe Accessories Card */}
            <div className="bg-white rounded-2xl p-12">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                MagSafe
              </h3>
              <p className="text-sm text-[#86868b] mb-8">
                Snap on a magnetic case, wallet, or battery pack.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Case */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-28 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl mb-2"></div>
                </div>
                {/* Wallet */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl mb-2"></div>
                </div>
                {/* Battery Pack */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-28 bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl mb-2"></div>
                </div>
              </div>

              <Link href="#" className="text-[#06c] text-sm hover:underline">
                Shop MagSafe
              </Link>
            </div>

            {/* AirTag Card */}
            <div className="bg-white rounded-2xl p-12">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                AirTag
              </h3>
              <p className="text-sm text-[#86868b] mb-8">
                Attach one to your keys. Put another in your backpack. If
                they're misplaced, just use the Find My app.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* AirTags */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#1d1d1f" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full mb-2"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white border-4 border-gray-200 rounded-full mb-2"></div>
                </div>
              </div>

              <Link href="#" className="text-[#06c] text-sm hover:underline">
                Buy AirTag
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
                    iPhone and Mac
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
                    You can answer calls, reply to texts, and unlock your Mac
                    simply by having your iPhone nearby. You can even copy
                    something on iPhone and paste it on Mac, and vice versa.
                  </p>
                  <Link href="#" className="text-[#06c] hover:underline">
                    Learn more about iPhone and Mac
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-6">
                <button className="w-full text-left flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-[#1d1d1f]">
                    iPhone and iPad
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
                    iPhone and Apple Watch
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
              <div className="flex gap-4 items-end">
                {/* iPhone */}
                <div className="flex-1">
                  <div className="bg-black rounded-3xl p-4 aspect-[9/19] flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl"></div>
                  </div>
                </div>

                {/* Mac */}
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-2xl p-2 aspect-[16/10]">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                  </div>
                  <div
                    className="h-2 bg-gray-300 mx-auto"
                    style={{ width: "60%" }}
                  ></div>
                  <div className="h-12 bg-gray-300 rounded-b-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop iPhone Section */}
      <section className="bg-[#f5f5f7] py-16">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            iPhone
          </h2>

          <div className="grid grid-cols-4 gap-12 text-sm">
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">
                Explore iPhone
              </h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    Explore All iPhone
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone 16 Pro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone 16
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone 15
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone 14
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone SE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Compare iPhone
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Switch from Android
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">Shop iPhone</h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    Shop iPhone
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Trade In
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Carrier Deals at Apple
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Financing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">
                More from iPhone
              </h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    AppleCare+ for iPhone
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iOS 18
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apps by Apple
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iCloud+
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Wallet, Pay, Card
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Siri
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">
                iPhone for Business
              </h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone for Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shop for Business
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
