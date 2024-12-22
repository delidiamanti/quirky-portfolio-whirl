import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4 text-black drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]">Delidiamanti</h3>
            <p className="text-black drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]">
              Interior Design & Project Management in Santorini
            </p>
          </div>
          <div>
            <h4 className="text-lg mb-4 text-black drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-black hover:text-soft-green transition-colors drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="block text-black hover:text-soft-green transition-colors drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block text-black hover:text-soft-green transition-colors drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-4 text-black drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]">Contact</h4>
            <p className="text-black drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]">Santorini, Greece</p>
            <p className="text-black drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]">info@delidiamanti.gr</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-black drop-shadow-[0_0_8px_rgba(255,229,160,0.8)]">&copy; {new Date().getFullYear()} Delidiamanti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;