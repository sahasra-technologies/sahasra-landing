import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Globe,
  Headphones,
  FileText,
  Users,
  Zap,
  Sparkles,
  Star,
  CheckCircle,
  ArrowRight,
  MousePointer,
  Heart,
  Shield,
  Timer,
  Award,
  Rocket,
  Target,
  Coffee,
  Brain,
  Database,
  Code,
  Smartphone,
  Cloud,
  BarChart3,
  Bot,
  Eye,
  Lightbulb,
  TrendingUp,
  DollarSign,
  ChevronDown,
  Play,
  Pause,
  Building,
  Wifi,
  Laptop,
  Monitor,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Download,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    timeline: "",
    projectDescription: "",
    additionalInfo: "",
    hearAboutUs: "",
    communicationPreference: "email",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("general");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedOffice, setSelectedOffice] = useState(0);

  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@Sahasratech.com",
      description: "General inquiries & AI project discussions",
      action: "mailto:hello@Sahasratech.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (415) 555-Sahasra",
      description: "Direct line to our AI specialists",
      action: "tel:+14155556398",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      detail: "Available 24/7",
      description: "Instant support for urgent AI projects",
      action: "#",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      detail: "Book a consultation",
      description: "30-min AI strategy session",
      action: "#",
    },
  ];

  // Office locations
  const offices = [
    {
      name: "San Francisco HQ",
      address: "123 Tech Avenue, SOMA District, SF 94107",
      phone: "+1 (415) 555-0123",
      email: "hello@Sahasratech.com",
      hours: "Mon-Fri: 9AM-6PM PST",
      isHeadquarters: true,
      team: "12 AI specialists",
      specialties: [
        "AI & Machine Learning",
        "Generative AI Development",
        "Data Science Solutions",
        "Product Strategy",
      ],
      description:
        "Our modern headquarters in the heart of San Francisco's tech district",
      image: "/placeholder.svg",
    },
    {
      name: "New York Office",
      address: "456 Innovation Ave, Manhattan, NY 10001",
      phone: "+1 (212) 555-0123",
      email: "ny@Sahasratech.com",
      hours: "Mon-Fri: 9AM-6PM EST",
      isHeadquarters: false,
      team: "8 AI engineers",
      specialties: [
        "Computer Vision",
        "Natural Language Processing",
        "AI Consulting",
        "Enterprise Solutions",
      ],
      description: "East coast hub for enterprise AI implementations",
      image: "/placeholder.svg",
    },
    {
      name: "Austin Lab",
      address: "789 Research Blvd, Austin, TX 78701",
      phone: "+1 (512) 555-0123",
      email: "austin@Sahasratech.com",
      hours: "Mon-Fri: 9AM-6PM CST",
      isHeadquarters: false,
      team: "6 researchers",
      specialties: [
        "AI Research",
        "Model Development",
        "Data Science",
        "Innovation Lab",
      ],
      description: "R&D facility focused on cutting-edge AI research",
      image: "/placeholder.svg",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you implement AI solutions?",
      answer:
        "We specialize in rapid AI implementation! Most AI solutions can be delivered in 4-8 weeks. We focus on integrating machine learning models and data analytics that provide immediate business value and insights.",
      category: "AI",
    },
    {
      question: "What kind of Generative AI solutions do you build?",
      answer:
        "We develop custom generative AI applications including content creation tools, AI assistants, automated code generation, synthetic data creation, and custom GPT integrations. Our solutions leverage the latest foundation models like GPT, Claude, and custom fine-tuned models for specific business needs.",
      category: "Gen AI",
    },
    {
      question: "Do you work with growing businesses?",
      answer:
        "Absolutely! We specialize in working with growing businesses. We understand the challenges of limited budgets, tight timelines, and the need to move fast. We offer flexible payment terms and transparent project scoping.",
      category: "Business",
    },
    {
      question: "What's your approach to data privacy and security?",
      answer:
        "Data security is paramount in all our AI implementations. We follow enterprise-grade security practices, comply with GDPR and CCPA regulations, and can work within your existing security frameworks. All data processing can be done on-premises or in your private cloud if required.",
      category: "Security",
    },
    {
      question: "Can you help with AI strategy and planning?",
      answer:
        "Yes! We offer comprehensive AI strategy consulting. We help you identify the best AI opportunities for your business, create implementation roadmaps, and provide ongoing guidance throughout your AI transformation journey.",
      category: "Strategy",
    },
    {
      question: "What's included in your AI consulting services?",
      answer:
        "Our AI consulting includes technology assessment, use case identification, ROI analysis, implementation planning, vendor selection guidance, and team training. We provide end-to-end support for your AI initiatives.",
      category: "Consulting",
    },
  ];

  // Quick stats
  const quickStats = [
    { label: "AI Implementation", value: "4-8 weeks", icon: Rocket },
    { label: "Client Satisfaction", value: "98%", icon: Heart },
    { label: "Business Focus", value: "100%", icon: Target },
    { label: "Availability", value: "24/7", icon: Shield },
  ];

  // Service options
  const services = [
    { value: "ai-ml-development", label: "AI & Machine Learning" },
    { value: "data-science", label: "Data Science & Analytics" },
    { value: "computer-vision", label: "Computer Vision Solutions" },
    { value: "nlp", label: "Natural Language Processing" },
    { value: "generative-ai", label: "Generative AI Solutions" },
    { value: "web-development", label: "Web Applications" },
    { value: "mobile-development", label: "Mobile Applications" },
    { value: "cloud-solutions", label: "Cloud Infrastructure" },
    { value: "consulting", label: "AI Strategy Consulting" },
    { value: "other", label: "Other / Custom Solution" },
  ];

  // Budget ranges
  const budgetRanges = [
    { value: "under-10k", label: "Under $10k (AI Proof of Concept)" },
    { value: "10k-30k", label: "$10k - $30k (Standard AI Solution)" },
    { value: "30k-plus", label: "$30k+ (Enterprise Gen AI Solution)" },
    { value: "equity", label: "Equity Partnership" },
  ];

  // Timeline options
  const timelineOptions = [
    { value: "asap", label: "ASAP (Rush project)" },
    { value: "1-month", label: "Within 1 month" },
    { value: "2-3-months", label: "2-3 months" },
    { value: "3-6-months", label: "3-6 months" },
    { value: "6-plus-months", label: "6+ months" },
    { value: "flexible", label: "Flexible timeline" },
  ];

  // Form handling
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const simulateFormSubmission = async () => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate success/error
    const success = Math.random() > 0.2; // 80% success rate
    setSubmitStatus(success ? "success" : "error");
    setIsSubmitting(false);

    if (success) {
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        service: "",
        budget: "",
        timeline: "",
        projectDescription: "",
        additionalInfo: "",
        hearAboutUs: "",
        communicationPreference: "email",
      });
    }
  };

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-accent-orange-light z-50"
        style={{ scaleX: progressBarWidth, transformOrigin: "0%" }}
      />

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-accent-orange/20 rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-black via-primary-dark to-secondary-dark relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-orange/20 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-sm font-medium mb-8"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(245, 148, 41, 0.3)",
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get in Touch
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-white mb-6"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Let's Build Something
                <span className="block bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
                  Intelligent Together
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-neutral-text-gray max-w-3xl mx-auto mb-12"
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Ready to transform your business with AI? Let's build
                intelligent solutions fast, validate your data strategy, and
                plan your AI implementation.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-accent-orange" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-text-gray">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gradient-to-b from-secondary-dark to-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Contact Methods
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                Choose your preferred way to get in touch. We're available 24/7
                for urgent AI projects.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20 hover:border-accent-orange/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-accent-orange/20 to-accent-orange-light/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-8 h-8 text-accent-orange" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-white mb-2">
                        {info.title}
                      </h3>
                      <p className="text-accent-orange font-medium mb-3">
                        {info.detail}
                      </p>
                      <p className="text-neutral-text-gray text-sm mb-4">
                        {info.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white"
                        onClick={() => window.open(info.action, "_blank")}
                      >
                        Contact
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <Badge
                    variant="outline"
                    className="mb-4 text-accent-orange border-accent-orange"
                  >
                    Start Your Project
                  </Badge>
                  <h2 className="text-3xl font-bold text-neutral-white mb-4">
                    Tell Us About Your AI Vision
                  </h2>
                  <p className="text-neutral-text-gray">
                    Fill out the form below and we'll get back to you within 24
                    hours with a detailed project proposal.
                  </p>
                </div>

                <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      {/* Basic Information */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-neutral-white mb-2"
                          >
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-neutral-white mb-2"
                          >
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Enter your last name"
                            className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-neutral-white mb-2"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-neutral-white mb-2"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-neutral-white mb-2"
                          >
                            Company
                          </label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Your company name"
                            className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="website"
                            className="block text-sm font-medium text-neutral-white mb-2"
                          >
                            Website
                          </label>
                          <Input
                            id="website"
                            type="url"
                            placeholder="https://yourwebsite.com"
                            className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                            value={formData.website}
                            onChange={(e) =>
                              handleInputChange("website", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-medium text-neutral-white mb-2"
                          >
                            Service Needed *
                          </label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) =>
                              handleInputChange("service", value)
                            }
                          >
                            <SelectTrigger className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange">
                              <SelectValue placeholder="Select what you need" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem
                                  key={service.value}
                                  value={service.value}
                                >
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label
                            htmlFor="budget"
                            className="block text-sm font-medium text-neutral-white mb-2"
                          >
                            Budget Range
                          </label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) =>
                              handleInputChange("budget", value)
                            }
                          >
                            <SelectTrigger className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((budget) => (
                                <SelectItem
                                  key={budget.value}
                                  value={budget.value}
                                >
                                  {budget.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-sm font-medium text-neutral-white mb-2"
                        >
                          Timeline *
                        </label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            handleInputChange("timeline", value)
                          }
                        >
                          <SelectTrigger className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange">
                            <SelectValue placeholder="When do you need this completed?" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelineOptions.map((timeline) => (
                              <SelectItem
                                key={timeline.value}
                                value={timeline.value}
                              >
                                {timeline.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="projectDescription"
                          className="block text-sm font-medium text-neutral-white mb-2"
                        >
                          Project Description *
                        </label>
                        <Textarea
                          id="projectDescription"
                          placeholder="Describe your business idea, target users, main features, and timeline. The more details, the better we can help!"
                          className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange min-h-[120px]"
                          value={formData.projectDescription}
                          onChange={(e) =>
                            handleInputChange(
                              "projectDescription",
                              e.target.value,
                            )
                          }
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="additionalInfo"
                          className="block text-sm font-medium text-neutral-white mb-2"
                        >
                          Additional Information
                        </label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any additional details, specific requirements, or questions?"
                          className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                          value={formData.additionalInfo}
                          onChange={(e) =>
                            handleInputChange("additionalInfo", e.target.value)
                          }
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="button"
                        onClick={simulateFormSubmission}
                        disabled={isSubmitting}
                        className="w-full bg-accent-orange hover:bg-accent-orange-light text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>

                      {/* Status Messages */}
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-green-400">
                            Message sent successfully! We'll get back to you
                            within 24 hours.
                          </span>
                        </motion.div>
                      )}

                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                        >
                          <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                          <span className="text-red-400">
                            There was an error sending your message. Please try
                            again.
                          </span>
                        </motion.div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Side Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Quick Consultation */}
                <Card className="bg-gradient-to-br from-accent-orange to-accent-orange-light text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Free AI Consultation
                    </h3>
                    <p className="mb-6 opacity-90">
                      Get a 30-minute free consultation to discuss your AI
                      strategy, identify opportunities, and create a roadmap for
                      your AI transformation.
                    </p>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-accent-orange"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Consultation
                    </Button>
                  </CardContent>
                </Card>

                {/* Resources */}
                <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-neutral-white mb-6">
                      AI Resources
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "AI Implementation Guide",
                          description: "Step-by-step guide for AI adoption",
                          icon: BookOpen,
                        },
                        {
                          title: "Case Studies",
                          description: "Real AI success stories",
                          icon: FileText,
                        },
                        {
                          title: "ROI Calculator",
                          description: "Calculate your AI investment returns",
                          icon: BarChart3,
                        },
                      ].map((resource, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary-black/40 transition-colors cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          <resource.icon className="w-5 h-5 text-accent-orange mt-1" />
                          <div>
                            <div className="text-neutral-white font-medium">
                              {resource.title}
                            </div>
                            <div className="text-neutral-text-gray text-sm">
                              {resource.description}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-neutral-text-gray ml-auto" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Office Locations Quick */}
                <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-neutral-white mb-6">
                      Our Locations
                    </h3>
                    <div className="space-y-4">
                      {offices.map((office, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary-black/40 transition-colors cursor-pointer"
                          whileHover={{ x: 5 }}
                          onClick={() => setSelectedOffice(index)}
                        >
                          <Building className="w-5 h-5 text-accent-orange mt-1" />
                          <div>
                            <div className="text-neutral-white font-medium">
                              {office.name}
                            </div>
                            <div className="text-neutral-text-gray text-sm">
                              {office.team} • {office.specialties[0]}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-neutral-text-gray ml-auto" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Details */}
        <section className="py-20 bg-gradient-to-b from-secondary-dark to-primary-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Visit Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Our Global Offices
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                Come visit our offices around the world. Coffee's always brewing
                and we love meeting fellow entrepreneurs!
              </p>
            </motion.div>

            {/* Office Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 bg-primary-black/50 rounded-lg p-1">
                {offices.map((office, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOffice(index)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      selectedOffice === index
                        ? "bg-accent-orange text-white"
                        : "text-neutral-text-gray hover:text-white"
                    }`}
                  >
                    {office.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Office Details */}
            <motion.div
              key={selectedOffice}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Office Image */}
                    <div className="aspect-video bg-gradient-to-br from-accent-orange/20 to-accent-orange-light/20 rounded-lg flex items-center justify-center">
                      <Building className="w-16 h-16 text-accent-orange" />
                    </div>

                    {/* Office Info */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-neutral-white">
                            {offices[selectedOffice].name}
                          </h3>
                          {offices[selectedOffice].isHeadquarters && (
                            <Badge className="bg-accent-orange/20 text-accent-orange">
                              HQ
                            </Badge>
                          )}
                        </div>
                        <p className="text-neutral-text-gray">
                          {offices[selectedOffice].description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-accent-orange" />
                          <span className="text-neutral-white">
                            {offices[selectedOffice].address}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-accent-orange" />
                          <span className="text-neutral-white">
                            {offices[selectedOffice].phone}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-accent-orange" />
                          <span className="text-neutral-white">
                            {offices[selectedOffice].email}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-accent-orange" />
                          <span className="text-neutral-white">
                            {offices[selectedOffice].hours}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-neutral-white font-semibold mb-3">
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {offices[selectedOffice].specialties.map(
                            (specialty, idx) => (
                              <Badge
                                key={idx}
                                className="bg-accent-orange/20 text-accent-orange"
                              >
                                {specialty}
                              </Badge>
                            ),
                          )}
                        </div>
                      </div>

                      <Button className="bg-accent-orange hover:bg-accent-orange-light text-white">
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-primary-black to-secondary-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-neutral-text-gray">
                Quick answers to common questions business owners ask us.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="border border-primary-light/20 rounded-lg"
                >
                  <button
                    className="w-full text-left p-6 hover:bg-primary-black/40 transition-colors flex items-center justify-between"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    <span className="text-neutral-white font-semibold">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: expandedFaq === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-accent-orange" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === index ? "auto" : 0,
                      opacity: expandedFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-neutral-text-gray leading-relaxed">
                        {faq.answer}
                      </p>
                      <Badge
                        variant="outline"
                        className="mt-3 text-accent-orange border-accent-orange/50"
                      >
                        {faq.category}
                      </Badge>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="text-center mt-12" {...fadeInUp}>
              <p className="text-neutral-text-gray mb-4">
                Still have questions about your business?
              </p>
              <Button className="bg-accent-orange hover:bg-accent-orange-light text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask a Question
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-accent-orange to-accent-orange-light relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your AI Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's build intelligent solutions that transform your business
                and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-accent-orange hover:bg-neutral-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-accent-orange px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Contact;
