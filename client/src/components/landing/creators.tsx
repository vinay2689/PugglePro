import { motion } from "framer-motion";
import { ThemeOption } from "@/lib/color-themes";
import { Star } from "lucide-react";

interface CreatorsProps {
  theme: ThemeOption;
}

const creatorFeatures = [
  {
    title: "Intuitive Visual Workflows",
    description:
      "Build and deploy your projects with simplified, visual interfaces.",
  },
  {
    title: "One-Click Deployments",
    description:
      "Deploy your applications with just a few clicks, no DevOps expertise required.",
  },
  {
    title: "Real-time Application Feedback",
    description:
      "Get immediate insights on how your applications are performing.",
  },
];

export default function Creators({ theme }: CreatorsProps) {
  return (
    <section id="creators" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <motion.div
            className="lg:w-1/2 lg:pl-12 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl shadow-lg overflow-hidden">
              <svg className="w-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1200" height="800" fill="#F3F4F6" />
                <rect x="100" y="100" width="1000" height="600" rx="8" fill="white" />
                
                {/* UI Builder mockup */}
                <rect x="140" y="140" width="720" height="520" rx="4" fill="#F9FAFB" />
                <rect x="160" y="160" width="680" height="40" rx="4" fill="#E5E7EB" />
                
                {/* Toolbar */}
                <rect x="180" y="170" width="100" height="20" rx="2" fill="#6B7280" />
                <rect x="300" y="170" width="100" height="20" rx="2" fill="#6B7280" />
                <rect x="420" y="170" width="100" height="20" rx="2" fill="#6B7280" />
                
                {/* Canvas */}
                <rect x="160" y="220" width="680" height="420" rx="4" fill="white" />
                
                {/* UI Elements */}
                <rect x="180" y="240" width="300" height="50" rx="4" fill={theme.primary} />
                <rect x="210" y="255" width="240" height="20" rx="2" fill="white" />
                
                <rect x="180" y="310" width="640" height="1" fill="#E5E7EB" />
                
                <rect x="180" y="330" width="300" height="30" rx="4" fill="#F3F4F6" />
                <rect x="200" y="335" width="200" height="20" rx="2" fill="#6B7280" />
                
                <rect x="180" y="380" width="300" height="30" rx="4" fill="#F3F4F6" />
                <rect x="200" y="385" width="240" height="20" rx="2" fill="#6B7280" />
                
                <rect x="180" y="430" width="640" height="120" rx="4" fill="#F3F4F6" />
                <rect x="200" y="450" width="600" height="80" rx="2" fill="white" />
                
                <rect x="180" y="570" width="120" height="40" rx="4" fill={theme.primary} />
                <rect x="210" y="580" width="60" height="20" rx="2" fill="white" />
                
                {/* Component panel */}
                <rect x="880" y="140" width="200" height="520" rx="4" fill="#F9FAFB" />
                <rect x="900" y="160" width="160" height="30" rx="2" fill="#374151" />
                <rect x="900" y="210" width="160" height="40" rx="2" fill="white" />
                <rect x="910" y="220" width="140" height="20" rx="2" fill="#6B7280" />
                <rect x="900" y="260" width="160" height="40" rx="2" fill="white" />
                <rect x="910" y="270" width="140" height="20" rx="2" fill="#6B7280" />
                <rect x="900" y="310" width="160" height="40" rx="2" fill="white" />
                <rect x="910" y="320" width="140" height="20" rx="2" fill="#6B7280" />
                <rect x="900" y="360" width="160" height="40" rx="2" fill="white" />
                <rect x="910" y="370" width="140" height="20" rx="2" fill="#6B7280" />
                <rect x="900" y="410" width="160" height="40" rx="2" fill={theme.secondary} fillOpacity="0.7" />
                <rect x="910" y="420" width="140" height="20" rx="2" fill="white" />
              </svg>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              For Creators:
              <span style={{ color: theme.primary }} className="block mt-2">
                From Idea to Live, Effortlessly
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              You're a creator, bringing ideas to life with intuitive tools. Puggle bridges the gap to professional deployment by offering a visual and simplified path to ship your creations.
            </p>

            <div className="mt-8 grid gap-6">
              {creatorFeatures.map((feature, index) => (
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
                      style={{ backgroundColor: `${theme.secondary}30` }}
                    >
                      <Star size={16} style={{ color: theme.secondary }} />
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
