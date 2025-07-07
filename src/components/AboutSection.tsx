import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Award,
  Target,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      label: "Happy Clients",
      value: "250+",
      color: "text-blue-500",
    },
    {
      icon: Award,
      label: "Projects Completed",
      value: "500+",
      color: "text-green-500",
    },
    {
      icon: TrendingUp,
      label: "Years Experience",
      value: "8+",
      color: "text-purple-500",
    },
    {
      icon: Shield,
      label: "Success Rate",
      value: "99%",
      color: "text-orange-500",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're committed to delivering solutions that drive real business value and measurable results.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions for our clients.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines and consistently deliver projects on time.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Our rigorous testing and quality assurance processes ensure reliable, robust solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            About TechLab
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Building the Future with Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to helping
            businesses transform and thrive in the digital landscape through
            innovative solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">
              Building the Future, One Solution at a Time
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between innovative
                technology and practical business solutions, TechLab has grown
                into a trusted partner for companies worldwide.
              </p>
              <p>
                Our expertise spans across web development, mobile applications,
                artificial intelligence, and data science. We don't just build
                software – we create digital experiences that transform how
                businesses operate and engage with their customers.
              </p>
              <p>
                With a team of experienced developers, designers, and
                strategists, we're committed to delivering excellence in every
                project we undertake.
              </p>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-accent-orange hover:bg-accent-orange-light text-white border-none px-8 py-4 text-lg group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <IconComponent
                      className={`w-12 h-12 ${stat.color} mx-auto mb-4`}
                    />
                    <div className="text-3xl font-bold text-primary-dark mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary-dark text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-orange to-accent-orange-light rounded-xl p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-primary-dark mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary-dark to-secondary-dark rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Work with Our Team?
          </h3>
          <p className="text-neutral-text-gray mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve
            your digital transformation goals.
          </p>
          <Button
            size="lg"
            className="bg-accent-orange hover:bg-accent-orange-light text-white border-none px-8 py-4 text-lg group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
