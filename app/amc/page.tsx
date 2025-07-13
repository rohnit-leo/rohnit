import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Building,
  GraduationCap,
  ShoppingCart,
  Factory,
  Users,
  Clock,
  Shield,
  Award,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AMCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Annual Maintenance Contract
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Complete IT Maintenance
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Full-service year-round IT maintenance for businesses of all sizes with tailored monthly, quarterly, or
            yearly plans designed to keep your operations running smoothly.
          </p>
        </div>
      </section>

      {/* AMC Overview */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Our AMC Services?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our Annual Maintenance Contract services provide comprehensive IT support that ensures your business
                technology runs efficiently year-round. From preventive maintenance to emergency support, we've got you
                covered.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">24/7 technical support and monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Preventive maintenance and regular health checks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Priority response for critical issues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Regular software updates and security patches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">Detailed reporting and documentation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/workspace-collaboration.jpg"
                alt="AMC Services Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl"></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">AMC Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-200" />
                <span>Reduced downtime and faster issue resolution</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-200" />
                <span>Enhanced security and data protection</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-200" />
                <span>Cost-effective maintenance solution</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-200" />
                <span>Dedicated support team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AMC services are designed to meet the unique needs of various business types and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Small & Medium Enterprises</CardTitle>
                <CardDescription className="text-slate-600">
                  Comprehensive IT support for growing businesses that need reliable technology infrastructure without
                  the overhead of an in-house IT team.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Corporate Offices</CardTitle>
                <CardDescription className="text-slate-600">
                  Professional IT maintenance services for corporate environments requiring high availability and
                  seamless operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 bg-gradient-to-br from-white to-emerald-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Educational Institutions</CardTitle>
                <CardDescription className="text-slate-600">
                  Specialized IT support for schools, colleges, and universities with focus on educational technology
                  and student systems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 bg-gradient-to-br from-white to-amber-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Retail Stores</CardTitle>
                <CardDescription className="text-slate-600">
                  Point-of-sale systems, inventory management, and customer-facing technology support for retail
                  businesses.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 bg-gradient-to-br from-white to-red-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Manufacturing Units</CardTitle>
                <CardDescription className="text-slate-600">
                  Industrial IT systems, automation support, and manufacturing technology maintenance for production
                  facilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-300 bg-gradient-to-br from-white to-cyan-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Healthcare Facilities</CardTitle>
                <CardDescription className="text-slate-600">
                  Critical IT support for hospitals, clinics, and healthcare providers with focus on uptime and data
                  security.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* AMC Plans */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Flexible AMC Plans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our flexible maintenance plans designed to fit your budget and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-900 mb-2">Basic Plan</CardTitle>
                <div className="text-3xl font-bold text-blue-700 mb-2">Monthly</div>
                <CardDescription>Perfect for small businesses and startups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Business hours support (9 AM - 6 PM)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Remote troubleshooting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Monthly system health check</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Software updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Email support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-300 shadow-xl relative bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 shadow-md">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-900 mb-2">Standard Plan</CardTitle>
                <div className="text-3xl font-bold text-blue-700 mb-2">Quarterly</div>
                <CardDescription>Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Extended support (8 AM - 8 PM)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Remote & on-site support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Bi-weekly system monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Priority issue resolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Phone & email support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Quarterly performance reports</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-900 mb-2">Premium Plan</CardTitle>
                <div className="text-3xl font-bold text-blue-700 mb-2">Yearly</div>
                <CardDescription>Comprehensive support for enterprises</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">24/7 support coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Dedicated account manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Proactive monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Emergency response (2-hour SLA)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">All communication channels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Monthly detailed reports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Free consultation sessions</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              All plans include regular software updates, security patches, and detailed service reporting
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Discuss Custom Plan
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Inclusions */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in Our AMC</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive coverage for all your IT maintenance needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:scale-105">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Hardware Maintenance</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Desktop and laptop servicing</li>
                <li>• Server maintenance and monitoring</li>
                <li>• Network equipment support</li>
                <li>• Printer and peripheral maintenance</li>
                <li>• Hardware replacement coordination</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:scale-105">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Software Support</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Operating system updates</li>
                <li>• Application software maintenance</li>
                <li>• Antivirus and security updates</li>
                <li>• License management</li>
                <li>• Software installation and configuration</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:scale-105">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Network Services</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Network monitoring and optimization</li>
                <li>• Firewall configuration and updates</li>
                <li>• Wi-Fi setup and troubleshooting</li>
                <li>• VPN configuration and support</li>
                <li>• Internet connectivity issues</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:scale-105">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Security Services</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Security patch management</li>
                <li>• Malware removal and prevention</li>
                <li>• Data backup and recovery</li>
                <li>• Security audit and assessment</li>
                <li>• Incident response support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:scale-105">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">User Support</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Help desk support</li>
                <li>• User training and guidance</li>
                <li>• Password reset assistance</li>
                <li>• Email and communication support</li>
                <li>• Remote assistance sessions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:scale-105">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Reporting & Documentation</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Monthly service reports</li>
                <li>• System performance analytics</li>
                <li>• Incident tracking and resolution</li>
                <li>• Maintenance schedules</li>
                <li>• Compliance documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Secure Your IT Infrastructure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your AMC requirements and get a customized maintenance plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3">
              <Link href="/contact">Get AMC Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 bg-transparent"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
