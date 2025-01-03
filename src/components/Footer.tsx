import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4 text-gray-900">
              Delidiamanti
            </h3>
            <p className="text-gray-800">
              {t.footer.description}
            </p>
          </div>
          <div>
            <h4 className="text-lg mb-4 text-gray-900">
              {t.footer.quickLinks}
            </h4>
            <div className="space-y-2">
              <Link
                to={language === 'en' ? '/eng' : '/'}
                className="block text-gray-800 hover:text-gray-900 transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                to={language === 'en' ? '/eng/portfolio' : '/portfolio'}
                className="block text-gray-800 hover:text-gray-900 transition-colors"
              >
                {t.nav.portfolio}
              </Link>
              <Link
                to={language === 'en' ? '/eng/contact' : '/contact'}
                className="block text-gray-800 hover:text-gray-900 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-4 text-gray-900">
              {t.footer.contact}
            </h4>
            <p className="text-gray-800">
              Santorini, Greece
            </p>
            <p className="text-gray-800">
              info@delidiamanti.gr
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-800">
            &copy; {new Date().getFullYear()} Delidiamanti. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;