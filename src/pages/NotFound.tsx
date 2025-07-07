import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary-black via-primary-dark to-secondary-dark min-h-[80vh] flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* 404 Number */}
            <div className="text-8xl md:text-9xl font-bold text-accent-orange mb-8 opacity-50">
              404
            </div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-white mb-6">
              Page Not Found
            </h1>

            <p className="text-lg md:text-xl text-neutral-text-gray mb-12 max-w-2xl mx-auto">
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent-orange hover:bg-accent-orange-light text-white border-none px-8 py-4 text-lg group"
              >
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white px-8 py-4 text-lg group"
              >
                <Link to="/services">
                  <Search className="w-5 h-5 mr-2" />
                  View Services
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mt-16">
              <p className="text-neutral-text-gray mb-6">
                Or try one of these popular pages:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/about"
                  className="text-accent-orange hover:text-accent-orange-light transition-colors duration-200"
                >
                  About Us
                </Link>
                <span className="text-neutral-text-gray">•</span>
                <Link
                  to="/services"
                  className="text-accent-orange hover:text-accent-orange-light transition-colors duration-200"
                >
                  Our Services
                </Link>
                <span className="text-neutral-text-gray">•</span>
                <Link
                  to="/contact"
                  className="text-accent-orange hover:text-accent-orange-light transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
