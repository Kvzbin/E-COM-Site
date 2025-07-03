import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white px-6 py-10">
      {/* Main Footer Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* === Div A: Top Section === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
          {/* A1 */}
          <div className="ml-0 mr-0 sm:ml-14 sm:mr-14">
            <h3 className="text-xl font-semibold mb-3">Meoww</h3>
            <p className="text-sm">
              The style and color combination of clothes play a key role in
              defining personal fashion. A well-coordinated outfit balances
              tones, textures, and fit to create a polished look. Neutral colors
              like black, white, beige, and navy offer versatility and elegance,
              while bold colors such as red, mustard, or emerald green can add
              personality and flair. Combining complementary colors or layering
              light and dark shades creates harmony in an outfit.
            </p>
          </div>

          {/* A2: Wraps two blocks (grid responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {/* A2-1 */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/delivery" className="hover:underline">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="/private-policy" className="hover:underline">
                    Private Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* A2-2 */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
              <p className="text-sm">Email: info@example.com</p>
              <p className="text-sm">Phone: +91-1234567890</p>
              <p className="text-sm mb-8">Location: India</p>

              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-sm">123 Maple Street, Greenview Heights</p>
              <p className="text-sm">New Delhi, 110045, India</p>
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          <h3 className="text-xl font-semibold mb-1">Get in touch</h3>
        </div> */}
        <div>
          <div className="text-center font-semibold text-lg mb-4">
            <p className="">Follow On Social Media</p>
          </div>
          <div className="flex justify-center gap-4 text-white text-xl mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white border-t border-orange-300 pt-4">
          <div>&copy; 2025 Your Company</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
