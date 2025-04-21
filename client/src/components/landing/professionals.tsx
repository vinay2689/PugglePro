import { motion } from "framer-motion";
import { ThemeOption } from "@/lib/color-themes";
import { Check } from "lucide-react";

interface ProfessionalsProps {
  theme: ThemeOption;
}

const proFeatures = [
  {
    title: "Focus on Code, Not Tools",
    description:
      "Spend less time on tool management, more on building great software.",
  },
  {
    title: "Visual CI/CD Management",
    description:
      "Define and manage deployment pipelines with an intuitive visual interface.",
  },
  {
    title: "Integrated Observability",
    description:
      "See live metrics, logs, and traces without leaving your coding environment.",
  },
];

export default function Professionals({ theme }: ProfessionalsProps) {
  return (
    <section id="professional" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl shadow-lg overflow-hidden">
              <svg className="w-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1200" height="800" fill="#F3F4F6" />
                <rect x="100" y="100" width="1000" height="600" rx="8" fill="white" />
                <rect x="140" y="140" width="400" height="520" rx="4" fill="#F9FAFB" />
                <rect x="580" y="140" width="480" height="520" rx="4" fill="#F9FAFB" />
                
                {/* Code editor mockup */}
                <rect x="160" y="180" width="360" height="30" rx="4" fill="#E5E7EB" />
                <rect x="160" y="230" width="360" height="410" rx="4" fill="#1E1E1E" />
                <rect x="180" y="250" width="100" height="15" rx="2" fill={theme.primary} fillOpacity="0.7" />
                <rect x="180" y="275" width="150" height="15" rx="2" fill="#9CA3AF" />
                <rect x="200" y="300" width="200" height="15" rx="2" fill="#D1D5DB" />
                <rect x="200" y="325" width="180" height="15" rx="2" fill="#D1D5DB" />
                <rect x="200" y="350" width="220" height="15" rx="2" fill="#D1D5DB" />
                <rect x="180" y="375" width="100" height="15" rx="2" fill={theme.primary} fillOpacity="0.7" />
                <rect x="180" y="400" width="150" height="15" rx="2" fill="#9CA3AF" />
                <rect x="200" y="425" width="200" height="15" rx="2" fill="#D1D5DB" />
                <rect x="200" y="450" width="180" height="15" rx="2" fill="#D1D5DB" />
                <rect x="200" y="475" width="220" height="15" rx="2" fill="#D1D5DB" />
                
                {/* Deployment dashboard mockup */}
                <rect x="600" y="180" width="440" height="40" rx="4" fill="#E5E7EB" />
                <rect x="600" y="240" width="200" height="200" rx="4" fill="white" />
                <rect x="620" y="260" width="160" height="20" rx="2" fill="#374151" />
                <rect x="620" y="290" width="160" height="130" rx="2" fill={theme.primary} fillOpacity="0.2" />
                <path d="M620 360 L640 340 L660 350 L680 330 L700 310 L720 340 L740 320 L760 310 L780 330" 
                      stroke={theme.primary} strokeWidth="2" />
                
                <rect x="840" y="240" width="200" height="200" rx="4" fill="white" />
                <rect x="860" y="260" width="160" height="20" rx="2" fill="#374151" />
                <rect x="860" y="290" width="160" height="130" rx="2" fill={theme.accent} fillOpacity="0.2" />
                <circle cx="890" cy="320" r="20" fill={theme.accent} fillOpacity="0.6" />
                <circle cx="940" cy="340" r="30" fill={theme.accent} fillOpacity="0.4" />
                <circle cx="990" cy="330" r="15" fill={theme.accent} fillOpacity="0.8" />
                
                <rect x="600" y="460" width="440" height="160" rx="4" fill="white" />
                <rect x="620" y="480" width="400" height="20" rx="2" fill="#374151" />
                <rect x="620" y="520" width="400" height="80" rx="2" fill="#F3F4F6" />
                <rect x="640" y="540" width="140" height="15" rx="2" fill={theme.primary} />
                <rect x="640" y="565" width="200" height="15" rx="2" fill="#9CA3AF" />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              For Professional Developers:
              <span style={{ color: theme.primary }} className="block mt-2">
                Code Smarter, Ship Faster
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Tired of context switching between your IDE, Git, CI/CD, and monitoring tools? Puggle deeply integrates everything you need for the development lifecycle into a single, powerful platform.
            </p>

            <div className="mt-8 grid gap-6">
              {proFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-10 w-10 rounded-full"
                      style={{ backgroundColor: `${theme.primaryLight}40` }}
                    >
                      <Check style={{ color: theme.primary }} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
