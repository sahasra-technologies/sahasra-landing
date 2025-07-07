import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@Sahasra.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "123 Tech Street, Silicon Valley",
      description: "Come say hello at our office",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "9:00 AM - 6:00 PM EST",
      description: "Monday to Friday",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-6">
            Let's Start Building Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our
            team to discuss your project requirements and discover how we can
            help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-dark mb-6">
                  Send us a message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      placeholder="Enter your company name"
                      className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="border-gray-300 focus:border-accent-orange focus:ring-accent-orange resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent-orange hover:bg-accent-orange-light text-white border-none px-8 py-4 text-lg group"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-accent-orange to-accent-orange-light rounded-lg p-3 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary-dark mb-1">
                            {info.title}
                          </h4>
                          <p className="text-accent-orange font-medium mb-1">
                            {info.detail}
                          </p>
                          <p className="text-sm text-gray-600">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Schedule Call CTA */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary-dark to-secondary-dark">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-accent-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Schedule a Free Consultation
                </h3>
                <p className="text-neutral-text-gray mb-6 text-sm">
                  Book a 30-minute call to discuss your project requirements
                  with our experts.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-accent-orange hover:bg-accent-orange-light text-white border-none"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
