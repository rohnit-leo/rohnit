import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Users, Award, Clock, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              About Infarise Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Bridging Technology & Business
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Since 2020
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Founded in 2020, Infarise Technology Pvt. Ltd. is a dynamic IT services and manpower solutions provider
              based in New Delhi. We bridge the gap between evolving technology needs and business requirements by
              delivering top-notch IT staffing, technical support, and consulting services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/business-meeting.jpg"
                alt="Infarise Technology Team"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-2xl"></div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-white to-blue-50/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    4+
                  </div>
                  <div className="text-slate-600">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-white to-indigo-50/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    100+
                  </div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-white to-purple-50/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-white to-cyan-50/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-slate-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600 text-center leading-relaxed">
                  To deliver reliable, scalable, and quality-driven IT services that support our clients' growth and
                  operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-indigo-50/30">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600 text-center leading-relaxed">
                  To be recognized as a leading IT manpower and technology solutions provider, known for integrity,
                  innovation, and impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Excellence Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2">
                Team Excellence
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Expert Team Delivering Quality Solutions
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our diverse team of certified professionals brings together years of experience in cutting-edge
                technologies, ensuring we deliver innovative solutions that meet the evolving needs of modern
                businesses.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                  <span className="text-slate-700">Certified IT Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                  <span className="text-slate-700">Continuous Learning & Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                  <span className="text-slate-700">Industry Best Practices</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/team-collaboration.jpg"
                alt="Team Collaboration"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-white to-blue-50/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600">
                We maintain the highest standards of honesty and transparency in all our business dealings.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-white to-indigo-50/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600">
                We embrace cutting-edge technologies and innovative solutions to stay ahead of the curve.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-white to-purple-50/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Impact</h3>
              <p className="text-slate-600">
                We focus on creating meaningful impact that drives real business value for our clients.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-white to-cyan-50/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Reliability</h3>
              <p className="text-slate-600">
                We deliver consistent, dependable services that our clients can count on every time.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-white to-emerald-50/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">
                We strive for excellence in everything we do, from service delivery to client relationships.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-white to-amber-50/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Transparency</h3>
              <p className="text-slate-600">
                We believe in open communication and complete transparency in all our processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Since our founding in 2020, Infarise Technology has grown from a small startup to a trusted partner for
              businesses across New Delhi and beyond. Our journey has been marked by continuous learning, adaptation,
              and an unwavering commitment to our clients' success.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">2020 - Foundation</h3>
                <p className="text-slate-600">
                  Infarise Technology was founded with a vision to bridge the gap between technology and business needs
                  in the rapidly evolving IT landscape.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-4 h-4 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">2021 - Growth</h3>
                <p className="text-slate-600">
                  Expanded our service offerings to include comprehensive IT manpower solutions and established
                  partnerships with leading technology providers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">2022 - Innovation</h3>
                <p className="text-slate-600">
                  Introduced cloud and DevOps services, helping businesses modernize their infrastructure and embrace
                  digital transformation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">2023 - Excellence</h3>
                <p className="text-slate-600">
                  Achieved significant milestones in client satisfaction and service delivery, establishing ourselves as
                  a trusted IT partner.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-4 h-4 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">2024 - Future Ready</h3>
                <p className="text-slate-600">
                  Continuing to evolve and adapt to emerging technologies while maintaining our commitment to quality
                  and client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
