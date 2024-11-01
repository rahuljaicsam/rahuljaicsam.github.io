import React, { useState } from 'react'
import { Search, ChevronRight, Stethoscope, Beaker, Users, ExternalLink } from 'lucide-react'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('')

const footerLinks = [
  {
    title: "Medical Professionals",
    items: ["AskLCUExpert", "Clinical Trials", "LCU Alumni Association", "Refer a Patient"]
  },
  {
    title: "Researchers",
    items: ["Research Faculty", "Laboratories"]
  },
  {
    title: "International Patients",
    items: ["Appointments", "Financial Services", "International Locations & Offices"]
  },
  {
    title: "Businesses",
    items: ["Executive Health Program", "International Business Collaborations", "Facilities & Real Estate", "Supplier Information"]
  },
  {
    title: "Students",
    items: ["Admissions Requirements", "Degree Programs", "Student & Faculty Portal"]
  },
  {
    title: "Charitable Care & Financial Assistance",
    items: ["Community Health Needs Assessment", "Financial Assistance Documents – Arizona", "Financial Assistance Documents – Florida", "Financial Assistance Documents – Minnesota"]
  }
]

export default function DiseasesAndConditions() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="font-sans">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between mb-4">
            <img src="/placeholder.svg?height=40&width=100" alt="LCU Logo" className="h-10" />
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:underline">Request appointment</a>
              <a href="#" className="hover:underline">Log in</a>
              <Search className="w-6 h-6" />
            </div>
          </nav>
          <div className="flex items-center text-sm mb-4">
            <a href="#" className="hover:underline">Home</a>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Diseases & Conditions</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Diseases & Conditions</h1>
          <p className="mb-4">Easy-to-understand answers about diseases and conditions</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search diseases & conditions"
              className="w-full p-3 pr-10 rounded-full text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-3 w-6 h-6 text-gray-400" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Find diseases & conditions by first letter</h2>
          <div className="flex flex-wrap gap-2">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200"
              >
                {letter}
              </a>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <Stethoscope className="w-8 h-8 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Symptom Checker</h2>
              <p className="mb-4">Find out what could be causing your symptoms and when to seek care.</p>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                Check symptoms <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <img src="/placeholder.svg?height=200&width=400" alt="Symptom Checker" className="w-full h-48 object-cover" />
          </div>
          <div>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <Beaker className="w-8 h-8 text-blue-600 mb-4" />
              <h2 className="text-xl font-bold mb-2">Clinical trials</h2>
              <p className="mb-4">Search for clinical trials by disease, treatment, or drug name.</p>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                Search clinical trials <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h2 className="text-xl font-bold mb-2">Connect to support groups</h2>
              <p className="mb-4">Share your experiences and find support in our online communities.</p>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                Find a support group <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-gray-100 rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">The right answers, the first time</h2>
              <p className="mb-4">
                LCU experts solve the world's toughest medical problems — one patient at a time.
              </p>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                Learn about LCU <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=300&width=500" alt="LCU Expert" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <aside className="mt-8 bg-gray-100 p-4 rounded">
          <p className="text-sm text-gray-600">
            LCU does not endorse companies or products. Advertising revenue supports our non-profit mission.
          </p>
          <div className="mt-2">
            <span className="text-sm font-semibold">Advertising & Sponsorship</span>
            <div className="mt-1">
              <a href="#" className="text-sm text-blue-600 hover:underline mr-2">Policy</a>
              <a href="#" className="text-sm text-blue-600 hover:underline mr-2">Opportunities</a>
              <a href="#" className="text-sm text-blue-600 hover:underline">Ad Choices</a>
            </div>
          </div>
        </aside>
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:underline">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-2xl" aria-label="Twitter">𝕏</a>
              <a href="#" className="text-2xl" aria-label="YouTube">▶</a>
              <a href="#" className="text-2xl" aria-label="Facebook">f</a>
              <a href="#" className="text-2xl" aria-label="LinkedIn">in</a>
              <a href="#" className="text-2xl" aria-label="Instagram">📷</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center bg-black text-white px-3 py-2 rounded">
                <span className="mr-2">GET IT ON</span>
                <span>Google Play</span>
              </a>
              <a href="#" className="flex items-center bg-black text-white px-3 py-2 rounded">
                <span className="mr-2">Download on the</span>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-sm text-gray-600">
          <div className="flex flex-wrap justify-center space-x-4 mb-4">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Notice of Privacy Practices</a>
            <a href="#" className="hover:underline">Notice of Nondiscrimination</a>
            <a href="#" className="hover:underline">Accessibility Statement</a>
            <a href="#" className="hover:underline">Advertising & Sponsorship Policy</a>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
          <p className="text-center">
            © 1998-2024 Lifestyle Corp University Foundation for Medical Education and Research (LCUFMER). All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
