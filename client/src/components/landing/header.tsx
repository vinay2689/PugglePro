import { useState, useEffect } from "react";
import { ThemeOption } from "@/lib/color-themes";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
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

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div
              className="font-bold text-xl flex items-center text-white"
            >
              <div 
                className="relative h-10 w-10 mr-3 rounded-full flex items-center justify-center overflow-hidden cluely-glass" 
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="28" 
                  height="28" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* echidna body - slightly darker than hedgehog */}
                  <ellipse cx="12" cy="14" rx="6.5" ry="5.5" fill="#9E7A5C" />
                  
                  {/* many more spikes - echidnas have denser, thinner spikes */}
                  <path d="M5 9L3 6M7 7L5.5 4M9 6L8 3M11 5.5L10.5 2.5M13 5.5L13.5 2.5M15 6L16 3M17 7L18.5 4M19 9L21 6" 
                    stroke="#6B563E" strokeWidth="1" strokeLinecap="round" />
                  <path d="M5 13L2 12M4 15L1 15M6 17L3 19M9 18L8 21M12 18.5L12 21.5M15 18L16 21M18 17L21 19M20 15L23 15M19 13L22 12" 
                    stroke="#6B563E" strokeWidth="1" strokeLinecap="round" />
                  
                  {/* additional middle spikes for more density */}
                  <path d="M6 11L3.5 9.5M10 8L9 5.5M14 8L15 5.5M18 11L20.5 9.5" 
                    stroke="#6B563E" strokeWidth="1" strokeLinecap="round" />
                  <path d="M5 16L2.5 17.5M19 16L21.5 17.5" 
                    stroke="#6B563E" strokeWidth="1" strokeLinecap="round" />
                  
                  {/* face - echidnas have smaller eyes */}
                  <ellipse cx="10" cy="13" rx="0.8" ry="1" fill="#333333" />
                  <ellipse cx="14" cy="13" rx="0.8" ry="1" fill="#333333" />
                  
                  {/* highlight in eyes */}
                  <circle cx="9.8" cy="12.7" r="0.3" fill="white" />
                  <circle cx="13.8" cy="12.7" r="0.3" fill="white" />
                  
                  {/* longer, more pointed snout - characteristic of echidnas */}
                  <path d="M10 15C10 15 12 17.5 12 17.5C12 17.5 14 15 14 15" fill="#8A694C" />
                  <ellipse cx="12" cy="16.5" rx="1.2" ry="2" fill="#8A694C" />
                  
                  {/* nose at the tip of snout */}
                  <circle cx="12" cy="17.5" r="0.5" fill="#333333" />
                </svg>
              </div>
              <motion.span 
                className="text-xl md:text-2xl cluely-text-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Puggle
              </motion.span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate("features")}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Features
            </button>
            <button
              onClick={() => onNavigate("professional")}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              For Professionals
            </button>
            <button
              onClick={() => onNavigate("creators")}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              For Creators
            </button>
            <button
              onClick={() => onNavigate("benefits")}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Benefits
            </button>
            
            <button
              onClick={() => onNavigate("request-demo")}
              className="cluely-glass px-4 py-1.5 text-sm text-white rounded-full transition-all hover:bg-opacity-30"
            >
              Sign Up
            </button>
          </nav>

          <button
            className="md:hidden cluely-glass p-2 rounded-md text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} cluely-glass rounded-xl mt-2 overflow-hidden`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 px-4">
            <button
              onClick={() => {
                onNavigate("features");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 rounded-md"
            >
              Features
            </button>
            <button
              onClick={() => {
                onNavigate("professional");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 rounded-md"
            >
              For Professionals
            </button>
            <button
              onClick={() => {
                onNavigate("creators");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 rounded-md"
            >
              For Creators
            </button>
            <button
              onClick={() => {
                onNavigate("benefits");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-10 rounded-md"
            >
              Benefits
            </button>
            <button
              onClick={() => {
                onNavigate("request-demo");
                setIsMobileMenuOpen(false);
              }}
              className="mt-3 w-full text-center px-3 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-md text-sm"
            >
              Sign Up
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
