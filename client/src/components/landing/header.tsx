import { useState, useEffect } from "react";
import { ThemeOption } from "@/lib/color-themes";
import { motion } from "framer-motion";

interface HeaderProps {
  theme: ThemeOption;
  onNavigate: (section: string) => void;
}

export default function Header({ theme, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Style with zero shadow properties
  const menuItemStyle = {
    boxShadow: "none !important", 
    textShadow: "none !important", 
    filter: "none !important", 
    WebkitFilter: "none !important",
    background: "transparent !important",
    backdropFilter: "none !important",
    WebkitBackdropFilter: "none !important",
    textRendering: "optimizeLegibility",
    fontSmooth: "never",
    MozOsxFontSmoothing: "grayscale"
  };

  return (
    <header
      className="fixed w-full z-50 transition-all"
      style={menuItemStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={menuItemStyle}>
        <div className="flex justify-between items-center py-6" style={menuItemStyle}>
          <div className="flex items-center" style={menuItemStyle}>
            <div
              className="font-bold text-xl flex items-center text-white"
              style={menuItemStyle}
            >
              <div 
                className="relative h-10 w-10 mr-3 rounded-full flex items-center justify-center overflow-hidden" 
                style={{ ...menuItemStyle, border: "none", background: "rgba(0,255,255,0.15)" }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="32" 
                  height="32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={menuItemStyle}
                >
                  {/* Code brackets logo with glow effect */}
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0FF" />
                      <stop offset="100%" stopColor="#00E5C7" />
                    </linearGradient>
                    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="innerGlow" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur stdDeviation="1" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Code brackets with glow effect */}
                  <path 
                    d="M8,4 L4,12 L8,20" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                  />
                  
                  <path 
                    d="M16,4 L20,12 L16,20" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                  />
                  
                  {/* Slash for code */}
                  <path 
                    d="M14,4 L10,20" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#innerGlow)"
                  />
                </svg>
              </div>
              <motion.span 
                style={{ 
                  color: "#0FF",
                  textShadow: "0 0 15px rgba(0,255,255,0.7), 0 0 25px rgba(0,255,255,0.5)",
                  fontWeight: "700",
                  ...menuItemStyle }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Puggle
              </motion.span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8" style={menuItemStyle}>
            <button
              onClick={() => onNavigate("features")}
              className="text-gray-300 hover:text-white transition-colors text-sm"
              style={menuItemStyle}
            >
              <span style={menuItemStyle}>Features</span>
            </button>
            <button
              onClick={() => onNavigate("benefits")}
              className="text-gray-300 hover:text-white transition-colors text-sm"
              style={menuItemStyle}
            >
              <span style={menuItemStyle}>Benefits</span>
            </button>
            
            <button
              onClick={() => onNavigate("request-demo")}
              className="px-4 py-1.5 text-sm text-white rounded-full transition-all hover:bg-opacity-30"
              style={{...menuItemStyle, border: "1px solid rgba(255,255,255,0.1)"}}
            >
              <span style={menuItemStyle}>Sign Up</span>
            </button>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{...menuItemStyle, border: "1px solid rgba(255,255,255,0.1)"}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={menuItemStyle}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div 
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} rounded-xl mt-2 overflow-hidden`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          style={{...menuItemStyle, border: "1px solid rgba(255,255,255,0.1)"}}
        >
          <div className="py-4 space-y-2 px-4" style={menuItemStyle}>
            <button
              onClick={() => {
                onNavigate("features");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 rounded-md"
              style={menuItemStyle}
            >
              <span style={menuItemStyle}>Features</span>
            </button>
            <button
              onClick={() => {
                onNavigate("benefits");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 rounded-md"
              style={menuItemStyle}
            >
              <span style={menuItemStyle}>Benefits</span>
            </button>
            <button
              onClick={() => {
                onNavigate("request-demo");
                setIsMobileMenuOpen(false);
              }}
              className="mt-3 w-full text-center px-3 py-2 text-white rounded-md text-sm"
              style={{...menuItemStyle, border: "1px solid rgba(255,255,255,0.1)"}}
            >
              <span style={menuItemStyle}>Sign Up</span>
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}