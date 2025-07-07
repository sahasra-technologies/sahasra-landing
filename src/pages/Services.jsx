import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Code,
  Smartphone,
  Brain,
  Database,
  Cloud,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Star,
  TrendingUp,
  Sparkles,
  MousePointer,
  Eye,
  BarChart3,
  Timer,
  Lightbulb,
  Rocket,
  Target,
  Globe,
  Shield,
  DollarSign,
  Clock,
  Heart,
  Coffee,
  Book,
  Play,
  Pause,
  Settings,
  Cpu,
  FileText,
  Image,
  Bot,
  LineChart,
  PieChart,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
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

  const services = [
    {
      icon: Rocket,
      title: "AI & Machine Learning",
      description:
        "Transform your business with intelligent AI solutions, from predictive analytics to natural language processing.",
      features: [
        "Custom ML models",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
        "Data pipeline automation",
        "Real-time AI insights",
      ],
      color: "from-blue-500 to-cyan-500",
      duration: "4-8 weeks",
      approach: "AI-first methodology",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API"],
      deliverables: [
        "Trained Models",
        "API Endpoints",
        "Documentation",
        "Monitoring Dashboard",
      ],
      pricing: "Starting from $15,000",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Cross-platform mobile apps built with React Native, allowing you to launch on both iOS and Android simultaneously.",
      features: [
        "React Native",
        "iOS & Android",
        "Native performance",
        "Push notifications",
        "Offline functionality",
        "App store deployment",
      ],
      color: "from-green-500 to-emerald-500",
      duration: "3-6 weeks",
      approach: "Cross-platform first",
      technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
      deliverables: [
        "iOS App",
        "Android App",
        "Backend API",
        "Admin Dashboard",
      ],
      pricing: "Starting from $12,000",
    },
    {
      icon: Code,
      title: "Web Applications",
      description:
        "Modern, responsive web applications built with the latest technologies and optimized for performance.",
      features: [
        "React & Next.js",
        "Responsive design",
        "API integration",
        "Performance optimized",
        "SEO friendly",
        "Cloud deployment",
      ],
      color: "from-purple-500 to-pink-500",
      duration: "2-5 weeks",
      approach: "Modern web standards",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      deliverables: ["Web Application", "Admin Panel", "API", "Deployment"],
      pricing: "Starting from $8,000",
    },
    {
      icon: Target,
      title: "Rapid Prototyping",
      description:
        "Quickly validate your ideas with interactive prototypes before committing to full development.",
      features: [
        "Interactive design",
        "User flow testing",
        "Clickable prototype",
        "Design validation",
        "Investor ready",
        "1-week delivery",
      ],
      color: "from-orange-500 to-red-500",
      duration: "3-7 days",
      approach: "Rapid validation",
      technologies: ["Figma", "Framer", "React", "Tailwind CSS"],
      deliverables: [
        "Interactive Prototype",
        "Design System",
        "User Flow",
        "Presentation",
      ],
      pricing: "Starting from $3,000",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure setup and deployment strategies for your growing business.",
      features: [
        "AWS & Azure",
        "Auto-scaling",
        "CI/CD pipelines",
        "Monitoring setup",
        "Security best practices",
        "Cost optimization",
      ],
      color: "from-indigo-500 to-blue-500",
      duration: "1-3 weeks",
      approach: "Infrastructure as code",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      deliverables: [
        "Cloud Infrastructure",
        "CI/CD Pipeline",
        "Monitoring",
        "Documentation",
      ],
      pricing: "Starting from $5,000",
    },
    {
      icon: Brain,
      title: "Data Science & Analytics",
      description:
        "Comprehensive data science solutions to unlock insights and drive data-driven decision making across your organization.",
      features: [
        "Advanced Statistical Analysis",
        "Big Data Processing & ETL",
        "Real-time Analytics Dashboards",
        "A/B Testing & Experimentation",
        "Time Series Analysis",
        "Clustering & Segmentation",
        "Data Mining & Pattern Recognition",
        "Machine Learning Model Deployment",
      ],
      color: "from-teal-500 to-green-500",
      duration: "6-12 weeks",
      approach: "Data-driven methodology",
      technologies: ["Python", "R", "Apache Spark", "Tableau"],
      deliverables: [
        "Analytics Dashboard",
        "Data Pipeline",
        "Reports",
        "ML Models",
      ],
      pricing: "Starting from $20,000",
    },
    {
      icon: Brain,
      title: "Computer Vision Solutions",
      description:
        "Advanced computer vision and image processing solutions for automated visual analysis and recognition tasks.",
      features: [
        "Object Detection & Recognition",
        "Facial Recognition Systems",
        "OCR & Document Processing",
        "Medical Image Analysis",
        "Quality Control Automation",
        "Video Analytics & Surveillance",
        "Augmented Reality Integration",
        "3D Reconstruction & Modeling",
      ],
      color: "from-purple-500 to-pink-500",
      duration: "8-16 weeks",
      approach: "Deep learning models",
      technologies: ["OpenCV", "YOLO", "TensorFlow", "PyTorch"],
      deliverables: ["CV Models", "API Service", "Web Interface", "Mobile SDK"],
      pricing: "Starting from $25,000",
    },
    {
      icon: Brain,
      title: "Natural Language Processing",
      description:
        "Advanced NLP solutions to understand, process, and generate human language for intelligent automation.",
      features: [
        "Sentiment Analysis & Monitoring",
        "Chatbots & Virtual Assistants",
        "Text Classification & Tagging",
        "Language Translation Services",
        "Information Extraction",
        "Content Generation & Summarization",
        "Voice Recognition & Processing",
        "Document Intelligence",
      ],
      color: "from-cyan-500 to-blue-500",
      duration: "6-14 weeks",
      approach: "Transformer-based models",
      technologies: ["BERT", "GPT", "spaCy", "Hugging Face"],
      deliverables: [
        "NLP Models",
        "API Gateway",
        "Web Dashboard",
        "Integration",
      ],
      pricing: "Starting from $18,000",
    },
    {
      icon: Brain,
      title: "Generative AI Solutions",
      description:
        "Cutting-edge generative AI applications that create content, automate workflows, and enhance user experiences with AI-generated outputs.",
      features: [
        "Custom GPT & LLM Integration",
        "AI Content Generation",
        "Automated Code Generation",
        "AI-Powered Creative Tools",
        "Custom AI Assistants",
        "Synthetic Data Generation",
        "AI Image & Video Creation",
        "Intelligent Document Processing",
      ],
      color: "from-violet-500 to-purple-500",
      duration: "8-20 weeks",
      approach: "Foundation model fine-tuning",
      technologies: ["OpenAI GPT", "Claude", "Stable Diffusion", "LangChain"],
      deliverables: [
        "AI Application",
        "Custom Models",
        "API Services",
        "User Interface",
      ],
      pricing: "Starting from $30,000",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your vision, target users, and business goals to create a focused development plan.",
      icon: Target,
    },
    {
      step: "02",
      title: "Rapid Prototyping",
      description:
        "Quick wireframes and prototypes help us validate the concept and user experience before development.",
      icon: Lightbulb,
    },
    {
      step: "03",
      title: "Agile Development",
      description:
        "We build in short sprints with regular check-ins, ensuring you stay involved throughout the process.",
      icon: Rocket,
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Comprehensive testing followed by deployment and ongoing support to ensure smooth operation.",
      icon: CheckCircle,
    },
  ];

  const advantages = [
    {
      title: "Generative AI Expertise",
      description:
        "We specialize in cutting-edge generative AI and foundation model implementations",
      icon: Brain,
      stats: "50+ AI models deployed",
    },
    {
      title: "Fast Delivery",
      description: "AI solutions delivered in weeks, not months",
      icon: Timer,
      stats: "3-8 week avg",
    },
    {
      title: "Transparent Pricing",
      description: "Flexible payment options and transparent project scoping",
      icon: DollarSign,
      stats: "No hidden costs",
    },
    {
      title: "Modern Stack",
      description: "Latest technologies and best practices",
      icon: Star,
      stats: "2024 tech stack",
    },
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-rotate selected service
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setSelectedService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
        {/* Enhanced Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-black via-primary-dark to-secondary-dark relative overflow-hidden">
          {/* Animated Background Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-orange/30 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
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
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-sm font-medium mb-8"
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(245, 148, 41, 0.3)",
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Brain className="w-4 h-4 mr-2" />
                </motion.div>
                AI & Data Science Services
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-white mb-6"
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Transform Your Business with
                <span className="block bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
                  Intelligent Solutions
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-neutral-text-gray max-w-3xl mx-auto mb-12"
                {...fadeInUp}
                transition={{ delay: 0.5 }}
              >
                We specialize in AI, generative AI, and data science solutions
                that transform businesses with intelligent automation and
                content creation.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-accent-orange hover:bg-accent-orange-light text-neutral-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-neutral-white px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Service Showcase */}
        <section className="py-20 bg-gradient-to-b from-secondary-dark to-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Featured Service
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Interactive Service Explorer
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                Discover our comprehensive AI and development services with
                detailed insights
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Service Details */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-neutral-white">
                    {services[selectedService].title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="text-accent-orange hover:bg-accent-orange/10"
                  >
                    {isAutoPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                <p className="text-neutral-text-gray text-lg leading-relaxed">
                  {services[selectedService].description}
                </p>

                {/* Service Tabs */}
                <div className="flex space-x-1 bg-primary-black/50 rounded-lg p-1">
                  {["overview", "technologies", "deliverables"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                        activeTab === tab
                          ? "bg-accent-orange text-neutral-white"
                          : "text-neutral-text-gray hover:text-neutral-white"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {activeTab === "overview" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-black/30 rounded-lg p-4">
                        <div className="text-sm text-neutral-text-gray">
                          Duration
                        </div>
                        <div className="text-xl font-bold text-accent-orange">
                          {services[selectedService].duration}
                        </div>
                      </div>
                      <div className="bg-primary-black/30 rounded-lg p-4">
                        <div className="text-sm text-neutral-text-gray">
                          Approach
                        </div>
                        <div className="text-lg font-semibold text-neutral-white">
                          {services[selectedService].approach}
                        </div>
                      </div>
                      <div className="col-span-2 bg-primary-black/30 rounded-lg p-4">
                        <div className="text-sm text-neutral-text-gray mb-2">
                          Key Features
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {services[selectedService].features
                            .slice(0, 4)
                            .map((feature, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-accent-orange/20 text-accent-orange"
                              >
                                {feature}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "technologies" && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-neutral-white">
                        Tech Stack
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {services[selectedService].technologies.map(
                          (tech, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3 bg-primary-black/30 rounded-lg p-3"
                            >
                              <Settings className="w-5 h-5 text-accent-orange" />
                              <span className="text-neutral-white font-medium">
                                {tech}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === "deliverables" && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-neutral-white">
                        What You Get
                      </h4>
                      <div className="space-y-2">
                        {services[selectedService].deliverables.map(
                          (item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <span className="text-neutral-white">{item}</span>
                            </div>
                          ),
                        )}
                      </div>
                      <div className="mt-4 p-4 bg-accent-orange/10 rounded-lg border border-accent-orange/20">
                        <div className="text-accent-orange font-semibold text-lg">
                          {services[selectedService].pricing}
                        </div>
                        <div className="text-neutral-text-gray text-sm">
                          Final price depends on project complexity and
                          requirements
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>

              {/* Service Cards Grid */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedService === index
                        ? "bg-gradient-to-br " +
                          service.color +
                          " scale-105 shadow-lg"
                        : "bg-primary-black/40 hover:bg-primary-black/60"
                    }`}
                    onClick={() => setSelectedService(index)}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {React.createElement(service.icon, {
                      className: `w-8 h-8 mb-3 ${
                        selectedService === index
                          ? "text-white"
                          : "text-accent-orange"
                      }`,
                    })}
                    <h3
                      className={`font-semibold text-sm mb-2 ${
                        selectedService === index
                          ? "text-white"
                          : "text-neutral-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-xs ${
                        selectedService === index
                          ? "text-white/80"
                          : "text-neutral-text-gray"
                      }`}
                    >
                      {service.duration}
                    </p>

                    {selectedService === index && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Our Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                How We Deliver Excellence
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                Our lean, business-focused methodology ensures fast delivery
                without compromising on quality
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={fadeInUp}
                >
                  <Card className="bg-primary-black/40 border-primary-light/20 hover:border-accent-orange/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-accent-orange to-accent-orange-light rounded-full flex items-center justify-center text-neutral-white font-bold text-lg">
                          {step.step}
                        </div>
                        {React.createElement(step.icon, {
                          className: "w-6 h-6 text-accent-orange ml-auto",
                        })}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-text-gray leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-orange to-accent-orange-light opacity-50" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-gradient-to-b from-secondary-dark to-primary-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                The Sahasra Advantage
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                We understand the business journey because we've been there
                ourselves.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20 hover:border-accent-orange/30 transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-accent-orange/20 to-accent-orange-light/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {React.createElement(advantage.icon, {
                          className: "w-8 h-8 text-accent-orange",
                        })}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-white mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-neutral-text-gray mb-4 leading-relaxed">
                        {advantage.description}
                      </p>
                      <div className="text-accent-orange font-bold text-lg">
                        {advantage.stats}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent-orange to-accent-orange-light relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create an intelligent solution
                that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-accent-orange hover:bg-neutral-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-accent-orange px-8 py-4 rounded-xl transition-all duration-300"
                >
                  Schedule Consultation
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

export default Services;
