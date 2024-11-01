import React, { useState } from 'react'
import { Search, ChevronRight, ExternalLink } from 'lucide-react'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('')

const herbsAndSupplements = [
  "Acidophilus", "Aloe", "Coenzyme Q10", "Creatine", "DHEA", "Evening primrose",
  "Fish oil", "Flaxseed and flaxseed oil", "Folate (folic acid)", "Ginkgo",
  "Glucosamine", "Honey", "L-arginine", "Marijuana", "Melatonin", "Milk thistle",
  "Niacin", "Red yeast rice", "SAMe", "St. John's wort", "Tea tree oil",
  "Vitamin A", "Vitamin B-6", "Vitamin B-12", "Vitamin C", "Vitamin D", "Vitamin E", "Zinc"
]

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

export default function DrugsAndSupplements() {
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
            <span>Drugs & Supplements</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Drugs and Supplements</h1>
          <p className="mb-4">Search prescription and over-the-counter drugs</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
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
          <h2 className="text-2xl font-bold mb-4">Find a drug by its first letter</h2>
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

        <section>
          <h2 className="text-2xl font-bold mb-4">Herbs, supplements and vitamins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {herbsAndSupplements.map((item) => (
              <a key={item} href="#" className="flex items-center justify-between py-2 border-b hover:text-blue-600">
                <span>{item}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            ))}
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
