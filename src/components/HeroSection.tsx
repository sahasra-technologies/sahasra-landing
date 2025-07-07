import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code, Brain, Smartphone } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-primary-black overflow-hidden"
    >
      {/* Background Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-black via-primary-black/90 to-primary-dark/80 z-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-orange/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-orange/5 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex items-center min-h-screen">
          <div className="w-full">
            <div className="text-center lg:text-left lg:max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-sm font-medium mb-8 animate-fade-in">
                <Brain className="w-4 h-4 mr-2" />
                AI, Gen AI & Data Science Experts
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-white mb-6 leading-tight animate-fade-in delay-200">
                Transform Your Business
                <span className="block text-accent-orange">
                  With AI & Data Science
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-neutral-text-gray mb-8 max-w-2xl animate-fade-in delay-400">
                We specialize in cutting-edge AI, generative AI, machine
                learning, and data science solutions that create content, unlock
                insights, automate processes, and drive intelligent
                decision-making for modern businesses.
              </p>

              {/* Service Icons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 animate-fade-in delay-500">
                <div className="flex items-center gap-2 text-neutral-white">
                  <Code className="w-5 h-5 text-accent-orange" />
                  <span className="text-sm font-medium">Web Development</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-white">
                  <Smartphone className="w-5 h-5 text-accent-orange" />
                  <span className="text-sm font-medium">Mobile Apps</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-white">
                  <Brain className="w-5 h-5 text-accent-orange" />
                  <span className="text-sm font-medium">Gen AI</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-700">
                <Button
                  size="lg"
                  className="bg-accent-orange hover:bg-accent-orange-light text-white border-none px-8 py-4 text-lg group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white px-8 py-4 text-lg group"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Decorative Elements */}
          <div className="hidden lg:block w-full">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute top-0 right-0 w-64 h-40 bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 backdrop-blur-sm border border-accent-orange/30 rounded-xl p-6 transform rotate-3 animate-fade-in delay-1000">
                <Code className="w-8 h-8 text-accent-orange mb-3" />
                <h3 className="text-neutral-white font-semibold mb-2">
                  Web Development
                </h3>
                <p className="text-neutral-text-gray text-sm">
                  Modern, scalable applications
                </p>
              </div>

              <div className="absolute top-32 right-16 w-64 h-40 bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 backdrop-blur-sm border border-accent-orange/30 rounded-xl p-6 transform -rotate-2 animate-fade-in delay-1200">
                <Brain className="w-8 h-8 text-accent-orange mb-3" />
                <h3 className="text-neutral-white font-semibold mb-2">
                  ML & Analytics
                </h3>
                <p className="text-neutral-text-gray text-sm">
                  Intelligent automation
                </p>
              </div>

              <div className="absolute top-64 right-8 w-64 h-40 bg-gradient-to-br from-violet-500/20 to-purple-500/10 backdrop-blur-sm border border-violet-500/30 rounded-xl p-6 transform rotate-1 animate-fade-in delay-1400">
                <Brain className="w-8 h-8 text-violet-400 mb-3" />
                <h3 className="text-neutral-white font-semibold mb-2">
                  Generative AI
                </h3>
                <p className="text-neutral-text-gray text-sm">
                  Content & code generation
                </p>
              </div>

              <div className="absolute top-96 right-16 w-64 h-40 bg-gradient-to-br from-accent-orange/20 to-accent-orange/10 backdrop-blur-sm border border-accent-orange/30 rounded-xl p-6 transform -rotate-1 animate-fade-in delay-1600">
                <Smartphone className="w-8 h-8 text-accent-orange mb-3" />
                <h3 className="text-neutral-white font-semibold mb-2">
                  Mobile Apps
                </h3>
                <p className="text-neutral-text-gray text-sm">
                  Cross-platform solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
