import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  TrendingUp,
  Award,
  Coffee,
  Laptop,
  Shield,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Join Our Team
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Build Your Career with
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Infarise Technology
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Join a dynamic team of IT professionals and be part of our mission to bridge technology gaps and drive
            business transformation. We offer exciting opportunities for growth and innovation.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Infarise as Your Career?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in nurturing talent and providing an environment where innovation thrives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Growth Opportunities</CardTitle>
                <CardDescription>
                  Continuous learning and development programs to advance your career in the rapidly evolving IT
                  industry.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Collaborative Culture</CardTitle>
                <CardDescription>
                  Work with a diverse team of passionate professionals in an inclusive and supportive environment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Recognition & Rewards</CardTitle>
                <CardDescription>
                  Performance-based incentives, recognition programs, and competitive compensation packages.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-emerald-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Work-Life Balance</CardTitle>
                <CardDescription>
                  Flexible working hours, remote work options, and comprehensive health benefits for you and your
                  family.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-cyan-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Latest Technology</CardTitle>
                <CardDescription>
                  Work with cutting-edge technologies and tools while contributing to innovative projects and solutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-amber-50/30">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Learning & Development</CardTitle>
                <CardDescription>
                  Access to training programs, certifications, conferences, and skill development opportunities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Current Job Openings</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and join our growing team of IT professionals
            </p>
          </div>

          <div className="space-y-6">
            {/* Software Developer */}
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Laptop className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-900">Senior Software Developer</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>New Delhi</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Full-time</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>3-5 years experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    Apply Now
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  We're looking for an experienced software developer to join our development team and work on
                  innovative projects using modern technologies like React, Node.js, and cloud platforms.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-700">Proficiency in JavaScript, React, Node.js</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-700">Experience with cloud platforms (AWS/Azure)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-700">Strong problem-solving and communication skills</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DevOps Engineer */}
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-900">DevOps Engineer</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>New Delhi</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Full-time</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>2-4 years experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                    Apply Now
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Join our infrastructure team to design, implement, and maintain CI/CD pipelines, containerization, and
                  cloud infrastructure for our clients' projects.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-slate-700">Experience with Docker, Kubernetes, Jenkins</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-slate-700">Knowledge of AWS/Azure cloud services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-slate-700">Scripting skills in Python/Bash</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IT Support Specialist */}
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-900">IT Support Specialist</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>New Delhi</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Full-time</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>1-3 years experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Apply Now
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Provide technical support to our clients, troubleshoot hardware/software issues, and ensure smooth IT
                  operations across various business environments.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-slate-700">Strong troubleshooting and problem-solving skills</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-slate-700">Knowledge of Windows/Linux systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-slate-700">Excellent communication and customer service skills</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Network Administrator */}
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-900">Network Administrator</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>New Delhi</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>Full-time</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-4 w-4" />
                          <span>2-5 years experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                    Apply Now
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Manage and maintain network infrastructure, implement security protocols, and ensure optimal network
                  performance for our clients' business operations.
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-slate-700">Experience with Cisco, Juniper networking equipment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-slate-700">Knowledge of network security and firewalls</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-slate-700">Relevant certifications (CCNA, CCNP preferred)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Competitive Salary</h3>
              <p className="text-slate-600 text-sm">Market-competitive compensation with performance-based bonuses</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Health Insurance</h3>
              <p className="text-slate-600 text-sm">Comprehensive health coverage for you and your family</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Hours</h3>
              <p className="text-slate-600 text-sm">Flexible working hours and remote work options</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Learning Budget</h3>
              <p className="text-slate-600 text-sm">Annual budget for courses, certifications, and conferences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2">
                Company Culture
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Culture of Innovation and Growth</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Infarise Technology, we foster an environment where creativity meets technology. Our team-first
                approach ensures everyone has the opportunity to contribute, learn, and grow together.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Open communication and collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Innovation-driven work environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Continuous learning and development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Work-life balance and employee wellbeing</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Team Collaboration at Infarise"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Application Process</h2>
            <p className="text-xl text-slate-600">
              Simple and transparent hiring process designed to find the best fit
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Submit Application</h3>
                <p className="text-slate-600">
                  Send your resume and cover letter to our HR team. Make sure to highlight relevant experience and
                  skills for the position you're applying for.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Initial Screening</h3>
                <p className="text-slate-600">
                  Our HR team will review your application and conduct an initial phone/video screening to discuss your
                  background and interest in the role.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Technical Interview</h3>
                <p className="text-slate-600">
                  Technical assessment and interview with our team leads to evaluate your skills and problem-solving
                  abilities relevant to the position.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Final Interview</h3>
                <p className="text-slate-600">
                  Meet with senior management to discuss your career goals, cultural fit, and how you can contribute to
                  our team's success.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Offer & Onboarding</h3>
                <p className="text-slate-600">
                  Receive your offer letter and join our comprehensive onboarding program to get you started on your
                  journey with Infarise Technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the next step in your career and become part of our innovative team. We're excited to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="mailto:infarisetechnology@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Your Resume
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact HR Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
