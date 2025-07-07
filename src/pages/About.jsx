import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Users,
  Award,
  Target,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Calendar,
  Coffee,
  Briefcase,
  Sparkles,
  Globe,
  Heart,
  Zap,
  Star,
  ChevronDown,
  Play,
  CheckCircle,
  Rocket,
  Code,
  Book,
  Monitor,
  Layers,
  Brain,
  Database,
  BarChart3,
  Cpu,
  Smartphone,
  Cloud,
  FileText,
  Bot,
  Eye,
  Settings,
  Building,
  GraduationCap,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

const About = () => {
  const [expandedValue, setExpandedValue] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

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

  // Company Values
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description:
        "We're on a mission to help businesses succeed by providing fast, reliable, and high-quality development services.",
      details:
        "Every line of code we write is focused on helping you validate your idea and get to market quickly.",
    },
    {
      icon: Brain,
      title: "AI-First Innovation",
      description:
        "As a technology company, we understand the importance of staying ahead with the latest AI and ML technologies.",
      details:
        "We experiment with cutting-edge AI tools and techniques, bringing proven generative AI solutions to your project.",
    },
    {
      icon: Rocket,
      title: "Speed & Excellence",
      description:
        "We believe speed and quality aren't mutually exclusive. Our lean processes ensure both rapid delivery and excellent results.",
      details:
        "Our agile methodology and modern AI tools allow us to move fast without cutting corners on quality.",
    },
    {
      icon: Shield,
      title: "Entrepreneur Focused",
      description:
        "Being entrepreneurs ourselves, we understand the unique challenges of building a business from the ground up.",
      details:
        "We provide not just development services, but strategic AI guidance from fellow entrepreneurs.",
    },
  ];

  // Enhanced Team with more details
  const team = [
    {
      name: "Alex Chen",
      role: "Co-founder & CTO",
      bio: "Full-stack developer and AI specialist with 10+ years experience. Previously built and sold a SaaS company. Expert in machine learning and generative AI implementations.",
      image: "/placeholder.svg",
      skills: ["React", "Python", "TensorFlow", "AWS", "GenAI"],
      background: "Former AI startup founder",
      passion: "Democratizing AI for businesses",
      education: "Stanford CS, MIT AI Lab",
      achievements: [
        "Built 50+ AI models",
        "Published 12 ML papers",
        "Led team of 25 engineers",
      ],
      social: {
        github: "alexchen-ai",
        linkedin: "alex-chen-ai",
        twitter: "alexchen_ai",
      },
    },
    {
      name: "Sarah Kim",
      role: "Co-founder & CEO",
      bio: "Product strategist and former AI consultant. Experienced in taking AI ideas from concept to market launch. Specializes in AI-driven product development and business strategy.",
      image: "/placeholder.svg",
      skills: ["Product Strategy", "AI Strategy", "Business Development"],
      background: "Ex-McKinsey AI consultant",
      passion: "AI product-market fit",
      education: "Harvard MBA, Berkeley AI",
      achievements: [
        "Launched 15+ AI products",
        "Raised $50M+ for AI startups",
        "Advised 100+ AI companies",
      ],
      social: {
        github: "sarahkim-ai",
        linkedin: "sarah-kim-ai",
        twitter: "sarahkim_ai",
      },
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Data Scientist",
      bio: "Data science expert and ML engineer with deep expertise in computer vision and NLP. Former Google AI researcher with a passion for solving complex business problems with AI.",
      image: "/placeholder.svg",
      skills: ["Python", "PyTorch", "Computer Vision", "NLP", "MLOps"],
      background: "Ex-Google AI Research",
      passion: "Transforming data into insights",
      education: "PhD Stanford AI, Google Brain",
      achievements: [
        "Published 20+ AI papers",
        "3 patents in computer vision",
        "Kaggle Grandmaster",
      ],
      social: {
        github: "mike-rodriguez-ai",
        linkedin: "mike-rodriguez-ai",
        twitter: "mikerodriguez_ai",
      },
    },
    {
      name: "Emma Thompson",
      role: "Head of AI Engineering",
      bio: "AI engineering specialist focused on deploying large-scale machine learning systems. Expert in generative AI, LLMs, and building production-ready AI applications.",
      image: "/placeholder.svg",
      skills: ["LLMs", "GenAI", "Kubernetes", "Python", "Transformers"],
      background: "Ex-OpenAI Engineer",
      passion: "Scaling AI for everyone",
      education: "MIT EECS, OpenAI Fellowship",
      achievements: [
        "Built GPT-4 infrastructure",
        "Deployed 100+ ML models",
        "AI ethics committee member",
      ],
      social: {
        github: "emma-thompson-ai",
        linkedin: "emma-thompson-ai",
        twitter: "emmathompson_ai",
      },
    },
  ];

  // Company Timeline
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Alex and Sarah met at a tech event and realized they shared the same vision: helping businesses succeed with technology.",
      highlight: "Initial vision established",
      icon: Lightbulb,
    },
    {
      year: "2021",
      title: "First AI Project",
      description:
        "We took on our first project - helping a company implement custom generative AI content tools. The success gave us confidence in our approach.",
      highlight: "Gen AI solution delivered in 6 weeks",
      icon: Rocket,
    },
    {
      year: "2022",
      title: "Team Expansion",
      description:
        "Grew our team to include specialized AI engineers and data scientists. Established our AI-first development methodology.",
      highlight: "Team of 8 AI specialists",
      icon: Users,
    },
    {
      year: "2023",
      title: "AI Specialization",
      description:
        "Focused entirely on AI, ML, and data science solutions. Launched our comprehensive suite of AI services.",
      highlight: "50+ AI models deployed",
      icon: Brain,
    },
    {
      year: "2024",
      title: "Market Leadership",
      description:
        "We're expanding our services and building tools to help even more businesses launch faster and more efficiently.",
      highlight: "Industry recognition",
      icon: Award,
    },
  ];

  // Live Stats
  const stats = [
    { label: "Days Building", value: 1247, suffix: "", icon: Calendar },
    { label: "AI Models Deployed", value: 89, suffix: "+", icon: Brain },
    { label: "Happy Clients", value: 156, suffix: "", icon: Heart },
    { label: "Coffee Cups", value: 2847, suffix: "", icon: Coffee },
  ];

  // Technologies we work with
  const technologies = [
    {
      category: "AI & Machine Learning",
      tools: [
        { name: "TensorFlow", icon: Brain },
        { name: "PyTorch", icon: Cpu },
        { name: "OpenAI GPT", icon: Bot },
        { name: "Hugging Face", icon: Heart },
      ],
    },
    {
      category: "Data Science",
      tools: [
        { name: "Python", icon: Code },
        { name: "R", icon: BarChart3 },
        { name: "Apache Spark", icon: Database },
        { name: "Tableau", icon: TrendingUp },
      ],
    },
    {
      category: "Development",
      tools: [
        { name: "React", icon: Monitor },
        { name: "Node.js", icon: Settings },
        { name: "TypeScript", icon: Code },
        { name: "Next.js", icon: Layers },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      tools: [
        { name: "AWS", icon: Cloud },
        { name: "Docker", icon: Layers },
        { name: "Kubernetes", icon: Settings },
        { name: "Terraform", icon: Building },
      ],
    },
  ];

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-advance timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMilestone((prev) => (prev + 1) % timeline.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Stats counter animation
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    if (statsInView) {
      setStatsVisible(true);
    }
  }, [statsInView]);

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
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-orange/20 rounded-full"
                animate={{
                  y: [-20, -100, -20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
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
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Brain className="w-4 h-4 mr-2" />
                </motion.div>
                About Sahasra
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-white mb-6"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Building the Future with
                <span className="block bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
                  AI & Innovation
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-neutral-text-gray max-w-3xl mx-auto mb-12"
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                We're a team of AI specialists, data scientists, and engineers
                who understand the business journey because we've lived it
                ourselves.
              </motion.p>

              {/* Live Stats */}
              <motion.div
                ref={statsRef}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      {React.createElement(stat.icon, {
                        className: "w-6 h-6 text-accent-orange mr-2",
                      })}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-neutral-white mb-1">
                      <Counter end={stat.value} />
                      {stat.suffix}
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

        {/* Company Story */}
        <section className="py-20 bg-gradient-to-b from-secondary-dark to-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                From Idea to AI Innovation
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                Sahasra was born from our own experiences as technology
                entrepreneurs. We experienced firsthand the challenges of
                growing businesses.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 rounded-2xl p-8 border border-primary-light/20">
                  <h3 className="text-2xl font-bold text-neutral-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-neutral-text-gray leading-relaxed mb-6">
                    Every solution we build is designed for growing businesses.
                    Every decision we make is guided by what founders truly
                    need: fast, reliable, and intelligent systems that scale.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-accent-orange/20 text-accent-orange">
                      AI-First Approach
                    </Badge>
                    <Badge className="bg-accent-orange/20 text-accent-orange">
                      Business Focused
                    </Badge>
                    <Badge className="bg-accent-orange/20 text-accent-orange">
                      Quality Driven
                    </Badge>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 rounded-2xl p-8 border border-primary-light/20">
                  <h3 className="text-2xl font-bold text-neutral-white mb-4">
                    What Sets Us Apart
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <div className="font-semibold text-neutral-white">
                          AI Expertise
                        </div>
                        <div className="text-neutral-text-gray text-sm">
                          Deep experience in ML, Gen AI, and data science
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <div className="font-semibold text-neutral-white">
                          Business Understanding
                        </div>
                        <div className="text-neutral-text-gray text-sm">
                          We think like entrepreneurs, not just developers
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <div className="font-semibold text-neutral-white">
                          Rapid Delivery
                        </div>
                        <div className="text-neutral-text-gray text-sm">
                          Modern tools and AI-assisted development for speed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-8">
                  {timeline.map((milestone, index) => (
                    <motion.div
                      key={index}
                      className={`relative flex items-start space-x-4 ${
                        currentMilestone === index
                          ? "scale-105"
                          : "hover:scale-102"
                      }`}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                          currentMilestone === index
                            ? "bg-accent-orange border-accent-orange text-white"
                            : "bg-primary-black border-accent-orange/30 text-accent-orange"
                        }`}
                      >
                        {React.createElement(milestone.icon, {
                          className: "w-6 h-6",
                        })}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-accent-orange font-bold text-lg">
                            {milestone.year}
                          </span>
                          <h3 className="text-neutral-white font-semibold">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-neutral-text-gray mb-2">
                          {milestone.description}
                        </p>
                        <Badge
                          variant="outline"
                          className="text-accent-orange border-accent-orange/50"
                        >
                          {milestone.highlight}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Meet the Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                AI Experts & Entrepreneurs
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                Our diverse team combines deep technical expertise with real
                business experience to deliver exceptional AI solutions.
              </p>
            </motion.div>

            {/* Team Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 bg-primary-black/50 rounded-lg p-1">
                {team.map((member, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTeamMember(index)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      activeTeamMember === index
                        ? "bg-accent-orange text-white"
                        : "text-neutral-text-gray hover:text-white"
                    }`}
                  >
                    {member.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Team Member */}
            <motion.div
              key={activeTeamMember}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Profile */}
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-accent-orange/20 to-accent-orange-light/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-16 h-16 text-accent-orange" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-white mb-1">
                        {team[activeTeamMember].name}
                      </h3>
                      <p className="text-accent-orange font-medium mb-3">
                        {team[activeTeamMember].role}
                      </p>
                      <div className="flex justify-center space-x-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-neutral-text-gray hover:text-accent-orange"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-neutral-text-gray hover:text-accent-orange"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-neutral-text-gray hover:text-accent-orange"
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2 space-y-6">
                      <p className="text-neutral-text-gray leading-relaxed">
                        {team[activeTeamMember].bio}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-neutral-white font-semibold mb-3">
                            Skills & Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {team[activeTeamMember].skills.map((skill, idx) => (
                              <Badge
                                key={idx}
                                className="bg-accent-orange/20 text-accent-orange"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-neutral-white font-semibold mb-3">
                            Background
                          </h4>
                          <p className="text-neutral-text-gray mb-2">
                            {team[activeTeamMember].background}
                          </p>
                          <p className="text-sm text-accent-orange">
                            {team[activeTeamMember].education}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-neutral-white font-semibold mb-3">
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {team[activeTeamMember].achievements.map(
                            (achievement, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <Star className="w-4 h-4 text-accent-orange" />
                                <span className="text-neutral-text-gray">
                                  {achievement}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-secondary-dark to-primary-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <Badge
                variant="outline"
                className="mb-4 text-accent-orange border-accent-orange"
              >
                Our Values
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                What Drives Us Forward
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                These core principles guide every decision we make and every
                solution we build for our clients.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() =>
                    setExpandedValue(expandedValue === index ? null : index)
                  }
                >
                  <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20 hover:border-accent-orange/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-accent-orange/20 to-accent-orange-light/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {React.createElement(value.icon, {
                            className: "w-6 h-6 text-accent-orange",
                          })}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-neutral-white mb-3">
                            {value.title}
                          </h3>
                          <p className="text-neutral-text-gray leading-relaxed mb-4">
                            {value.description}
                          </p>
                          <motion.div
                            initial={false}
                            animate={{
                              height: expandedValue === index ? "auto" : 0,
                              opacity: expandedValue === index ? 1 : 0,
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-neutral-text-gray text-sm leading-relaxed pt-2 border-t border-primary-light/20">
                              {value.details}
                            </p>
                          </motion.div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-3 text-accent-orange hover:text-accent-orange-light p-0"
                          >
                            {expandedValue === index
                              ? "Show Less"
                              : "Learn More"}
                            <ChevronDown
                              className={`w-4 h-4 ml-2 transition-transform ${
                                expandedValue === index ? "rotate-180" : ""
                              }`}
                            />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                Cutting-Edge Tools & Technologies
              </h2>
              <p className="text-xl text-neutral-text-gray max-w-2xl mx-auto">
                We use the latest and most powerful tools to build intelligent
                solutions that scale.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {technologies.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-primary-black/60 to-secondary-dark/60 border-primary-light/20 hover:border-accent-orange/30 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-white mb-4">
                        {category.category}
                      </h3>
                      <div className="space-y-3">
                        {category.tools.map((tool, toolIndex) => (
                          <motion.div
                            key={toolIndex}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-black/40 transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            {React.createElement(tool.icon, {
                              className: "w-5 h-5 text-accent-orange",
                            })}
                            <span className="text-neutral-white font-medium">
                              {tool.name}
                            </span>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent-orange to-accent-orange-light relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your AI project and create intelligent solutions
                that transform your business.
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
                  <Mail className="mr-2 w-5 h-5" />
                  Get in Touch
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

// Counter component for animated stats
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end]);

  return <span>{count.toLocaleString()}</span>;
};

export default About;
