import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeOption } from "@/lib/color-themes";
import { Button } from "@/components/ui/button";
import { useVariation, useTrackConversion } from "@/hooks/use-variation";
import { useABTest } from "@/context/ab-test-context";

interface HeroProps {
  theme: ThemeOption;
  onRequestDemo: () => void;
}

export default function Hero({ theme, onRequestDemo }: HeroProps) {
  // State to track if the demo button was clicked
  const [demoClicked, setDemoClicked] = useState(false);
  
  // Use A/B test for CTA button text
  const { isA } = useVariation('cta-button');
  
  // Track conversion when demo button is clicked
  useTrackConversion('cta-button', demoClicked);
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="cluely-container relative">
        {/* Floating badge */}
        <motion.div 
          className="absolute top-10 left-1/2 transform -translate-x-1/2 cluely-glass py-2 px-4 text-white text-sm"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We just raised $5.3 million
        </motion.div>

        <div className="flex flex-col items-center justify-center text-center">
          {/* Main heading with glass container */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              <span style={{ 
                color: "#0FF",
                textShadow: "0 0 15px rgba(0,255,255,0.7), 0 0 25px rgba(0,255,255,0.5)",
                fontWeight: "700",
              }}>Puggle AI</span>
            </h1>
            
            <div className="scrolling-text-box mb-2">
              <p className="text-lg md:text-xl flex items-center justify-center">
                <span className="scrolling-text-container">
                  <span className="scrolling-text" style={{ 
                    color: "#0FF",
                    textShadow: "0 0 15px rgba(0,255,255,0.7), 0 0 25px rgba(0,255,255,0.5)",
                    fontWeight: "600",
                  }}>For Coding</span>
                  <span className="scrolling-text" style={{ 
                    color: "#0FF",
                    textShadow: "0 0 15px rgba(0,255,255,0.7), 0 0 25px rgba(0,255,255,0.5)",
                    fontWeight: "600",
                  }}>For Deployment</span>
                  <span className="scrolling-text" style={{ 
                    color: "#0FF",
                    textShadow: "0 0 15px rgba(0,255,255,0.7), 0 0 25px rgba(0,255,255,0.5)",
                    fontWeight: "600",
                  }}>For Observability</span>
                </span>
              </p>
              <p className="text-gray-300 text-sm mt-4 text-center">
                Puggle deeply integrates the entire development lifecycle into a single, powerful platform.
              </p>
            </div>
            
            
            <motion.div
              className="flex justify-center items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button 
                onClick={() => {
                  // Track the CTA button click as a conversion
                  setDemoClicked(true);
                  onRequestDemo();
                }}
                className="cluely-button cluely-button-primary px-8 py-3 text-lg"
              >
                {isA ? "Request a Demo" : "Try Puggle Now"}
              </button>
            </motion.div>
          </motion.div>
          
          {/* No feature bullets */}
          
          {/* Bottom floating element */}
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cluely-glass py-2 px-4 flex items-center space-x-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex space-x-1.5">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>
            <span className="text-xs text-gray-300">Use ← and → to navigate</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
