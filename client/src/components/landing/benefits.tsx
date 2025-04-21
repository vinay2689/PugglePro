import { motion } from "framer-motion";
import { ThemeOption } from "@/lib/color-themes";
import { BugOff, GitMerge, Rocket } from "lucide-react";

interface BenefitsProps {
  theme: ThemeOption;
}

const benefits = [
  {
    icon: <BugOff className="text-2xl text-white" />,
    title: "Reduce Incidents & Bugs",
    description:
      "With Puggle, the synergy of having your development and operations workflows in one place leads to fewer surprises and faster resolution times.",
  },
  {
    icon: <GitMerge className="text-2xl text-white" />,
    title: "Stop Patchwork, Embrace Seamlessness",
    description:
      "Say goodbye to the frustration of cobbled-together toolchains and the technical debt that comes with them.",
  },
  {
    icon: <Rocket className="text-2xl text-white" />,
    title: "Ship Faster, Reduce Downtime",
    description:
      "By reducing the time spent on integration, deployment, and debugging, Puggle helps you get your products to market faster.",
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

export default function Benefits({ theme }: BenefitsProps) {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Teams <span style={{ color: theme.primary }}>Love Puggle</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the benefits of a truly integrated development and operations platform.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div
                className="h-14 w-14 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: theme.primary }}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
