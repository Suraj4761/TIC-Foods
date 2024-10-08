import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 font-sans">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tasty Indian Cuisine</h3>
          <p className="text-gray-400">
            We bring you the best flavors of India with our curated selection of authentic Indian dishes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 ">
            <li>
              <Link href="" className="hover:font-bold font-sans hover:text-orange-400 hover:underline transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="hover:font-bold font-sans hover:text-orange-400 hover:underline transition-all">
                Menu
              </Link>
            </li>
            <li>
              <Link href="" className="hover:font-bold font-sans hover:text-orange-400 hover:underline transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link href="" className="hover:font-bold font-sans  hover:text-orange-400 hover:underline transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl hover:text-blue-400 transition-all" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-400 transition-all" />
            </Link>
            <Link href="https://www.whatsapp.com" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl hover:text-green-400 transition-all" />
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get the latest updates and offers!
          </p>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className={isMobile ? "w-full px-3 py-2 mb-2 rounded-lg text-gray-800 focus:outline-none": "w-full px-3 py-2 rounded-lg  md:mb-0 md:rounded-l-lg md:rounded-none text-gray-800 focus:outline-none"}
            />
            <button className={isMobile ? "bg-yellow-500 px-3 py-2 rounded-lg hover:bg-yellow-600 w-full md:w-auto": "bg-yellow-500 px-3 py-2 rounded-lg md:rounded-r-lg md:rounded-none hover:bg-yellow-600 w-full md:w-auto"}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 font-sans">
        &copy; {new Date().getFullYear()} Tasty Indian Cuisine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
