import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const FloatingWhatsApp = () => {
  return (
    <Link href="https://wa.me/1234567890" target="_blank" aria-label="Chat on WhatsApp"> {/* Replace with your number */}
      <div className="fixed bottom-4 right-4 z-50">
        <FontAwesomeIcon 
          icon={faWhatsapp} 
          className="text-green-500 text-4xl hover:text-green-600 transition-all" 
          style={{ width: '50px', height: '50px' }} // Adjust size here
        />
      </div>
    </Link>
  );
};

export default FloatingWhatsApp;
