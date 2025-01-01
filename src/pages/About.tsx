import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { motion } from "framer-motion";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-soft-black mb-8">
            {t.about.title}
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/2959de24-d4b2-4f92-a2fd-1ab21109c2a7.png"
                  alt="Fani Delidiamanti"
                  className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-gray-700">
                {t.about.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;