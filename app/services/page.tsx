import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Headphones,
  Network,
  Cloud,
  Lightbulb,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive IT Solutions
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              for Your Business
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From IT manpower outsourcing to cloud solutions, we provide end-to-end technology services that drive
            business growth and operational efficiency.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* IT Manpower Outsourcing */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">IT Manpower Outsourcing</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Access qualified IT professionals for short-term or long-term staffing needs across all domains and
                skill levels. Our extensive network of certified professionals ensures you get the right talent for your
                specific requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Software Developers & Engineers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">System Administrators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Database Specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Project Managers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/manpower-network.jpg"
                alt="IT Manpower Solutions"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Technical Support Services */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-first">
              <Image
                src="/images/tech-security.jpg"
                alt="Technical Support Services"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Technical Support Services</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Comprehensive L1, L2, and L3 support through helpdesk, remote assistance, or on-site troubleshooting.
                Our support ensures uninterrupted operations and quick resolution of technical issues.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="text-slate-700">24/7 Helpdesk Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="text-slate-700">Remote Troubleshooting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="text-slate-700">On-site Technical Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="text-slate-700">Incident Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* Network & Infrastructure Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-700 rounded-lg flex items-center justify-center">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Network & Infrastructure Management</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                End-to-end server and network setup, monitoring, and infrastructure optimization for seamless and secure
                business environments. We ensure your IT infrastructure is robust, scalable, and secure.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-slate-700">Network Design & Implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-slate-700">Server Setup & Configuration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-slate-700">Infrastructure Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-slate-700">Security Implementation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/data-analytics.jpg"
                alt="Network Infrastructure"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Cloud & DevOps Resource Placement */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-first">
              <Image
                src="/images/workspace-collaboration.jpg"
                alt="Cloud & DevOps Solutions"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Cloud & DevOps Resource Placement</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Access cloud engineers and DevOps experts proficient in AWS, Azure, GCP, containers, CI/CD, and
                automation tools. Accelerate your digital transformation with our specialized talent.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600" />
                  <span className="text-slate-700">AWS/Azure/GCP Specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600" />
                  <span className="text-slate-700">DevOps Engineers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600" />
                  <span className="text-slate-700">Container & Kubernetes Experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-cyan-600" />
                  <span className="text-slate-700">CI/CD Pipeline Specialists</span>
                </div>
              </div>
            </div>
          </div>

          {/* IT Consulting & Customized Solutions */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">IT Consulting & Customized Solutions</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Strategic consulting for businesses to implement custom technology solutions aligned with your goals,
                resources, and workflows. We help you make informed technology decisions that drive business value.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-slate-700">Technology Strategy Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-slate-700">Custom Software Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-slate-700">Digital Transformation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-slate-700">Process Optimization</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/quality-assurance.jpg"
                alt="IT Consulting Services"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Global Workforce Management */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-first">
              <Image
                src="/images/global-workforce.jpg"
                alt="Global Workforce Management"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-2xl"></div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Annual Maintenance Contract</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Comprehensive maintenance solutions that ensure your IT infrastructure runs smoothly year-round. Our AMC
                services provide proactive monitoring, regular updates, and immediate support when you need it most.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">Proactive System Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">Regular Maintenance & Updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">Priority Support Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">Flexible Service Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Our Services Stand Out</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that truly make a
              difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">Fast Deployment</CardTitle>
                <CardDescription>
                  Quick turnaround times to get your projects up and running without delays
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">Certified Experts</CardTitle>
                <CardDescription>
                  All our professionals are certified and have proven track records in their domains
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">Quality Assurance</CardTitle>
                <CardDescription>
                  Rigorous quality checks and continuous monitoring ensure top-notch service delivery
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-emerald-50/30">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">Secure Solutions</CardTitle>
                <CardDescription>
                  Security-first approach in all our implementations and service delivery
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your IT requirements and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 bg-transparent"
            >
              <Link href="/amc">
                View AMC Plans <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
