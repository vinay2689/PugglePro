import { motion } from "framer-motion";
import { ThemeOption } from "@/lib/color-themes";
import { Code, Rocket, BarChart3 } from "lucide-react";

interface FeaturesProps {
  theme: ThemeOption;
}

const features = [
  {
    icon: <Code className="text-xl" />,
    title: "Integrated Development",
    description:
      "Code, test, and review in one seamless environment with intelligent suggestions and collaborative features.",
  },
  {
    icon: <Rocket className="text-xl" />,
    title: "Visual CI/CD Pipelines",
    description:
      "Build, deploy, and manage your applications with intuitive visual workflows that simplify complex processes.",
  },
  {
    icon: <BarChart3 className="text-xl" />,
    title: "Real-time Observability",
    description:
      "Monitor your applications with live metrics, logs, and traces directly in your development environment.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Features({ theme }: FeaturesProps) {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span style={{ 
              background: "linear-gradient(to right, #0FF, #00E5C7)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent"
            }}>Powerful features</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Puggle deeply integrates the entire development lifecycle into a single, powerful platform.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div
                className="h-12 w-12 rounded-lg flex items-center justify-center mb-5"
                style={{ 
                  backgroundColor: `${theme.primaryLight}20`, 
                }}
              >
                <div style={{ color: theme.primary }}>{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
