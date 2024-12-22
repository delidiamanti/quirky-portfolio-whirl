import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-soft-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Delidiamanti</h3>
            <p className="text-gray-300">
              Interior Design & Project Management in Santorini
            </p>
          </div>
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-300 hover:text-soft-green transition-colors"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="block text-gray-300 hover:text-soft-green transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-soft-green transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <p className="text-gray-300">Santorini, Greece</p>
            <p className="text-gray-300">info@delidiamanti.gr</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Delidiamanti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;