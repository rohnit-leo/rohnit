"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Headphones, Network, Cloud, Lightbulb, Shield, CheckCircle, Star, Clock, Award, Phone, Mail, MapPin, Zap, TrendingUp, Globe, ChevronLeft, ChevronRight, HeadphonesIcon } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

// Updated HeroSlideshow component with higher quality images
function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000) // 3 seconds

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Container */}
      <div className="relative h-full w-full">
        {/* Slide 1 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/connectivity-services.jpg"
              alt="IT Solutions Professional"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-slate-900/45"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 md:px-6 py-2 text-sm font-medium shadow-lg">
                      <Zap className="w-4 h-4 mr-2" />
                      Trusted Since 2020
                    </Badge>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      Welcome to Infarise Technology
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed">
                      Reliable IT Manpower & Technology Solutions Since 2020
                    </p>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                      Bridging the gap between evolving technology needs and business requirements with top-notch IT
                      staffing, technical support, and consulting services.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-6 md:px-8 py-3 md:py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-base md:text-lg"
                    >
                      <Link href="/services">
                        Explore Services
                        <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base md:text-lg"
                    >
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image 
              src="/images/data-analytics.jpg" 
              alt="Advanced Technology Solutions" 
              fill 
              className="object-cover object-center" 
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 via-purple-900/65 to-blue-900/45"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 md:px-6 py-2 text-sm font-medium shadow-lg">
                      <Globe className="w-4 h-4 mr-2" />
                      Innovation Driven
                    </Badge>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      Future-Ready
                      <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        IT Solutions
                      </span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-purple-100 leading-relaxed">
                      Empowering businesses with cutting-edge technology and expert manpower
                    </p>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                      From AI-powered automation to cloud infrastructure, we deliver innovative solutions that drive
                      digital transformation and business growth.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white px-6 md:px-8 py-3 md:py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-base md:text-lg"
                    >
                      <Link href="/about">
                        Learn More
                        <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base md:text-lg"
                    >
                      <Link href="/amc">View AMC Plans</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/workspace-collaboration.jpg"
              alt="24/7 Support & Maintenance"
              fill
              className="object-cover object-center"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/85 via-teal-900/65 to-cyan-900/45"></div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 md:px-6 py-2 text-sm font-medium shadow-lg">
                      <Shield className="w-4 h-4 mr-2" />
                      Always Available
                    </Badge>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      24/7 Support &
                      <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        Maintenance
                      </span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 leading-relaxed">
                      Round-the-clock technical support and proactive maintenance services
                    </p>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                      Our dedicated support team ensures your IT infrastructure runs smoothly with minimal downtime,
                      comprehensive AMC plans, and emergency response capabilities.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-6 md:px-8 py-3 md:py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-base md:text-lg"
                    >
                      <Link href="/amc">
                        View AMC Plans
                        <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base md:text-lg"
                    >
                      <Link href="/contact">
                        <HeadphonesIcon className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                        Get Support
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group z-10"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group z-10"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section with Slideshow */}
      <HeroSlideshow />

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs and drive operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-blue-300 bg-gradient-to-br from-white to-blue-50/30 hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-slate-900 group-hover:text-blue-700 transition-colors">
                  IT Manpower Outsourcing
                </CardTitle>
                <CardDescription>
                  Qualified IT professionals for short-term or long-term staffing needs across all domains and skill
                  levels.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-indigo-300 bg-gradient-to-br from-white to-indigo-50/30 hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Headphones className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-slate-900 group-hover:text-indigo-700 transition-colors">
                  Technical Support Services
                </CardTitle>
                <CardDescription>
                  L1, L2, and L3 support via helpdesk, remote assistance, or on-site troubleshooting for uninterrupted
                  operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-purple-300 bg-gradient-to-br from-white to-purple-50/30 hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Network className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-slate-900 group-hover:text-purple-700 transition-colors">
                  Network & Infrastructure
                </CardTitle>
                <CardDescription>
                  End-to-end server/network setup, monitoring, and infrastructure optimization for secure business
                  environments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-cyan-300 bg-gradient-to-br from-white to-cyan-50/30 hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Cloud className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-slate-900 group-hover:text-cyan-700 transition-colors">
                  Cloud & DevOps Resources
                </CardTitle>
                <CardDescription>
                  Cloud engineers and DevOps experts proficient in AWS, Azure, GCP, containers, CI/CD, and automation
                  tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-amber-300 bg-gradient-to-br from-white to-amber-50/30 hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Lightbulb className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-slate-900 group-hover:text-amber-700 transition-colors">
                  IT Consulting
                </CardTitle>
                <CardDescription>
                  Strategic consulting to implement custom tech solutions aligned with your goals, resources, and
                  workflows.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-emerald-300 bg-gradient-to-br from-white to-emerald-50/30 hover:scale-105">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Annual Maintenance Contract
                </CardTitle>
                <CardDescription>
                  Full-service year-round IT maintenance with tailored monthly, quarterly, or yearly plans for all
                  business types.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Infarise?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver reliable, scalable, and quality-driven IT services that support your growth and operational
              efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Certified Professionals</h3>
                <p className="text-slate-600">Experienced and certified IT professionals with proven expertise</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Fast Response Times</h3>
                <p className="text-slate-600">Quick response and resolution times to minimize downtime</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Custom AMC Plans</h3>
                <p className="text-slate-600">Tailored maintenance plans for different business types and needs</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Flexible Contracts</h3>
                <p className="text-slate-600">Flexible contract terms that adapt to your business requirements</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Complete Transparency</h3>
                <p className="text-slate-600">Full service reporting and transparency in all our operations</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Cost-Effective Solutions</h3>
                <p className="text-slate-600">Scalable and cost-effective services that grow with your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2">
                Advanced Technology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Cutting-Edge Solutions for Modern Businesses
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We leverage the latest technologies including AI, machine learning, and advanced analytics to deliver
                innovative solutions that drive business transformation and competitive advantage.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">AI-Powered Automation Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Advanced Data Analytics & Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Cloud-Native Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Cybersecurity Excellence</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/ai-technology.jpg"
                alt="Advanced AI Technology Solutions"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your IT Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts today and discover how we can help streamline your technology needs and drive
            business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-indigo-700 hover:bg-blue-50 px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-4 bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Link href="/amc">View AMC Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Call Us</h3>
              <p className="text-slate-600 text-lg font-medium">+91 88025 16095</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                Email Us
              </h3>
              <p className="text-slate-600 text-lg font-medium">infarisetechnology@gmail.com</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                Visit Us
              </h3>
              <p className="text-slate-600 text-lg font-medium">Plot No. 463, Badarpur, New Delhi – 110044</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
