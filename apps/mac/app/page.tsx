import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Top Navigation Tabs - Mac Models */}
      <div className="bg-[#f5f5f7] sticky top-0 z-40">
        <div className="flex items-center justify-center gap-8 h-12 text-xs">
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            MacBook Air
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            MacBook Pro
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            iMac
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Mac mini
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Mac Studio
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Mac Pro
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Displays
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Compare
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Accessories
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            macOS Sequoia
          </Link>
          <Link href="#" className="text-[#1d1d1f] hover:text-[#06c]">
            Shop Mac
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-8">
        <div className="max-w-[980px] mx-auto px-8">
          <h1 className="text-6xl font-semibold text-[#1d1d1f] mb-8">Mac</h1>

          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs text-[#86868b]">New</span>
            <span className="text-xs text-[#86868b]">MacBook Air</span>
            <span className="text-xs text-[#86868b]">iMac</span>
            <span className="text-xs text-[#86868b]">Mac mini</span>
          </div>
        </div>
      </section>

      {/* Mac Lineup Grid */}
      <section className="pb-16">
        <div className="max-w-[980px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-6">
            {/* MacBook Air M3 24" */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div
                    className="w-40 h-24 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-2xl"
                    style={{
                      clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                    }}
                  ></div>
                </div>
              </div>
              <p className="text-xs text-[#bf4800] font-semibold mb-1">New</p>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-1">
                MacBook Air 15
              </h3>
              <p className="text-xs text-[#86868b] mb-1">M3</p>
              <p className="text-sm text-[#1d1d1f] mb-1">
                Lean. Mean. M3 machine.
              </p>
              <p className="text-sm text-[#86868b] mb-4">
                From $1099 or $91.58/mo. for 12 mo.*
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

            {/* MacBook Pro 14" and 16" */}
            <div className="text-center">
              <div className="bg-black bg-center bg-cover bg-no-repeat  bg-[url(https://www.apple.com/assets-www/en_WW/mac/01_product_tile/large/mba_13_15_75c30cc7c.jpg)] rounded-[28px] p-8 mb-4 aspect-3/4 flex items-center justify-center relative overflow-hidden"></div>
              <p className="text-xs text-[#bf4800] font-semibold mb-1">New</p>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-1">
                MacBook Pro 14
              </h3>
              <p className="text-xs text-[#86868b] mb-1">
                M4, M4 Pro, and M4 Max
              </p>
              <p className="text-sm text-[#1d1d1f] mb-1">A work of smart.</p>
              <p className="text-sm text-[#86868b] mb-4">
                From $1599 or $133.25/mo. for 12 mo.*
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

            {/* iMac */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-24 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-t-lg"></div>
                    <div className="w-32 h-2 bg-gray-300 rounded-b-lg"></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#bf4800] font-semibold mb-1">New</p>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-1">
                iMac
              </h3>
              <p className="text-xs text-[#86868b] mb-1">M4</p>
              <p className="text-sm text-[#1d1d1f] mb-1">
                A stunning standout.
              </p>
              <p className="text-sm text-[#86868b] mb-4">
                From $1299 or $108.25/mo. for 12 mo.*
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

            {/* Mac mini */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-[28px] p-8 mb-4 aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-24 h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-lg shadow-xl"></div>
                </div>
              </div>
              <p className="text-xs text-[#bf4800] font-semibold mb-1">New</p>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-1">
                Mac mini
              </h3>
              <p className="text-xs text-[#86868b] mb-1">M4 and M4 Pro</p>
              <p className="text-sm text-[#1d1d1f] mb-1">
                Mighty. Mini. Magic.
              </p>
              <p className="text-sm text-[#86868b] mb-4">
                From $599 or $49.91/mo. for 12 mo.*
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

      {/* Why Apple Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-semibold text-[#1d1d1f]">
              Why Apple is the best
              <br />
              place to buy Mac.
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
                Get flexible delivery and easy pickup.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                Choose two‑hour delivery from an Apple Store, free delivery, or
                easy pickup options.***
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
                Trade in your Mac and get credit.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                Get credit toward your next purchase when you trade in an
                eligible device.****
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
                Customize your Mac.
              </h3>
              <p className="text-sm text-[#86868b] mb-4">
                Choose from a variety of configurations to make your Mac truly
                yours.
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

      {/* Get to Know Mac Section */}
      <section className="py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            Get to know Mac.
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {/* Video Card 1 */}
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gradient-to-br from-purple-600 to-purple-900">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    Apple Intelligence
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Writing Tools help you find just the right words.
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
                    Performance
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Supercharged by Apple silicon.
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
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gradient-to-br from-blue-400 to-blue-600">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    Continuity
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    All your devices work together seamlessly.
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
            <div className="rounded-2xl overflow-hidden relative aspect-[9/16] bg-gradient-to-br from-cyan-400 to-blue-500">
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">
                    macOS Sequoia
                  </p>
                  <h3 className="text-white text-lg font-semibold">
                    Do more than ever with the latest macOS.
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

      {/* Help Me Choose Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[980px] mx-auto px-8 text-center">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">
            Help me choose.
          </h2>
          <p className="text-lg text-[#1d1d1f] mb-8">
            Answer a few simple questions to
            <br />
            find the best Mac for you.
          </p>
          <button className="bg-[#0071e3] text-white text-sm px-6 py-3 rounded-full hover:bg-[#0077ed] transition-colors">
            Get started
          </button>
        </div>
      </section>

      {/* Switch to Mac Section */}
      <section className="py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            Switch to Mac.
          </h2>

          <div className="grid grid-cols-2 gap-12">
            {/* Give an old Mac Bonus */}
            <div className="bg-[#f5f5f7] rounded-2xl p-12">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Give an old Mac Bonus on
                <br />
                the new one.
              </h3>
              <p className="text-sm text-[#86868b] mb-8">
                With Apple Trade In, you can get credit toward a new Mac when
                you trade in your eligible computer. And if your computer isn't
                eligible for credit, we'll recycle it for free. It's good for
                you and the planet.
              </p>
              <Link href="#" className="text-[#06c] text-sm hover:underline">
                Learn more about Apple Trade In
              </Link>
            </div>

            {/* Mac does that */}
            <div className="bg-[#f5f5f7] rounded-2xl p-12">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Mac does that.
              </h3>
              <p className="text-sm text-[#86868b] mb-8">
                Whether you're new to Mac or looking for a refresher, explore
                how to get the most out of your Mac with our tips and tutorials.
              </p>
              <Link href="#" className="text-[#06c] text-sm hover:underline">
                Explore Mac support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mac Essentials Section */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            Mac essentials.
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {/* Mac Accessories Card */}
            <div className="bg-white rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Mac accessories
              </h3>
              <p className="text-sm text-[#86868b] mb-8">
                Explore keyboards, mice, and other essentials.
              </p>

              <div className="mb-8 flex justify-center">
                <div className="relative w-48 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              <Link href="#" className="text-[#06c] text-sm hover:underline">
                Shop Mac accessories
              </Link>
            </div>

            {/* Studio Display Card */}
            <div className="bg-white rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
                Studio Display
              </h3>
              <p className="text-sm text-[#86868b] mb-8">
                A sight to be bold. The 27‑inch 5K Retina display is the perfect
                Mac companion.
              </p>

              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-32 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-lg"></div>
                  <div className="w-48 h-2 bg-gray-300 rounded-b-lg"></div>
                </div>
              </div>

              <Link href="#" className="text-[#06c] text-sm hover:underline">
                Learn more about Studio Display
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unlock the World of Apple Section */}
      <section className="py-20">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
            Unlock the world of Apple.
          </h2>

          <div className="grid grid-cols-2 gap-12">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="border-b border-gray-300 pb-6">
                <button className="w-full text-left flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-[#1d1d1f]">
                    Mac and iPhone
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
                    You can answer calls or messages from your iPhone directly
                    on your Mac. Copy images, video, or text from your iPhone,
                    then paste into another app on your Mac. And with iCloud,
                    you can access your favorite files from either your Mac or
                    iPhone.
                  </p>
                  <Link href="#" className="text-[#06c] hover:underline">
                    Learn more about Mac and iPhone
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-6">
                <button className="w-full text-left flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-[#1d1d1f]">
                    Mac and iPad
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
                    Mac and Apple Watch
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
                <div className="bg-black rounded-3xl p-4 aspect-[9/19] flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl"></div>
                </div>

                {/* Mac Image */}
                <div className="row-span-2">
                  <div className="bg-gray-200 rounded-2xl p-2 aspect-[16/10]">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                  </div>
                  <div
                    className="h-2 bg-gray-300 mx-auto"
                    style={{ width: "60%" }}
                  ></div>
                  <div className="h-12 bg-gray-300 rounded-b-xl"></div>
                </div>

                {/* iPad Image */}
                <div className="bg-white rounded-2xl shadow-xl p-2 aspect-[4/3] flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Mac Section */}
      <section className="bg-[#f5f5f7] py-16">
        <div className="max-w-[980px] mx-auto px-8">
          <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">Mac</h2>

          <div className="grid grid-cols-4 gap-12 text-sm">
            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">Explore Mac</h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    Explore All Mac
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    MacBook Air
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    MacBook Pro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iMac
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Mac mini
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Mac Studio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Mac Pro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Displays
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Compare Mac
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Mac Does That
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#1d1d1f] mb-3">Shop Mac</h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    Shop Mac
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Help Me Choose
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Mac Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Trade In
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
                More from Mac
              </h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    Mac Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    AppleCare+ for Mac
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    macOS Sequoia
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
                    iCloud+
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Mac for Business
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
                Mac for Business
              </h3>
              <ul className="space-y-2 text-[#424245]">
                <li>
                  <Link href="#" className="hover:underline">
                    Mac for Business
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
