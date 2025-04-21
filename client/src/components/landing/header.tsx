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
              <div className="relative h-12 w-12 mr-3">
                <img 
                  src="/images/puggle-logo-square.jpg" 
                  alt="Puggle mascot" 
                  className="h-full w-full rounded-full object-cover border-2 shadow-md"
                  style={{ borderColor: theme.primary }}
                />
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
