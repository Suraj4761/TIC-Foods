import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 font-sans">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tasty Indian Cuisine</h3>
          <p className="text-gray-400">
            We bring you the best flavors of India with our curated selection of
            authentic Indian dishes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Menu", "About Us", "Contact"].map((link, index) => (
              <li key={index}>
                <Link
                  href=""
                  className="hover:font-bold font-sans hover:text-orange-400 hover:underline transition-all"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { icon: faFacebookF, color: "blue-400", href: "https://www.facebook.com" },
              { icon: faInstagram, color: "pink-400", href: "https://www.instagram.com" },
              { icon: faWhatsapp, color: "green-400", href: "https://www.whatsapp.com" },
            ].map((social, index) => (
              <Link href={social.href} key={index} target="_blank">
                <FontAwesomeIcon
                  icon={social.icon}
                  className={`text-2xl hover:text-${social.color} transition-all`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get the latest updates and offers!
          </p>
          <form className="flex flex-col md:flex-row w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg md:rounded-none md:rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button
              className={`bg-yellow-500 px-3 py-2 rounded-lg md:rounded-none md:rounded-r-lg hover:bg-yellow-600 w-full md:w-auto ${isMobile ? "mt-2" : ""}`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 font-sans">
        &copy; {new Date().getFullYear()} Tasty Indian Cuisine. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
