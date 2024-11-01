import React, { useState } from 'react'
import { Search, ChevronRight, Download, ExternalLink } from 'lucide-react'

const navItems = ["Articles", "Publish", "Topics", "Multimedia", "CME", "About", "Contact"]

const featuredArticles = [
  {
    type: "Review",
    title: "AI-Driven Diagnostics in Modern Healthcare",
    description: "This article explores the latest advancements in AI-powered diagnostic tools and their impact on patient care.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#"
  },
  {
    type: "Original Article",
    title: "Quantum Computing in Drug Discovery",
    description: "A groundbreaking study on the application of quantum computing algorithms in accelerating drug discovery processes.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#"
  },
  {
    type: "Original Article",
    title: "Nanorobotics in Targeted Cancer Therapy",
    description: "Investigating the potential of nanorobots in delivering precise and effective cancer treatments.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#"
  },
  {
    type: "COMING IN NOVEMBER",
    title: "The Future of Telemedicine",
    description: "An in-depth look at how telemedicine is reshaping healthcare delivery and patient experiences.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#"
  }
]

const newsFromEditor = [
  {
    title: "AI-Enhanced Metabolic Risk Factor Analysis",
    date: "7/30/24",
    links: [
      { text: "See press release", url: "#", type: "pdf" },
      { text: "video", url: "#", type: "video" }
    ]
  },
  {
    title: "Robotic Surgery Advancements in Neurology",
    date: "7/9/24",
    links: [
      { text: "See LCU News Network", url: "#", type: "external" }
    ]
  },
  {
    title: "Virtual Reality Therapy for PTSD",
    date: "5/2/23",
    links: [
      { text: "See press release", url: "#", type: "pdf" }
    ]
  },
  {
    title: "AI in Personalized Medicine: A New Frontier",
    date: "3/20/24",
    links: [
      { text: "See related news article", url: "#", type: "external" }
    ]
  }
]

const journalMetrics = [
  { value: "7.1", label: "2023 Impact Factor" },
  { value: "26/345", label: "2023 General and Internal Medicine" },
  { value: "8.2", label: "2023 5-Year Impact Factor" },
  { value: "17.2", label: "2023 CiteScore" },
  { value: "23/645", label: "2023 CiteScore Ranking in General Medicine" },
  { value: "5,102,331", label: "Downloads in 2023" }
]

const editorialStaff = [
  {
    name: "Dr. Emily Chen",
    role: "Editorial Board Member, AI and Robotics in Medicine",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Dr. Michael Johnson",
    role: "Senior Staff Clinical Exercise Physiologist, Division of Cardiovascular Medicine",
    image: "/placeholder.svg?height=100&width=100"
  }
]

const journalFamily = [
  {
    title: "LCU Proceedings",
    description: "One of the premier peer-reviewed clinical journals in general and internal medicine, LCU Proceedings is among the most widely read and highly cited scientific publications for physicians.",
    image: "/placeholder.svg?height=150&width=200",
    issue: "October 2024, Volume 99, Issue 10"
  },
  {
    title: "LCU Proceedings: Innovations, Quality & Outcomes",
    description: "LCP:IQ&O is an online only, open access journal that publishes original research, reviews, commentaries, editorials, and other materials that focus on clinical innovations, quality improvement, and optimal outcomes in medicine and surgery.",
    image: "/placeholder.svg?height=150&width=200",
    issue: "October 2024, Volume 8, Issue 5"
  },
  {
    title: "LCU Proceedings: Digital Health",
    description: "LCU Proceedings: Digital Health (LCP: Digital Health) is sponsored by LCU and is a companion title to the widely read and cited LCU Proceedings.",
    image: "/placeholder.svg?height=150&width=200",
    issue: "September 2024, Volume 2, Issue 3"
  }
]

const mostCitedArticles = [
  {
    title: "Changes in Burnout and Satisfaction With Work-Life Integration in Physicians During the First 2 Years of the COVID-19 Pandemic",
    authors: "Shanafelt et al.",
    journal: "LCU Proceedings, Vol.97, No.12, p2248-2258",
    date: "December 2022",
    openAccess: true
  },
  {
    title: "Evidence-Based Strategies for Clinical Organizations to Address COVID-19 Vaccine Hesitancy",
    authors: "Finney Rutten et al.",
    journal: "LCU Proceedings, Vol.96, No.3, p699-707",
    date: "March 2021",
    openAccess: true
  }
]

export default function LCUProceedings() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="font-sans">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">LCU PROCEEDINGS</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Submit</a></li>
              <li><a href="#" className="hover:underline">Log in</a></li>
              <li><a href="#" className="hover:underline">Register</a></li>
              <li><a href="#" className="hover:underline">Subscribe</a></li>
              <li><a href="#" className="hover:underline">Claim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <nav className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between items-center">
            {navItems.map((item, index) => (
              <li key={index}><a href="#" className="text-blue-600 hover:underline">{item}</a></li>
            ))}
            <li>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for..."
                  className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured this Month</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-sm text-red-600 font-semibold">{article.type}</span>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <a href={article.link} className="text-blue-600 hover:underline flex items-center">
                    Read more <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About LCU Proceedings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <img src="/placeholder.svg?height=200&width=300" alt="LCU Proceedings" className="mb-4" />
              <p className="mb-4">
                One of the premier peer-reviewed clinical journals in general and internal medicine, LCU Proceedings is among the most widely read and highly cited scientific publications for physicians. While the Proceedings is sponsored by LCU, it welcomes submissions from authors worldwide, publishing articles that focus on clinical medicine and support the professional and educational needs of its readers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Metrics</h3>
              {journalMetrics.map((metric, index) => (
                <div key={index} className="mb-4">
                  <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              ))}
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                More Journal Metrics <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Editorial Board and Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {editorialStaff.map((staff, index) => (
              <div key={index} className="flex items-center">
                <img src={staff.image} alt={staff.name} className="w-24 h-24 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-bold">{staff.name}</h3>
                  <p className="text-gray-600">{staff.role}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">View More Bios</a>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The LCU Proceedings Family of Journals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalFamily.map((journal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={journal.image} alt={journal.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{journal.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{journal.issue}</p>
                  <p className="text-gray-600 mb-4">{journal.description}</p>
                  <a href="#" className="text-blue-600 hover:underline">Learn more</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Most Cited (Previous 3 Years)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mostCitedArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                {article.openAccess && <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">Open Access</span>}
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-1">{article.authors}</p>
                <p className="text-gray-600 mb-1">{article.journal}</p>
                <p className="text-gray-600">{article.date}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Information for Reviewers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Reviewer Login</a></li>
                <li><a href="#" className="hover:underline">About Open Access</a></li>
                <li><a href="#" className="hover:underline">About Proceedings</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Articles & Issues</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Articles in Press</a></li>
                <li><a href="#" className="hover:underline">Current Issue</a></li>
                <li><a href="#" className="hover:underline">List of Issues</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Innovations in Medicine and Surgery</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">In the Limelight</a></li>
                <li><a  href="#" className="hover:underline">Letters</a></li>
                <li><a href="#" className="hover:underline">My Treatment Approach</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Thematic Reviews</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Forward Thinking on Clinical Trials in Clinical Practice</a></li>
                <li><a href="#" className="hover:underline">Perioperative Medicine</a></li>
                <li><a href="#" className="hover:underline">Aging and Geriatric Medicine</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p>&copy; 2024 Lifestyle Corp University Proceedings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
