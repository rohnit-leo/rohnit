import Link from "next/link"
import { Phone, Mail, MapPin, ExternalLink, Zap, Globe, Shield, Instagram, Youtube } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Infarise Technology"
                width={160}
                height={54}
                className="h-11 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Bridging the gap between evolving technology needs and business requirements since 2020.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm group-hover:text-blue-400 transition-colors">+91 88025 16095</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm group-hover:text-indigo-400 transition-colors">
                  infarisetechnology@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg flex items-center">
              <Zap className="w-5 h-5 mr-2 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/amc"
                  className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  AMC Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg flex items-center">
              <Globe className="w-5 h-5 mr-2 text-indigo-400" />
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="text-slate-400 hover:text-blue-400 transition-colors cursor-default">
                IT Manpower Outsourcing
              </li>
              <li className="text-slate-400 hover:text-indigo-400 transition-colors cursor-default">
                Technical Support
              </li>
              <li className="text-slate-400 hover:text-purple-400 transition-colors cursor-default">
                Network & Infrastructure
              </li>
              <li className="text-slate-400 hover:text-cyan-400 transition-colors cursor-default">Cloud & DevOps</li>
              <li className="text-slate-400 hover:text-emerald-400 transition-colors cursor-default">IT Consulting</li>
              <li className="text-slate-400 hover:text-amber-400 transition-colors cursor-default">
                Annual Maintenance
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg flex items-center">
              <Shield className="w-5 h-5 mr-2 text-purple-400" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-400 text-sm group-hover:text-purple-400 transition-colors">
                  Plot No. 463, Badarpur
                  <br />
                  New Delhi – 110044
                </span>
              </div>
              <div className="text-slate-400 text-sm space-y-2">
                <div className="text-white font-medium">Business Hours:</div>
                <div>Mon - Fri: 9:00 AM - 7:00 PM</div>
                <div>Sat: 9:00 AM - 5:00 PM</div>
                <div className="text-blue-400 font-medium">24/7 Emergency Support</div>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <span className="text-sm text-white">Follow Us:</span>
                <a
                  href="https://www.instagram.com/infarisetechnology.in?igsh=MWxjYm4zMGZtY20xNw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://youtube.com/@infarisetechnology?si=KMczpBwLHm90j_dS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Youtube className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Infarise Technology Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Developed by</span>
              <a
                href="https://nexturex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-all duration-300 font-medium flex items-center space-x-1 hover:scale-105"
              >
                <span>Nexturex</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
