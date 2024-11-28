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

           {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              {
                icon: faFacebookF,
                color: "blue-400",
                href: "https://www.facebook.com",
              },
              {
                icon: faInstagram,
                color: "pink-400",
                href: "https://www.instagram.com",
              },
              {
                icon: faWhatsapp,
                color: "green-400",
                href: "https://www.whatsapp.com",
              },
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
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            {[
              "Breakfast",
              "Curry / Dal",
              "Rice",
              "Jain",
              "Sweet / Dessert",
              "QB Bundle",
            ].map((category, index) => (
              <li key={index}>
                <Link
                  href={`/${category.toLowerCase().replace(/ |\/|\s+/g, "-")}`} // Convert titles to URL-friendly links
                  className="hover:font-bold font-sans hover:text-orange-400 hover:underline transition-all"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
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

       

        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Services</h3>
          <ul className="space-y-2">
            {[
              "Consumer Policy",
              "Privacy Policy",
              "Terms & Conditions",
              "Shipping Policy",
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={`/${link.toLowerCase().replace(/ & | /g, "-")}`} // Convert titles to URL-friendly links
                  className="hover:font-bold font-sans hover:text-orange-400 hover:underline transition-all"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
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
