import { motion } from "framer-motion";
import { ThemeOption } from "@/lib/color-themes";
import { Button } from "@/components/ui/button";

interface HeroProps {
  theme: ThemeOption;
  onRequestDemo: () => void;
}

export default function Hero({ theme, onRequestDemo }: HeroProps) {
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
            <h1 className="cluely-heading text-5xl md:text-7xl font-extrabold mb-4">
              <span className="cluely-teal-text">Puggle AI</span>
            </h1>
            
            <div className="cluely-glass py-3 px-6 mb-8">
              <p className="text-white text-lg md:text-xl flex items-center justify-center">
                <span className="scrolling-text-container">
                  <span className="scrolling-text">For Coding</span>
                  <span className="scrolling-text">For Deployment</span>
                  <span className="scrolling-text">For Observability</span>
                </span>
              </p>
            </div>
            
            
            <motion.div
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button 
                onClick={onRequestDemo}
                className="cluely-button cluely-button-primary"
              >
                Request a Demo
              </button>
              
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="cluely-button"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
          
          {/* Feature bullets */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="cluely-glass p-4 text-center">
              <p className="text-gray-100 text-sm font-medium">
                <span className="inline-block w-6 h-6 bg-blue-500 rounded-full mr-2 align-middle"></span>
                Seamless Integration
              </p>
            </div>
            <div className="cluely-glass p-4 text-center">
              <p className="text-gray-100 text-sm font-medium">
                <span className="inline-block w-6 h-6 bg-purple-500 rounded-full mr-2 align-middle"></span>
                AI-Powered Workflows
              </p>
            </div>
            <div className="cluely-glass p-4 text-center">
              <p className="text-gray-100 text-sm font-medium">
                <span className="inline-block w-6 h-6 bg-green-500 rounded-full mr-2 align-middle"></span>
                Real-time Collaboration
              </p>
            </div>
          </motion.div>
          
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
