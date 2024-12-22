import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-serif tracking-wider text-soft-black hover:opacity-80 transition-opacity"
          >
            Delidiamanti
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" current={location.pathname}>
              Home
            </NavLink>
            <NavLink to="/portfolio" current={location.pathname}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" current={location.pathname}>
              Contact
            </NavLink>
          </div>
          <button className="md:hidden">Menu</button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  to,
  children,
  current,
}: {
  to: string;
  children: React.ReactNode;
  current: string;
}) => (
  <Link
    to={to}
    className={`relative text-soft-black hover:text-soft-green transition-colors duration-300 ${
      current === to ? "after:w-full" : "after:w-0"
    } after:h-0.5 after:bg-soft-green after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-full`}
  >
    {children}
  </Link>
);

export default Navigation;