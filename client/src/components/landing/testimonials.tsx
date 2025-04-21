import { motion } from "framer-motion";
import { ThemeOption } from "@/lib/color-themes";
import { Star } from "lucide-react";

interface TestimonialsProps {
  theme: ThemeOption;
}

const testimonials = [
  {
    text: "Puggle has transformed how our team builds and ships software. The seamless integration between development and operations has cut our deployment time in half.",
    name: "Michael Roberts",
    role: "CTO, TechFront",
  },
  {
    text: "As a front-end developer, I love how Puggle lets me deploy and monitor my applications without learning complex DevOps tools. It's genuinely changed how I work.",
    name: "Sarah Chen",
    role: "Senior Developer, CreativeUI",
  },
  {
    text: "Our team was spending too much time switching between tools. With Puggle, we have everything in one place, and our productivity has increased by at least 30%.",
    name: "David Wilson",
    role: "Lead Developer, CloudScale",
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

export default function Testimonials({ theme }: TestimonialsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Users <span style={{ color: theme.primary }}>Are Saying</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div style={{ color: theme.secondary }}>
                  <Star className="h-5 w-5 inline-block" fill={theme.secondary} />
                  <Star className="h-5 w-5 inline-block" fill={theme.secondary} />
                  <Star className="h-5 w-5 inline-block" fill={theme.secondary} />
                  <Star className="h-5 w-5 inline-block" fill={theme.secondary} />
                  <Star className="h-5 w-5 inline-block" fill={theme.secondary} />
                </div>
              </div>
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
