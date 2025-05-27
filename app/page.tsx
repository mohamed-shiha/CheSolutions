import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Factory,
  FileText,
  Smartphone,
  Cloud,
  BarChart3,
  Shield,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Factory className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">CheSolutions</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
              Solutions
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Digital Transformation Experts
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Factory to
            <span className="text-blue-600 block">Paperless Operations</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide cutting-edge systems and solutions to help manufacturing facilities eliminate paper-based
            processes, increase efficiency, and embrace digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#contact">
                Start Your Digital Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#solutions">View Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to digitize your manufacturing processes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Digital Documentation</CardTitle>
                <CardDescription>
                  Convert paper-based documentation to digital formats with automated workflows
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Mobile Solutions</CardTitle>
                <CardDescription>
                  Access critical information and processes from any device, anywhere on the factory floor
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Cloud Integration</CardTitle>
                <CardDescription>
                  Secure cloud-based systems for real-time data access and collaboration
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Analytics & Reporting</CardTitle>
                <CardDescription>
                  Real-time insights and automated reporting to drive data-driven decisions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Compliance Management</CardTitle>
                <CardDescription>
                  Ensure regulatory compliance with automated tracking and documentation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Process Automation</CardTitle>
                <CardDescription>
                  Streamline operations with intelligent automation and workflow optimization
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Paperless Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored systems designed for modern manufacturing environments
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Go Paperless?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduce Costs</h4>
                    <p className="text-gray-600">
                      Eliminate paper, printing, and storage costs while reducing administrative overhead
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Increase Efficiency</h4>
                    <p className="text-gray-600">
                      Streamline processes with instant access to information and automated workflows
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Improve Accuracy</h4>
                    <p className="text-gray-600">Reduce human error with digital validation and automated data entry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Environmental Impact</h4>
                    <p className="text-gray-600">Reduce your carbon footprint and support sustainability initiatives</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">85%</h4>
                <p className="text-gray-600">Efficiency Increase</p>
              </Card>
              <Card className="text-center p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">50+</h4>
                <p className="text-gray-600">Factories Transformed</p>
              </Card>
              <Card className="text-center p-6">
                <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">90%</h4>
                <p className="text-gray-600">Paper Reduction</p>
              </Card>
              <Card className="text-center p-6">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">100%</h4>
                <p className="text-gray-600">Compliance Rate</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About CheSolutions</h2>
            <p className="text-xl text-gray-600 mb-8">
              We are Ireland's leading provider of paperless factory solutions, specializing in digital transformation
              for manufacturing facilities. Our team of experts combines deep industry knowledge with cutting-edge
              technology to deliver solutions that drive real results.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                <p className="text-gray-600">Deep understanding of manufacturing processes and challenges</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Solutions</h3>
                <p className="text-gray-600">Battle-tested systems that deliver measurable results</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">Ongoing support and training to ensure success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Ready to Go Paperless?</h2>
              <p className="text-xl text-gray-300">
                Contact us today to discuss how we can transform your factory operations
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 rounded-full p-3">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-300">info@chesolutions.ie</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 rounded-full p-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-gray-300">+353 (0) 1 234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-300">Dublin, Ireland</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">Why Choose Us?</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Tailored solutions for your needs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Ongoing support and training</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Proven track record in Ireland</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Factory className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">CheSolutions</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 CheSolutions. All rights reserved. | Transforming Irish Manufacturing
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
