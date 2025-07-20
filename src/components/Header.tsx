import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles, Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(13, 15, 26, 0.8)", "rgba(13, 15, 26, 0.95)"],
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(4px)", "blur(8px)"],
  );

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const navItemVariants = {
    initial: { y: 0 },
    hover: {
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 0 0 rgba(245, 148, 41, 0)" },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(245, 148, 41, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-text-gray/20"
        style={{
          backgroundColor: headerBackground,
          backdropFilter: headerBlur,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <motion.div
                variants={logoVariants}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  to="/"
                  className="text-2xl font-bold text-neutral-white hover:text-neutral-white flex items-center"
                >
                  <motion.div
                    animate={isScrolled ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center"
                  >
                    Sahasra
                  </motion.div>
                  <motion.span
                    className="text-accent-orange ml-1"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    .
                  </motion.span>
                  {isScrolled && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="ml-2 flex items-center"
                    >
                      <Rocket className="w-4 h-4 text-accent-orange" />
                      <span className="text-xs text-accent-orange ml-1 font-normal">
                        TECH
                      </span>
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={navItemVariants}
                  initial="initial"
                  whileHover="hover"
                  custom={index}
                >
                  <Link
                    to={item.href}
                    className={`transition-colors duration-200 font-medium relative ${
                      location.pathname === item.href
                        ? "text-accent-orange"
                        : "text-neutral-white hover:text-accent-orange"
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-orange"
                        layoutId="activeTab"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-orange opacity-0"
                      whileHover={{ opacity: 0.5, scaleX: 1 }}
                      initial={{ scaleX: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="hidden md:block"
              >
                <Button
                  className="bg-accent-orange hover:bg-accent-orange-light text-white border-none relative overflow-hidden"
                  size="sm"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Rocket className="w-4 h-4 mr-2" />
                  Launch Call
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <motion.button
                className="md:hidden text-neutral-white hover:text-accent-orange transition-colors relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden bg-secondary-dark/95 backdrop-blur-sm border-t border-neutral-text-gray/20 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: isMenuOpen ? 0 : -50,
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-accent-orange"
                      : "text-neutral-white hover:text-accent-orange"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              className="pt-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: isMenuOpen ? 0 : -50,
                opacity: isMenuOpen ? 1 : 0,
              }}
              transition={{ delay: navigation.length * 0.1, duration: 0.3 }}
            >
              <Button
                className="w-full bg-accent-orange hover:bg-accent-orange-light text-white border-none"
                size="sm"
                onClick={() => navigate("/getintouch")}
              >
                <Rocket className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
