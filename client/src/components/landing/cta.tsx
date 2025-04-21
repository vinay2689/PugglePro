import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeOption } from "@/lib/color-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface CTAProps {
  theme: ThemeOption;
}

export default function CTA({ theme }: CTAProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
    
    // Clear error when user selects
    if (errors.role) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.role;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!formData.role) {
      newErrors.role = "Please select your role";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/waitlist", formData);
      setIsSuccessful(true);
      toast({
        title: "Thank you!",
        description: "We've received your request and will be in touch soon.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request-demo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden"
          style={{
            background: `linear-gradient(to right, ${theme.primary}, ${theme.primaryDark})`,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 flex items-center">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Ready to Experience Seamless Development?
                </h2>
                <p className="mt-4 text-white text-opacity-90">
                  Be one of the first to try Puggle! Request a demo or join our exclusive beta waitlist today.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center text-white">
                    <CheckCircle2 className="mr-3 text-secondary-300" style={{ color: theme.secondary }} />
                    <span>Full platform preview</span>
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle2 className="mr-3 text-secondary-300" style={{ color: theme.secondary }} />
                    <span>Personalized onboarding</span>
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle2 className="mr-3 text-secondary-300" style={{ color: theme.secondary }} />
                    <span>Priority beta access</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-10">
              {!isSuccessful ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Work Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="john@company.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company</Label>
                    <Input 
                      type="text" 
                      id="company" 
                      name="company" 
                      placeholder="Your Company" 
                      value={formData.company}
                      onChange={handleInputChange}
                      className={errors.company ? "border-red-500" : ""}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-sm font-medium text-gray-700">Role</Label>
                    <Select 
                      value={formData.role} 
                      onValueChange={handleRoleChange}
                    >
                      <SelectTrigger className={errors.role ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="team-lead">Team Lead</SelectItem>
                        <SelectItem value="cto">CTO / VP Engineering</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.role && (
                      <p className="text-red-500 text-xs mt-1">{errors.role}</p>
                    )}
                  </div>
                  <div>
                    <Button 
                      type="submit"
                      className="w-full py-3 px-4 text-white font-medium transition-colors"
                      style={{ backgroundColor: theme.primary }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request Demo"}
                    </Button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div 
                    className="flex items-center justify-center h-16 w-16 rounded-full mx-auto"
                    style={{ backgroundColor: `${theme.accent}20` }}
                  >
                    <CheckCircle2 className="text-2xl" style={{ color: theme.accent }} />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Thank you!</h3>
                  <p className="mt-2 text-gray-600">We've received your request and will be in touch soon.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
