import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-soft-green/10 to-transparent" />
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-soft-black mb-6"
          >
            Delidiamanti
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Interior Design & Project Management
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/portfolio"
              className="inline-block bg-soft-black text-white px-8 py-3 rounded-full hover:bg-soft-green transition-colors duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-serif text-soft-black mb-6">
              Creating Timeless Spaces
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With 5 years of experience in interior design and project management,
              we transform spaces into extraordinary environments that reflect your
              unique style and vision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-green/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-on-scroll opacity-0 bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-serif text-soft-black mb-4">
                  {i === 1
                    ? "Interior Design"
                    : i === 2
                    ? "Project Management"
                    : "Hotel Spaces"}
                </h3>
                <p className="text-gray-600">
                  {i === 1
                    ? "Creating beautiful, functional spaces that inspire and delight."
                    : i === 2
                    ? "Ensuring your project is delivered on time and within budget."
                    : "Specialized in luxury hotel design and renovation projects."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-serif text-soft-black mb-8">
              Ready to Transform Your Space?
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-soft-yellow text-soft-black px-8 py-3 rounded-full hover:bg-soft-green transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;