import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Luxury Villa Renovation",
    category: "Residential",
    description: "Complete interior renovation of a luxury villa in Santorini",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
  },
  {
    id: 2,
    title: "Boutique Hotel Design",
    category: "Hospitality",
    description: "Interior design for a boutique hotel with 20 rooms",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    id: 3,
    title: "Restaurant Makeover",
    category: "Commercial",
    description: "Modern restaurant design with traditional elements",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  // Add more projects as needed
];

const Portfolio = () => {
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
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-soft-black mb-6">
            Our Portfolio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of interior design projects,
            showcasing our commitment to excellence and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-soft-green font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-serif text-soft-black mt-2">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;