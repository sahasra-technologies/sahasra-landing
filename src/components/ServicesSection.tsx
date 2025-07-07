import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Brain,
  Database,
  Cloud,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and technologies for optimal performance and user experience.",
      features: [
        "React & Next.js",
        "Full-stack Development",
        "API Integration",
        "Performance Optimization",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.",
      features: [
        "React Native",
        "iOS & Android",
        "UI/UX Design",
        "App Store Deployment",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Advanced AI solutions powered by machine learning, deep learning, and neural networks to transform your business operations.",
      features: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing",
        "Computer Vision & Image Recognition",
        "Recommendation Systems",
        "Chatbots & Virtual Assistants",
        "Anomaly Detection & Fraud Prevention",
        "Generative AI & Content Creation",
        "Computer Vision",
        "Deep Learning",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Data Science",
      description:
        "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      features: [
        "Data Analysis",
        "Business Intelligence",
        "Data Visualization",
        "Statistical Modeling",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment strategies for maximum reliability and performance.",
      features: [
        "AWS & Azure",
        "DevOps",
        "Microservices",
        "Container Orchestration",
      ],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Complete digital transformation services to modernize your business processes and operations.",
      features: [
        "Process Automation",
        "Legacy Modernization",
        "Digital Strategy",
        "Change Management",
      ],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end technology services to help businesses leverage
            the power of modern digital solutions and stay ahead in the
            competitive market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-accent-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-accent-orange mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="group/btn text-accent-orange hover:text-accent-orange-light hover:bg-accent-orange/10 p-0 h-auto font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to start your next project?
          </p>
          <Button
            size="lg"
            className="bg-accent-orange hover:bg-accent-orange-light text-white border-none px-8 py-4 text-lg group"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
