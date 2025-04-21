import { motion } from "framer-motion";
import { ThemeOption } from "@/lib/color-themes";
import { Button } from "@/components/ui/button";

interface HeroProps {
  theme: ThemeOption;
  onRequestDemo: () => void;
}

export default function Hero({ theme, onRequestDemo }: HeroProps) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 md:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Code, Deploy, Observe
              <span style={{ color: theme.primary }} className="block">
                All in One Place
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Stop juggling tools. Start building seamlessly with Puggle — the integrated platform that brings your entire development lifecycle together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={onRequestDemo}
                className="px-8 py-4 text-white text-lg font-semibold transition-all"
                style={{
                  background: `linear-gradient(to right, ${theme.primary}, ${theme.primaryDark})`,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                Request a Demo
              </Button>
              <Button
                variant="outline"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="px-8 py-4 border border-gray-300 text-gray-700 text-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-colors"
                style={{ 
                  "--tw-hover-border-opacity": 1,
                  "--tw-hover-border-color": theme.primary,
                  "--tw-hover-text-opacity": 1,
                  "--tw-hover-text-color": theme.primary
                } as React.CSSProperties}
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <span className="text-sm text-gray-500">Trusted by developers at</span>
                <p className="text-sm font-medium text-gray-900">Microsoft, Google, Amazon & more</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl transform rotate-3 scale-105 opacity-20"
                style={{ backgroundColor: theme.primaryLight }}
              ></div>
              <div className="relative rounded-3xl shadow-xl overflow-hidden">
                <svg className="w-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1200" height="800" fill="#F3F4F6" />
                  <rect x="40" y="40" width="1120" height="60" rx="4" fill="#E5E7EB" />
                  <rect x="60" y="60" width="200" height="20" rx="4" fill={theme.primary} fillOpacity="0.7" />
                  <rect x="800" y="60" width="120" height="20" rx="4" fill={theme.primary} fillOpacity="0.5" />
                  <rect x="940" y="60" width="120" height="20" rx="4" fill={theme.primary} fillOpacity="0.5" />
                  <rect x="1080" y="60" width="60" height="20" rx="4" fill={theme.primary} fillOpacity="0.5" />
                  <rect x="40" y="120" width="700" height="640" rx="4" fill="#E5E7EB" />
                  <rect x="760" y="120" width="400" height="640" rx="4" fill="#E5E7EB" />
                  <rect x="60" y="160" width="660" height="40" rx="4" fill="#F9FAFB" />
                  <rect x="60" y="220" width="660" height="520" rx="4" fill="#F9FAFB" />
                  <rect x="780" y="160" width="360" height="580" rx="4" fill="#F9FAFB" />
                  <rect x="80" y="240" width="620" height="60" rx="4" fill="#EEF2FF" />
                  <rect x="80" y="320" width="620" height="60" rx="4" fill="#EEF2FF" />
                  <rect x="80" y="400" width="620" height="60" rx="4" fill="#EEF2FF" />
                  <rect x="80" y="480" width="620" height="60" rx="4" fill="#EEF2FF" />
                  <rect x="80" y="560" width="620" height="60" rx="4" fill="#EEF2FF" />
                  <rect x="80" y="640" width="620" height="60" rx="4" fill="#EEF2FF" />
                  <rect x="800" y="180" width="320" height="30" rx="4" fill={theme.accent} fillOpacity="0.2" />
                  <rect x="800" y="220" width="320" height="100" rx="4" fill="#EEF2FF" />
                  <rect x="820" y="240" width="280" height="20" rx="4" fill="#D1D5DB" />
                  <rect x="820" y="280" width="240" height="20" rx="4" fill="#D1D5DB" />
                  <rect x="800" y="340" width="320" height="100" rx="4" fill="#EEF2FF" />
                  <rect x="820" y="360" width="280" height="20" rx="4" fill="#D1D5DB" />
                  <rect x="820" y="400" width="240" height="20" rx="4" fill="#D1D5DB" />
                  <rect x="800" y="460" width="320" height="100" rx="4" fill="#EEF2FF" />
                  <rect x="820" y="480" width="280" height="20" rx="4" fill="#D1D5DB" />
                  <rect x="820" y="520" width="240" height="20" rx="4" fill="#D1D5DB" />
                  <rect x="800" y="580" width="320" height="40" rx="4" fill={theme.primary} />
                  <rect x="880" y="590" width="160" height="20" rx="4" fill="white" />
                </svg>
              </div>
              <div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 flex items-center"
                style={{ 
                  animation: "bounce 2s infinite",
                  animationDelay: "1s"
                }}
              >
                <div
                  className="rounded-full p-2 mr-3"
                  style={{ backgroundColor: "rgba(5, 150, 105, 0.1)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Deployment completed</p>
                  <p className="text-sm text-gray-500">3 minutes ago</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
