import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Play,
  TrendingUp,
  Globe,
  Rocket,
  MessageCircle,
  Calendar,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Quote,
  Sparkles,
  MousePointer,
  Eye,
  BarChart3,
  Timer,
  Lightbulb,
  Target,
  Coffee,
  Heart,
  DollarSign,
  Clock,
  Book,
  Briefcase,
  Settings,
  Bot,
  Layers,
  Cpu,
  FileText,
  Image,
  Mic,
  PieChart,
  LineChart,
  Activity,
  Shield,
  Wifi,
  Monitor,
  Building,
  Headphones,
  Send,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  ChevronDown,
  Pause,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedService, setSelectedService] = useState(0);
  const [liveStats, setLiveStats] = useState({
    days: 0,
    models: 0,
    clients: 0,
    coffee: 0,
  });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleTestimonial, setVisibleTestimonial] = useState(0);

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Technology solutions with smooth transitions
  const words = [
    "Gen AI Solutions",
    "ML & Data Science",
    "Mobile Apps",
    "Web Platforms",
    "Data Intelligence",
    "Smart Technology",
  ];

  // Enhanced features with AI focus
  const features = [
    {
      title: "Generative AI Solutions",
      description:
        "Custom GPT integrations, content generation, and AI assistants that transform your business operations",
      tech: ["OpenAI GPT", "Claude", "LangChain", "Custom Models"],
      benefit: "10x productivity boost",
      icon: Brain,
      color: "from-violet-500 to-purple-500",
      stats: "89% efficiency gain",
    },
    {
      title: "Machine Learning & Data Science",
      description:
        "Predictive analytics, computer vision, and NLP solutions that unlock hidden insights in your data",
      tech: ["TensorFlow", "PyTorch", "Python", "Apache Spark"],
      benefit: "Data-driven decisions",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      stats: "95% accuracy rates",
    },
    {
      title: "AI-Powered Applications",
      description:
        "Web and mobile applications enhanced with intelligent features and automated workflows",
      tech: ["React", "Next.js", "TypeScript", "AI APIs"],
      benefit: "Smart user experiences",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      stats: "3x user engagement",
    },
  ];

  // Enhanced AI services portfolio
  const services = [
    {
      icon: Brain,
      title: "Generative AI Development",
      description:
        "Custom AI solutions that create content, automate workflows, and enhance user experiences",
      features: [
        "Custom GPT integration",
        "AI content generation",
        "Automated workflows",
        "Smart assistants",
      ],
      color: "from-violet-500 to-purple-500",
      timeline: "8-12 weeks",
      complexity: "Advanced",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description:
        "Advanced image and video analysis for automation, quality control, and intelligent monitoring",
      features: [
        "Object detection",
        "Facial recognition",
        "OCR processing",
        "Quality control",
      ],
      color: "from-indigo-500 to-blue-500",
      timeline: "6-10 weeks",
      complexity: "Specialized",
    },
    {
      icon: MessageCircle,
      title: "Natural Language Processing",
      description:
        "Intelligent text analysis, chatbots, and language understanding for better communication",
      features: [
        "Sentiment analysis",
        "Chatbot development",
        "Text classification",
        "Language translation",
      ],
      color: "from-cyan-500 to-teal-500",
      timeline: "4-8 weeks",
      complexity: "Intermediate",
    },
    {
      icon: BarChart3,
      title: "Data Science & Analytics",
      description:
        "Transform raw data into actionable insights with advanced analytics and machine learning",
      features: [
        "Predictive modeling",
        "Real-time dashboards",
        "Business intelligence",
        "Data visualization",
      ],
      color: "from-green-500 to-emerald-500",
      timeline: "6-12 weeks",
      complexity: "Comprehensive",
    },
    {
      icon: Code,
      title: "AI-Enhanced Web Apps",
      description:
        "Modern web applications with integrated AI features and intelligent user interfaces",
      features: [
        "Smart recommendations",
        "Automated workflows",
        "AI-powered search",
        "Intelligent forms",
      ],
      color: "from-orange-500 to-red-500",
      timeline: "4-8 weeks",
      complexity: "Standard",
    },
    {
      icon: Smartphone,
      title: "Intelligent Mobile Apps",
      description:
        "Cross-platform mobile applications with AI capabilities and offline intelligence",
      features: [
        "On-device AI",
        "Smart notifications",
        "Voice interfaces",
        "Predictive features",
      ],
      color: "from-pink-500 to-rose-500",
      timeline: "6-10 weeks",
      complexity: "Advanced",
    },
  ];

  // Client success stories / testimonials
  const testimonials = [
    {
      quote:
        "Sahasra transformed our customer service with AI chatbots that understand context and provide intelligent responses. Customer satisfaction increased by 40%.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      company: "E-commerce Platform",
      avatar: Users,
      results: "40% satisfaction increase",
    },
    {
      quote:
        "Their computer vision solution automated our quality control process, reducing inspection time by 80% while improving accuracy.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "Manufacturing Corp",
      avatar: Settings,
      results: "80% time reduction",
    },
    {
      quote:
        "The predictive analytics model they built helps us forecast demand with 95% accuracy, optimizing our inventory management.",
      author: "Emily Watson",
      role: "Head of Analytics",
      company: "RetailTech Inc",
      avatar: TrendingUp,
      results: "95% forecast accuracy",
    },
  ];

  // Company achievements and metrics
  const achievements = [
    {
      metric: "89+",
      label: "AI Models Deployed",
      description: "Successfully implemented across various industries",
      icon: Brain,
      color: "text-violet-400",
    },
    {
      metric: "156",
      label: "Happy Clients",
      description: "Businesses transformed with intelligent solutions",
      icon: Heart,
      color: "text-red-400",
    },
    {
      metric: "98%",
      label: "Success Rate",
      description: "Projects delivered on time and within budget",
      icon: Target,
      color: "text-green-400",
    },
    {
      metric: "24/7",
      label: "AI Support",
      description: "Round-the-clock intelligent system monitoring",
      icon: Shield,
      color: "text-blue-400",
    },
  ];

  // Technology stack categories
  const techStack = [
    {
      category: "AI & Machine Learning",
      technologies: [
        {
          name: "OpenAI GPT",
          icon: Brain,
          description: "Large language models",
        },
        { name: "TensorFlow", icon: Cpu, description: "ML framework" },
        { name: "PyTorch", icon: Activity, description: "Deep learning" },
        { name: "Hugging Face", icon: Heart, description: "Model hub" },
      ],
    },
    {
      category: "Data & Analytics",
      technologies: [
        {
          name: "Apache Spark",
          icon: Database,
          description: "Big data processing",
        },
        { name: "Python", icon: Code, description: "Data science" },
        { name: "Tableau", icon: PieChart, description: "Visualization" },
        { name: "PostgreSQL", icon: Database, description: "Data warehouse" },
      ],
    },
    {
      category: "Development",
      technologies: [
        { name: "React", icon: Monitor, description: "Frontend framework" },
        { name: "Next.js", icon: Layers, description: "Full-stack React" },
        { name: "TypeScript", icon: Code, description: "Type safety" },
        { name: "Node.js", icon: Settings, description: "Backend runtime" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      technologies: [
        { name: "AWS", icon: Cloud, description: "Cloud services" },
        { name: "Docker", icon: Layers, description: "Containerization" },
        { name: "Kubernetes", icon: Settings, description: "Orchestration" },
        { name: "MongoDB", icon: Database, description: "NoSQL database" },
      ],
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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

  // Simple word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-advance features
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
      setSelectedService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Animated stats counter
  useEffect(() => {
    if (isStatsInView) {
      const animateStats = async () => {
        const duration = 2000;
        const frames = 60;
        const increment = duration / frames;

        for (let i = 0; i <= frames; i++) {
          const progress = i / frames;
          setLiveStats({
            days: Math.floor(progress * 1247),
            models: Math.floor(progress * 89),
            clients: Math.floor(progress * 156),
            coffee: Math.floor(progress * 2847),
          });
          await new Promise((resolve) => setTimeout(resolve, increment));
        }
      };
      animateStats();
    }
  }, [isStatsInView]);

  return (
    <motion.div
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-accent-orange/20 rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-primary-black via-primary-dark to-secondary-dark overflow-hidden flex items-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-accent-orange/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-48 h-48 bg-accent-orange/5 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-orange/30 rounded-full"
                animate={{
                  y: [-20, -100, -20],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Hero Content */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-sm font-medium mb-8"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(245, 148, 41, 0.3)",
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Brain className="w-4 h-4 mr-2" />
                  </motion.div>
                  Gen AI, ML, Data Science & Full-Stack Development
                </motion.div>

                <div className="relative">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                    {/* Building Tomorrow's - Enhanced Design */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <span className="relative inline-block">
                        <span className="text-neutral-white relative z-10">
                          Building Tomorrow's
                        </span>
                        {/* Animated underline */}
                        <motion.div
                          className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-accent-orange to-accent-orange-light rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, delay: 0.8 }}
                        />
                        {/* Subtle glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent-orange/20 to-accent-orange-light/20 blur-lg rounded-lg"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </span>
                    </motion.div>

                    {/* Clean Word Transition Animation */}
                    <motion.div
                      className="block mt-2 relative min-h-[80px] flex items-center"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <motion.span
                        key={currentWordIndex}
                        className="relative inline-block"
                        initial={{
                          opacity: 0,
                          y: 50,
                          rotateX: -90,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -50,
                          rotateX: 90,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        {/* Background glow effect */}
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-accent-orange via-accent-orange-light to-accent-orange bg-clip-text text-transparent blur-sm opacity-60"
                          aria-hidden="true"
                        >
                          {words[currentWordIndex]}
                        </span>

                        {/* Main text with enhanced gradient */}
                        <span className="relative bg-gradient-to-r from-accent-orange via-accent-orange-light to-accent-orange bg-clip-text text-transparent font-extrabold">
                          {words[currentWordIndex]}
                        </span>

                        {/* Subtle underline animation */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-orange to-accent-orange-light rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </motion.span>

                      {/* Clean floating elements */}
                      <div className="absolute -top-4 -right-4">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Sparkles className="w-6 h-6 text-accent-orange/60" />
                        </motion.div>
                      </div>

                      <div className="absolute -bottom-2 -left-3">
                        <motion.div
                          animate={{
                            y: [0, -8, 0],
                            opacity: [0.4, 0.8, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        >
                          <Zap className="w-4 h-4 text-accent-orange/40" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </h1>

                  {/* Additional visual elements */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      className="w-20 h-px bg-gradient-to-r from-transparent via-accent-orange to-transparent"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </div>
                </div>

                <p className="text-xl text-neutral-text-gray mb-8 max-w-2xl lg:max-w-none leading-relaxed">
                  We specialize in cutting-edge{" "}
                  <span className="text-accent-orange font-semibold">
                    Generative AI
                  </span>
                  ,
                  <span className="text-accent-orange font-semibold">
                    {" "}
                    Machine Learning
                  </span>
                  , and
                  <span className="text-accent-orange font-semibold">
                    {" "}
                    Data Science solutions
                  </span>{" "}
                  alongside comprehensive{" "}
                  <span className="text-accent-orange font-semibold">
                    Mobile & Web development
                  </span>
                  that transform businesses with intelligent automation,
                  predictive insights, and modern applications.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button
                    size="lg"
                    className="bg-accent-orange hover:bg-accent-orange-light text-neutral-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => navigate("/services")}
                  >
                    Explore All Our Solutions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-neutral-white px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Tech Demo
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[
                    { value: "89+", label: "AI Models" },
                    { value: "156", label: "Projects" },
                    { value: "98%", label: "Success Rate" },
                    { value: "24/7", label: "Tech Support" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="p-3 rounded-lg bg-primary-black/40 border border-primary-light/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-accent-orange">
                        {stat.value}
                      </div>
                      <div className="text-sm text-neutral-text-gray">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Interactive Feature Showcase */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Main Feature Card */}
                  <motion.div
                    key={activeFeature}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      className={`bg-gradient-to-br ${features[activeFeature].color} p-8 text-white relative overflow-hidden`}
                    >
                      <CardContent className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          {React.createElement(features[activeFeature].icon, {
                            className: "w-12 h-12",
                          })}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="text-white/80 hover:text-white hover:bg-white/10"
                          >
                            {isAutoPlaying ? (
                              <Pause className="w-4 h-4" />
                            ) : (
                              <Play className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">
                          {features[activeFeature].title}
                        </h3>
                        <p className="mb-4 opacity-90">
                          {features[activeFeature].description}
                        </p>
                        <div className="mb-4">
                          <div className="text-sm opacity-80 mb-2">
                            Technologies:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {features[activeFeature].tech.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-white/20 text-white"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            {features[activeFeature].benefit}
                          </span>
                          <span className="text-lg font-bold">
                            {features[activeFeature].stats}
                          </span>
                        </div>
                      </CardContent>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-24 h-24 border border-white/30 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Feature Navigation */}
                  <div className="flex justify-center mt-6 space-x-3">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveFeature(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeFeature === index
                            ? "bg-accent-orange scale-125"
                            : "bg-neutral-text-gray hover:bg-accent-orange/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-accent-orange" />
            </motion.div>
          </div>
        </section>

        {/* Services Portfolio */}
        <section className="py-20 bg-gradient-to-b from-secondary-dark to-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Complete Technology Solutions
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-3xl mx-auto">
                From{" "}
                <span className="text-accent-orange font-semibold">
                  Generative AI and Machine Learning
                </span>{" "}
                to
                <span className="text-accent-orange font-semibold">
                  {" "}
                  Data Science analytics
                </span>{" "}
                and
                <span className="text-accent-orange font-semibold">
                  {" "}
                  Mobile & Web development
                </span>{" "}
                - we deliver end-to-end intelligent solutions that transform how
                businesses operate and compete.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20 hover:border-accent-orange/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {React.createElement(service.icon, {
                          className: "w-8 h-8 text-white",
                        })}
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-neutral-text-gray mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-neutral-text-gray text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <span className="text-neutral-text-gray">
                            Timeline:{" "}
                          </span>
                          <span className="text-accent-orange font-medium">
                            {service.timeline}
                          </span>
                        </div>
                        <Badge
                          className={`bg-gradient-to-r ${service.color} text-white`}
                        >
                          {service.complexity}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="text-center mt-12" {...fadeInUp}>
              <Button
                size="lg"
                className="bg-accent-orange hover:bg-accent-orange-light text-white px-8 py-4 rounded-xl"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Real Results from Real Clients
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                See how our{" "}
                <span className="text-accent-orange font-semibold">
                  Gen AI, ML, Data Science
                </span>{" "}
                and
                <span className="text-accent-orange font-semibold">
                  {" "}
                  Mobile & Web solutions
                </span>{" "}
                have transformed businesses across industries.
              </p>
            </motion.div>

            <motion.div
              key={visibleTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-accent-orange mx-auto mb-6" />
                    <blockquote className="text-2xl text-neutral-white mb-6 leading-relaxed">
                      "{testimonials[visibleTestimonial].quote}"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-accent-orange/20 to-accent-orange-light/20 rounded-full flex items-center justify-center">
                        {React.createElement(
                          testimonials[visibleTestimonial].avatar,
                          { className: "w-8 h-8 text-accent-orange" },
                        )}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-neutral-white">
                          {testimonials[visibleTestimonial].author}
                        </div>
                        <div className="text-neutral-text-gray">
                          {testimonials[visibleTestimonial].role}
                        </div>
                        <div className="text-accent-orange text-sm">
                          {testimonials[visibleTestimonial].company}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Badge className="bg-accent-orange/20 text-accent-orange">
                        {testimonials[visibleTestimonial].results}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setVisibleTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    visibleTestimonial === index
                      ? "bg-accent-orange scale-125"
                      : "bg-neutral-text-gray hover:bg-accent-orange/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Live Company Stats */}
        <section
          ref={statsRef}
          className="py-20 bg-gradient-to-b from-secondary-dark to-primary-black"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Live Metrics
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Real-Time Company Statistics
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                Watch our journey unfold in real-time as we continue building
                the future of AI.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20 hover:border-accent-orange/30 transition-all duration-300">
                    <CardContent className="p-6">
                      {React.createElement(achievement.icon, {
                        className: `w-12 h-12 ${achievement.color} mx-auto mb-4`,
                      })}
                      <div className="text-3xl font-bold text-neutral-white mb-2">
                        {achievement.metric}
                      </div>
                      <div className="text-lg font-semibold text-accent-orange mb-2">
                        {achievement.label}
                      </div>
                      <div className="text-neutral-text-gray text-sm">
                        {achievement.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Live Development Stats */}
            <motion.div
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              {...fadeInUp}
            >
              {[
                {
                  label: "Days Building",
                  value: liveStats.days,
                  icon: Calendar,
                },
                {
                  label: "AI Models Deployed",
                  value: liveStats.models,
                  icon: Brain,
                },
                {
                  label: "Happy Clients",
                  value: liveStats.clients,
                  icon: Heart,
                },
                {
                  label: "Coffee Consumed",
                  value: liveStats.coffee,
                  icon: Coffee,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-primary-black/40 border border-primary-light/20"
                  whileHover={{ scale: 1.05 }}
                >
                  {React.createElement(stat.icon, {
                    className: "w-8 h-8 text-accent-orange mx-auto mb-2",
                  })}
                  <div className="text-2xl font-bold text-neutral-white">
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-neutral-text-gray">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gradient-to-b from-primary-black to-secondary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Technology Stack
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Cutting-Edge AI Technologies
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                We use the latest and most powerful AI tools and frameworks to
                build intelligent solutions that scale.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {techStack.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20 hover:border-accent-orange/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-white mb-6 text-center">
                        {category.category}
                      </h3>
                      <div className="space-y-4">
                        {category.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary-black/40 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            {React.createElement(tech.icon, {
                              className: "w-6 h-6 text-accent-orange",
                            })}
                            <div>
                              <div className="text-neutral-white font-medium text-sm">
                                {tech.name}
                              </div>
                              <div className="text-neutral-text-gray text-xs">
                                {tech.description}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-accent-orange to-accent-orange-light relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with Technology?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your technology vision and create intelligent
                solutions with
                <span className="font-semibold">
                  {" "}
                  Gen AI, ML, Data Science
                </span>{" "}
                and
                <span className="font-semibold">
                  {" "}
                  Mobile & Web development
                </span>{" "}
                that drive real business results. Get started with a free
                consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-accent-orange hover:bg-neutral-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Tech Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-accent-orange px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Free Consultation
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

export default Index;
