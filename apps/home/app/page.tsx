"use client";
import { useAppDispatch } from "@repo/store/hooks";
import { addToCart } from "@repo/store/slice/cart-slice";

export default function Home() {
  const dispatch = useAppDispatch();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(
      addToCart({
        uuid: "1",
        description: "hellp",
        images: ["hello"],
        price: 100,
        quantity: 10,
        title: "Hello",
      }),
    );
  };
  return (
    <div className="bg-white">
      {/* SECTION 1: iPhone 16 Pro - Full Width Hero Video */}
      <section className="relative h-[100vh] w-full overflow-hidden bg-black text-white bg-top bg-contain bg-[url(https://www.apple.com/v/home/cl/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_mediumtall_2x.jpg)]">
        <div className="relative z-10 flex flex-col items-center pt-14 text-center">
          <h2 className="text-4xl text-black md:text-6xl font-semibold tracking-tight">
            iPhone 16 Pro
          </h2>
          <p className="mt-4 text-xl text-black md:text-2xl font-normal">
            Built for Apple Intelligence.
          </p>
          <div className="mt-6 flex gap-4 text-lg">
            <button className="rounded-full bg-[#0071e3] px-6 py-3 font-semibold hover:bg-[#0077ed] transition">
              Learn more
            </button>
            <button
              onClick={handleAddToCart}
              className="rounded-full border border-[#0071e3] px-6 py-3 font-semibold text-[#2997ff] hover:bg-[#0071e3] hover:text-white transition"
            >
              Buy
            </button>
          </div>
        </div>

        {/* Apple's Hero Video Asset */}
      </section>

      {/* SECTION 2: iPhone 16 - Secondary Hero */}
      <section className="relative h-[90vh] w-full mt-3 overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="relative z-10 flex flex-col items-center pt-14 text-center">
          <h2 className="text-4xl text-black md:text-6xl font-semibold tracking-tight mix-blend-difference">
            WATCH SERIES 11
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-black font-normal mix-blend-difference">
            The ultimate way to watch your health
          </p>
          <div className="mt-6 flex gap-4 text-lg">
            <button className="rounded-full bg-[#0071e3] text-white px-6 py-3 font-semibold hover:bg-[#0077ed] transition">
              Learn more
            </button>
            <button className="rounded-full border border-[#0071e3] px-6 py-3 font-semibold text-[#2997ff] hover:bg-[#0071e3] hover:text-white transition">
              Buy
            </button>
          </div>
        </div>
        <img
          src="https://www.apple.com/v/home/cl/images/heroes/apple-watch-series-11/hero_apple_watch_series_11__bdz1mml4dx6q_mediumtall_2x.jpg"
          alt="iPhone 16"
          className="absolute bottom-0 left-1/2 w-full max-w-[1200px] -translate-x-1/2 object-contain"
        />
      </section>

      {/* SECTION 3: 2x2 Grid (Watch, Mac, iPad, Vision) */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 px-3">
        {/* Watch Series 10 */}
        <div className="relative h-[580px] overflow-hidden bg-[#f5f5f7] rounded-none flex flex-col items-center text-center pt-12">
          <div className="z-10">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight flex items-center justify-center">
              <span className="mr-1 text-white">WATCH</span>{" "}
              <span className="text-red-600 font-bold italic text-sm">
                SERIES 10
              </span>
            </h3>
            <p className="mt-2 text-white text-lg">Thinner. Faster. Powerhouse.</p>
            <div className="mt-4 flex gap-4 justify-center ">
              <a
                href="#"
                className="rounded-full bg-[#0071e3] px-6 py-3 font-semibold text-white"
              >
                Learn more
              </a>
              <a
                href="#"
                className="rounded-full text-white border border-[#0071e3] px-6 py-3 font-semibold "
              >
                Buy
              </a>
            </div>
          </div>
          <img
            src="https://www.apple.com/v/home/cl/images/promos/apple-watch-unity/promo_apple_watch_unity__casvx9ysh1le_medium_2x.jpg"
            className="absolute w-full inset-0 top-5- object-top object-cover"
            alt="Apple Watch"
          />
        </div>

        {/* MacBook Pro */}
        <div className="relative h-[580px] overflow-hidden bg-black text-white flex flex-col items-center text-center pt-12">
          <div className="z-10">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              MacBook Pro
            </h3>
            <p className="mt-2 text-lg">Mind-blowing. M4 Pro and Max.</p>
            <div className="mt-4 flex gap-4 justify-center ">
              <a
                href="#"
                className="rounded-full bg-[#0071e3] px-6 py-3 font-semibold "
              >
                Learn more
              </a>
              <a
                href="#"
                className="rounded-full border border-[#0071e3] px-6 py-3 font-semibold "
              >
                Buy
              </a>
            </div>
          </div>
          <img
            src="https://www.apple.com/v/home/cl/images/promos/macbook-pro-m5/promo_macbook_pro_m5__gnwzdhijhm6a_medium_2x.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            alt="MacBook Pro"
          />
        </div>

        {/* Apple Vision Pro */}
        <div className="relative h-[580px] overflow-hidden bg-white flex flex-col items-center text-center pt-12">
          <div className="z-10">
            <h3 className="text-3xl text-black md:text-4xl font-semibold tracking-tight flex items-center justify-center">
              <span className="font-bold">Airpod Pro</span>
            </h3>
            <p className="mt-2 text-lg italic text-black font-medium">
              The era of spatial computing is here.
            </p>
            <div className="mt-4 flex gap-4 justify-center ">
              <a
                href="#"
                className="rounded-full bg-[#0071e3] px-6 py-3 font-semibold text-white"
              >
                Learn more
              </a>
              <a
                href="#"
                className="rounded-full border border-[#0071e3] text-[#0071e3] px-6 py-3 font-semibold "
              >
                Buy
              </a>
            </div>
          </div>
          <img
            src="https://www.apple.com/v/home/cl/images/promos/airpods-pro-3/promo_airpodspro_3__f6xmza7bglei_medium_2x.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Vision Pro"
          />
        </div>

        {/* iPad Pro */}
        <div className="relative h-[580px] overflow-hidden bg-black text-white flex flex-col items-center text-center pt-12">
          <div className="z-10">
            <h3 className="text-3xl md:text-4xl font-semibold text-black tracking-tight">
              iPad Pro
            </h3>
            <p className="mt-2 text-lg text-black font-light ">
              Unbelievably thin. Incredibly powerful.
            </p>
            <div className="mt-4 flex gap-4 justify-center ">
              <a
                href="#"
                className="rounded-full bg-[#0071e3] px-6 py-3 font-semibold "
              >
                Learn more
              </a>
              <a
                href="#"
                className="rounded-full border border-[#0071e3] text-[#0071e3] px-6 py-3 font-semibold "
              >
                Buy
              </a>
            </div>
          </div>
          <img
            src="https://www.apple.com/v/home/cl/images/promos/ipad-air/promo_ipad_air_avail__6i02t7nujr62_medium_2x.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="iPad Pro"
          />
        </div>
      </div>
    </div>
  );
}
