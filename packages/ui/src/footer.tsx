import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="max-w-[980px] mx-auto px-4 py-4">
        {/* Disclaimer Text */}
        <div className="text-xs leading-relaxed text-[#6e6e73] mb-6 space-y-3">
          <p>
            Qualified Purchasers can receive Promotion Savings when they
            purchase an eligible Mac or eligible iPad with eligible AirPods at a
            qualifying location. Only one Promotion Product per eligible Mac or
            eligible iPad per Qualified Purchaser. Offer subject to
            availability. While supplies last. Qualified Purchasers selecting
            Apple Card Monthly Installments (ACMI) as payment type at checkout
            shall receive a discount equal to the value of the eligible AirPods
            off the price of the eligible Mac or iPad. This will result in one
            ACMI installment plan over 12 months for the eligible iPad or Mac
            discounted by the instant credit, and a second ACMI installment plan
            over 12 months for the full price of the eligible AirPods. Qualified
            Purchasers who do not select ACMI as the payment type at checkout
            will receive one-time Promotion Savings when they purchase an
            eligible Mac or iPad with eligible AirPods in a single transaction
            at a qualifying location. Promotion Savings will vary based on the
            condition, year, and configuration of your eligible trade-in device.
            Not all devices are eligible for credit. You must be at least the
            age of majority to be eligible to trade in for credit or for an
            Apple Gift Card. Trade-in value may be applied toward qualifying new
            device purchase, or added to an Apple Gift Card. Actual value
            awarded is based on receipt of a qualifying device matching the
            description provided when estimate was made. Sales tax may be
            assessed on full value of a new device purchase. In-store trade-in
            requires presentation of a valid photo ID (local law may require
            saving this information). Offer may not be available in all stores
            and may vary between in-store and online trade-in. Some stores may
            have additional requirements. Apple or its trade-in partners reserve
            the right to refuse, cancel, or limit quantity of any trade-in
            transaction for any reason. More details are available from Apple's
            trade-in partner for trade-in and recycling of eligible devices.
            Restrictions and limitations may apply.
          </p>
          <p>
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p>
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a
            service provider of Goldman Sachs Bank USA for Apple Card and
            Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC
            is a bank.
          </p>
          <p>
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
          </p>
          <p>
            Learn more about how Apple Card applications are evaluated at{" "}
            <Link href="#" className="text-[#06c] hover:underline">
              support.apple.com/kb/HT209218
            </Link>
            .
          </p>
          <p>
            A subscription is required for Apple Arcade, Apple Fitness+, Apple
            Music, and Apple TV.
          </p>
          <p>
            Features are subject to change. Some features, applications, and
            services may not be available in all regions or all languages.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-5 gap-8 py-8 border-t border-[#d2d2d7]">
          {/* Shop and Learn */}
          <div>
            <h3 className="text-xs font-semibold mb-3">Shop and Learn</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Store
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Mac
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  iPad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  iPhone
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Watch
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  AirPods
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  TV & Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  AirTag
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Gift Cards
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-semibold mt-6 mb-3">Apple Wallet</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Wallet
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Card
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Pay
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Cash
                </Link>
              </li>
            </ul>
          </div>

          {/* Account & Entertainment */}
          <div>
            <h3 className="text-xs font-semibold mb-3">Account</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Manage Your Apple Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Store Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  iCloud.com
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-semibold mt-6 mb-3">Entertainment</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple One
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple TV+
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Music
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Arcade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Fitness+
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple News+
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Podcasts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Books
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  App Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Apple Store */}
          <div>
            <h3 className="text-xs font-semibold mb-3">Apple Store</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Find a Store
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Genius Bar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Today at Apple
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Group Reservations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Camp
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Store App
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Certified Refurbished
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Trade In
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Carrier Deals at Apple
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Shopping Help
                </Link>
              </li>
            </ul>
          </div>

          {/* For Business, Education, Healthcare, Government */}
          <div>
            <h3 className="text-xs font-semibold mb-3">For Business</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple and Business
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Shop for Business
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-semibold mt-6 mb-3">For Education</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple and Education
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Shop for K-12
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Shop for College
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-semibold mt-6 mb-3">For Healthcare</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple and Healthcare
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-semibold mt-6 mb-3">For Government</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple and Government
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Shop for Veterans and Military
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Shop for State and Local Employees
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Shop for Federal Employees
                </Link>
              </li>
            </ul>
          </div>

          {/* Apple Values & About Apple */}
          <div>
            <h3 className="text-xs font-semibold mb-3">Apple Values</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Environment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Inclusion and Diversity
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Racial Equity and Justice
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Supply Chain Innovation
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-semibold mt-6 mb-3">About Apple</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Apple Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Ethics & Compliance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#424245] hover:underline">
                  Contact Apple
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* More ways to shop */}
        <div className="py-4 border-t border-[#d2d2d7] text-xs text-[#6e6e73]">
          <p>
            More ways to shop:{" "}
            <Link href="#" className="text-[#06c] hover:underline">
              Find an Apple Store
            </Link>{" "}
            or{" "}
            <Link href="#" className="text-[#06c] hover:underline">
              other retailer
            </Link>{" "}
            near you. Or call{" "}
            <Link
              href="tel:1-800-MY-APPLE"
              className="text-[#06c] hover:underline"
            >
              1-800-MY-APPLE
            </Link>{" "}
            (1-800-692-7753).
          </p>
        </div>

        {/* Bottom Links */}
        <div className="py-4 border-t border-[#d2d2d7] flex justify-between items-center text-xs text-[#6e6e73]">
          <div className="flex items-center space-x-3">
            <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
            <span className="text-[#d2d2d7]">|</span>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="text-[#d2d2d7]">|</span>
            <Link href="#" className="hover:underline">
              Terms of Use
            </Link>
            <span className="text-[#d2d2d7]">|</span>
            <Link href="#" className="hover:underline">
              Sales and Refunds
            </Link>
            <span className="text-[#d2d2d7]">|</span>
            <Link href="#" className="hover:underline">
              Legal
            </Link>
            <span className="text-[#d2d2d7]">|</span>
            <Link href="#" className="hover:underline">
              Site Map
            </Link>
          </div>
          <div>
            <button className="hover:underline">United States</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
