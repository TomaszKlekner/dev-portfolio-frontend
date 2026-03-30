import { useState } from "react";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router";

export interface LinkProp {
  to: string;
  name: string;
}

let navLinks: LinkProp[] = [
  { to: "/", name: "Home" },
  { to: "/projects", name: "Projects" },
  { to: "/blog", name: "Blog" },
  { to: "/about", name: "About" },
  { to: "/contact", name: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseClass = "transition hover:text-blue-400";
  const activeClass = "text-blue-400 font-semibold";

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400 text-xl" />
          <span>Developer Portfolio</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            {navLinks.map(({ to, name }, index) => (
              <NavLink
                key={index}
                to={to}
                className={({ isActive }) =>
                  isActive ? activeClass : baseClass
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Nav Hamburger Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-400 text-xl cursor-pointer"
            type="button"
            title="Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
          {navLinks.map(({ to, name }, index) => (
            <NavLink
              key={index}
              to={to}
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
              onClick={() => setIsOpen(false)}
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
