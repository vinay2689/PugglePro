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
                style={{ ...menuItemStyle, border: "none", background: "rgba(0,255,255,0.05)" }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="32" 
                  height="32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={menuItemStyle}
                >
                  {/* Advanced creative logo with animation effect */}
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0FF" />
                      <stop offset="50%" stopColor="#33F5E5" />
                      <stop offset="100%" stopColor="#00E5C7" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="1" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Brain abstract with tech circuitry */}
                  <path 
                    d="M12,4 C7,4 4,8 4,12 C4,16 7,20 12,20 C17,20 20,16 20,12 C20,8 17,4 12,4 Z" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="1.5"
                    fill="rgba(0,255,255,0.2)"
                    filter="url(#glow)"
                  />
                  
                  {/* Circuit paths */}
                  <path 
                    d="M12,8 C10,8 9,9 9,10 C9,12 11,14 12,14 C13,14 15,12 15,10 C15,9 14,8 12,8 Z" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="1"
                    fill="none"
                  />
                  
                  <path 
                    d="M8,12 L5,12 M16,12 L19,12 M12,8 L12,5 M12,16 L12,19" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  
                  {/* Center node */}
                  <circle cx="12" cy="12" r="2" fill="url(#logoGradient)" />
                </svg>
              </div>
              <motion.span 
                style={{ 
                  color: "#0FF",
                  textShadow: "0 0 10px rgba(0,255,255,0.5)",
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
              onClick={() => onNavigate("professional")}
              className="text-gray-300 hover:text-white transition-colors text-sm"
              style={menuItemStyle}
            >
              <span style={menuItemStyle}>For Professionals</span>
            </button>
            <button
              onClick={() => onNavigate("creators")}
              className="text-gray-300 hover:text-white transition-colors text-sm"
              style={menuItemStyle}
            >
              <span style={menuItemStyle}>For Creators</span>
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
                onNavigate("professional");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 rounded-md"
              style={menuItemStyle}
            >
              <span style={menuItemStyle}>For Professionals</span>
            </button>
            <button
              onClick={() => {
                onNavigate("creators");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 rounded-md"
              style={menuItemStyle}
            >
              <span style={menuItemStyle}>For Creators</span>
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