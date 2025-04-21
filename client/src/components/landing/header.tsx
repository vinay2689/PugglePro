import { useState, useEffect } from "react";
import { ThemeOption } from "@/lib/color-themes";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

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
      className={`fixed w-full bg-white bg-opacity-95 z-50 transition-all ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div
              className="font-extrabold text-2xl flex items-center"
              style={{ color: theme.primary }}
            >
              <div 
                className="relative h-12 w-12 mr-3 rounded-full flex items-center justify-center shadow-lg overflow-hidden" 
                style={{ 
                  backgroundColor: '#f0f0f0',
                  border: `2px solid ${theme.primary}`
                }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="32" 
                  height="32" 
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
              <span className="text-2xl md:text-3xl">Puggle</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => onNavigate("features")}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              style={{ 
                "--tw-hover-text-opacity": 1,
                "--tw-hover-text-color": theme.primary
              } as React.CSSProperties}
            >
              Features
            </button>
            <button
              onClick={() => onNavigate("professional")}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              style={{ 
                "--tw-hover-text-opacity": 1,
                "--tw-hover-text-color": theme.primary
              } as React.CSSProperties}
            >
              For Professionals
            </button>
            <button
              onClick={() => onNavigate("creators")}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              style={{ 
                "--tw-hover-text-opacity": 1,
                "--tw-hover-text-color": theme.primary
              } as React.CSSProperties}
            >
              For Creators
            </button>
            <button
              onClick={() => onNavigate("benefits")}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              style={{ 
                "--tw-hover-text-opacity": 1,
                "--tw-hover-text-color": theme.primary
              } as React.CSSProperties}
            >
              Benefits
            </button>
          </nav>

          <div>
            <Button
              onClick={() => onNavigate("request-demo")}
              className="hidden md:inline-block text-white px-5 py-2 font-medium transition-all"
              style={{
                background: `linear-gradient(to right, ${theme.primary}, ${theme.primaryDark})`,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              Request Demo
            </Button>
            <button
              className="md:hidden text-gray-600"
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="pt-2 pb-4 space-y-1 px-2">
            <button
              onClick={() => {
                onNavigate("features");
                setIsMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              style={{ 
                "--tw-hover-text-opacity": 1,
                "--tw-hover-text-color": theme.primary
              } as React.CSSProperties}
            >
              Features
            </button>
            <button
              onClick={() => {
                onNavigate("professional");
                setIsMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              style={{ 
                "--tw-hover-text-opacity": 1,
                "--tw-hover-text-color": theme.primary
              } as React.CSSProperties}
            >
              For Professionals
            </button>
            <button
              onClick={() => {
                onNavigate("creators");
                setIsMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              style={{ 
                "--tw-hover-text-opacity": 1,
                "--tw-hover-text-color": theme.primary
              } as React.CSSProperties}
            >
              For Creators
            </button>
            <button
              onClick={() => {
                onNavigate("benefits");
                setIsMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
              style={{ 
                "--tw-hover-text-opacity": 1,
                "--tw-hover-text-color": theme.primary
              } as React.CSSProperties}
            >
              Benefits
            </button>
            <Button
              onClick={() => {
                onNavigate("request-demo");
                setIsMobileMenuOpen(false);
              }}
              className="mt-3 w-full text-white"
              style={{
                backgroundColor: theme.primary,
              }}
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
