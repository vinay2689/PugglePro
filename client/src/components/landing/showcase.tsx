import { motion } from "framer-motion";
import { ThemeOption } from "@/lib/color-themes";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface ShowcaseProps {
  theme: ThemeOption;
  onWatchDemo: () => void;
}

export default function Showcase({ theme, onWatchDemo }: ShowcaseProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* SVG showcase visualization */}
            <svg viewBox="0 0 1200 600" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={theme.primaryDark} stopOpacity="0.7" />
                  <stop offset="100%" stopColor={theme.primary} stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <rect width="1200" height="600" fill="#111827" />
              
              {/* Circuit board pattern */}
              <path d="M0,100 L1200,100" stroke="#374151" strokeWidth="0.5" />
              <path d="M0,200 L1200,200" stroke="#374151" strokeWidth="0.5" />
              <path d="M0,300 L1200,300" stroke="#374151" strokeWidth="0.5" />
              <path d="M0,400 L1200,400" stroke="#374151" strokeWidth="0.5" />
              <path d="M0,500 L1200,500" stroke="#374151" strokeWidth="0.5" />
              
              <path d="M100,0 L100,600" stroke="#374151" strokeWidth="0.5" />
              <path d="M300,0 L300,600" stroke="#374151" strokeWidth="0.5" />
              <path d="M500,0 L500,600" stroke="#374151" strokeWidth="0.5" />
              <path d="M700,0 L700,600" stroke="#374151" strokeWidth="0.5" />
              <path d="M900,0 L900,600" stroke="#374151" strokeWidth="0.5" />
              <path d="M1100,0 L1100,600" stroke="#374151" strokeWidth="0.5" />
              
              {/* Nodes */}
              <circle cx="100" cy="100" r="5" fill={theme.primary} />
              <circle cx="300" cy="100" r="5" fill={theme.primary} />
              <circle cx="500" cy="100" r="5" fill={theme.primary} />
              <circle cx="700" cy="100" r="5" fill={theme.primary} />
              <circle cx="900" cy="100" r="5" fill={theme.primary} />
              <circle cx="1100" cy="100" r="5" fill={theme.primary} />
              
              <circle cx="100" cy="300" r="5" fill={theme.primary} />
              <circle cx="300" cy="300" r="5" fill={theme.primary} />
              <circle cx="500" cy="300" r="5" fill={theme.primary} />
              <circle cx="700" cy="300" r="5" fill={theme.primary} />
              <circle cx="900" cy="300" r="5" fill={theme.primary} />
              <circle cx="1100" cy="300" r="5" fill={theme.primary} />
              
              <circle cx="100" cy="500" r="5" fill={theme.primary} />
              <circle cx="300" cy="500" r="5" fill={theme.primary} />
              <circle cx="500" cy="500" r="5" fill={theme.primary} />
              <circle cx="700" cy="500" r="5" fill={theme.primary} />
              <circle cx="900" cy="500" r="5" fill={theme.primary} />
              <circle cx="1100" cy="500" r="5" fill={theme.primary} />
              
              {/* Connecting lines */}
              <path d="M100,100 L300,300 L500,100 L700,300 L900,100 L1100,300" 
                    stroke={theme.primary} strokeWidth="2" fill="none" />
              <path d="M100,500 L300,300 L500,500 L700,300 L900,500 L1100,300" 
                    stroke={theme.accent} strokeWidth="2" fill="none" />
              
              {/* Code blocks */}
              <rect x="400" y="180" width="200" height="120" rx="5" fill="#1E1E1E" />
              <rect x="420" y="200" width="160" height="10" rx="2" fill={theme.primary} fillOpacity="0.7" />
              <rect x="420" y="220" width="140" height="10" rx="2" fill="#D1D5DB" />
              <rect x="420" y="240" width="120" height="10" rx="2" fill="#D1D5DB" />
              <rect x="420" y="260" width="150" height="10" rx="2" fill="#D1D5DB" />
              
              <rect x="700" y="380" width="200" height="120" rx="5" fill="#1E1E1E" />
              <rect x="720" y="400" width="160" height="10" rx="2" fill={theme.accent} fillOpacity="0.7" />
              <rect x="720" y="420" width="140" height="10" rx="2" fill="#D1D5DB" />
              <rect x="720" y="440" width="120" height="10" rx="2" fill="#D1D5DB" />
              <rect x="720" y="460" width="150" height="10" rx="2" fill="#D1D5DB" />
              
              {/* Overlay gradient */}
              <rect width="1200" height="600" fill="url(#techGradient)" />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  See Puggle in Action
                </h2>
                <Button
                  onClick={onWatchDemo}
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-white hover:bg-gray-100 transition-colors"
                  style={{ color: theme.primary }}
                >
                  <Play className="mr-2" size={20} /> Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
