import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's Discuss Your
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              IT Requirements
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your IT operations? Get in touch with our experts today for a free consultation and
            discover how we can help streamline your technology needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-slate-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-blue-600" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manpower">IT Manpower Outsourcing</SelectItem>
                      <SelectItem value="support">Technical Support Services</SelectItem>
                      <SelectItem value="network">Network & Infrastructure</SelectItem>
                      <SelectItem value="cloud">Cloud & DevOps</SelectItem>
                      <SelectItem value="consulting">IT Consulting</SelectItem>
                      <SelectItem value="amc">Annual Maintenance Contract</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="Tell us about your requirements..." className="min-h-[120px]" />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We're here to help you with all your IT needs. Reach out to us through any of the following channels,
                  and our team will respond promptly.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-slate-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-white hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
                        <p className="text-slate-600 mb-1">+91 88025 16095</p>
                        <p className="text-sm text-slate-500">Available 24/7 for emergency support</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-indigo-50 to-white hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
                        <p className="text-slate-600 mb-1">infarisetechnology@gmail.com</p>
                        <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-white hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Visit Our Office</h3>
                        <p className="text-slate-600 mb-1">Plot No. 463, Badarpur</p>
                        <p className="text-slate-600 mb-1">New Delhi – 110044</p>
                        <p className="text-sm text-slate-500">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow bg-gradient-to-br from-cyan-50 to-white hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Business Hours</h3>
                        <p className="text-slate-600 mb-1">Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p className="text-slate-600 mb-1">Saturday: 9:00 AM - 5:00 PM</p>
                        <p className="text-sm text-slate-500">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6 text-blue-100">
                  For urgent technical issues or emergency support, call us directly. Our support team is available 24/7
                  to help resolve critical problems.
                </p>
                <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 88025 16095
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2">
                Expert Support Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Connect with Our Technology Experts</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team of certified professionals is ready to understand your unique requirements and provide tailored
                solutions that drive your business forward. From initial consultation to ongoing support, we're here to
                ensure your success.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                  <span className="text-slate-700">Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                  <span className="text-slate-700">Customized solution recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                  <span className="text-slate-700">Ongoing support and maintenance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/business-meeting.jpg"
                alt="Expert Support Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">
                  How quickly can you respond to support requests?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our response times vary by service level: Basic plans receive response within 4-8 hours, Standard
                  plans within 2-4 hours, and Premium plans within 2 hours for critical issues. Emergency support is
                  available 24/7 for all plans.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Do you provide on-site support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, we provide on-site support for Standard and Premium AMC plans. For Basic plans, on-site support
                  is available at additional charges. We cover the entire Delhi NCR region and can arrange support in
                  other locations as needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">
                  Can you customize AMC plans for specific requirements?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We understand that every business has unique needs. We can customize our AMC plans to include specific
                  services, response times, and coverage areas based on your requirements and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">What industries do you serve?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We serve a wide range of industries including SMEs, corporate offices, educational institutions,
                  healthcare facilities, retail stores, manufacturing units, and more. Our team has experience across
                  various sectors and can adapt to industry-specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
