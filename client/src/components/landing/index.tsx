import { ThemeOption } from "@/lib/color-themes";
import { useRef, useContext } from "react";
import { ThemeContext } from "@/context/theme-context";
import Header from "./header";
import Hero from "./hero";
import Features from "./features";
import Professionals from "./professionals";
import Creators from "./creators";
import Benefits from "./benefits";
import Showcase from "./showcase";
import Testimonials from "./testimonials";
import CTA from "./cta";
import Footer from "./footer";

interface LandingProps {
  theme: ThemeOption;
}

export default function Landing({ theme }: LandingProps) {
  const { isDarkTheme } = useContext(ThemeContext);
  
  const featuresRef = useRef<HTMLDivElement>(null);
  const professionalRef = useRef<HTMLDivElement>(null);
  const creatorsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      const yOffset = -80; // Header height offset
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen theme-transition ${isDarkTheme ? 'dark-theme' : ''}`} 
      style={{ backgroundColor: theme.background }}
    >
      <Header 
        theme={theme} 
        onNavigate={(section) => {
          switch(section) {
            case 'features': scrollToSection(featuresRef); break;
            case 'professional': scrollToSection(professionalRef); break;
            case 'creators': scrollToSection(creatorsRef); break;
            case 'benefits': scrollToSection(benefitsRef); break;
            case 'request-demo': scrollToSection(ctaRef); break;
          }
        }}
      />
      <Hero theme={theme} onRequestDemo={() => scrollToSection(ctaRef)} />
      <div ref={featuresRef} className="theme-transition">
        <Features theme={theme} />
      </div>
      <div ref={professionalRef} className="theme-transition">
        <Professionals theme={theme} />
      </div>
      <div ref={creatorsRef} className="theme-transition">
        <Creators theme={theme} />
      </div>
      <div ref={benefitsRef} className="theme-transition">
        <Benefits theme={theme} />
      </div>
      <Showcase theme={theme} onWatchDemo={() => scrollToSection(ctaRef)} />
      <Testimonials theme={theme} />
      <div ref={ctaRef} className="theme-transition">
        <CTA theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
}
