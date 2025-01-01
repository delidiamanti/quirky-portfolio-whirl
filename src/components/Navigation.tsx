import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update background opacity based on scroll position
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleLanguage = () => {
    const newLang = language === 'el' ? 'en' : 'el';
    setLanguage(newLang);
    
    // Update URL based on language
    const currentPath = location.pathname.replace('/eng', '');
    const newPath = newLang === 'en' ? `/eng${currentPath}` : currentPath;
    window.history.pushState({}, '', newPath);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to={language === 'en' ? '/eng' : '/'} className="text-2xl font-serif">
            Delidiamanti
          </Link>
          <div className="flex items-center space-x-8">
            <Link to={language === 'en' ? '/eng' : '/'} className="hover:text-gray-600">
              {t.nav.home}
            </Link>
            <Link to={language === 'en' ? '/eng/about' : '/about'} className="hover:text-gray-600">
              {t.nav.about}
            </Link>
            <Link to={language === 'en' ? '/eng/portfolio' : '/portfolio'} className="hover:text-gray-600">
              {t.nav.portfolio}
            </Link>
            <Link to={language === 'en' ? '/eng/contact' : '/contact'} className="hover:text-gray-600">
              {t.nav.contact}
            </Link>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              {language === 'el' ? 'EN' : 'ΕΛ'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;