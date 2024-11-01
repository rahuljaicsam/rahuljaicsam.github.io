import React from 'react'
import { ChevronDown, Search, User, Brain, Briefcase, Newspaper, Menu, X, ExternalLink } from 'lucide-react'

const clinicalUpdates = [
  "AI-Driven Diagnostics", "Robotic Surgery Advancements", "Virtual Reality Therapy",
  "Quantum Computing in Drug Discovery", "Nanorobotics in Medicine", "AI-Enhanced Genetic Engineering",
  "Digital Twin Healthcare", "Brain-Computer Interfaces", "AI-Powered Mental Health Solutions",
  "Robotic Prosthetics", "Synthetic Biology Breakthroughs", "AI in Personalized Medicine"
]

const referrals = [
  { location: "AI Research Hub", number: "866-629-6362" },
  { location: "Robotics Center", number: "800-634-1417" },
  { location: "Virtual Reality Lab", number: "800-533-1564" },
]

const featuredSections = [
  {
    title: "AI Clinical Trials",
    description: "AI-driven clinical trials open to patient recruitment",
    link: "Find a trial",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "LCU AI Laboratories",
    description: "Partnering with hospitals to offer AI-powered reference laboratory services",
    link: "Find and order tests",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "LCU AI Care Network",
    description: "Partnering with providers to bring LCU AI expertise to patients where they live",
    link: "Find out more",
    image: "/placeholder.svg?height=200&width=300"
  },
]

const additionalSections = [
  {
    title: "Careers for AI professionals and data scientists",
    description: "Learn about career opportunities for AI professionals and data scientists at Lifestyle Corp University.",
    link: "Explore careers",
    image: "/placeholder.svg?height=150&width=300"
  },
  {
    title: "AI Professional Health Center",
    description: "Offering comprehensive, personalized health care services to practicing AI professionals",
    link: "Request appointment",
    secondLink: "Our care services",
    image: "/placeholder.svg?height=150&width=300"
  },
  {
    title: "LCU AI Proceedings",
    description: "A peer-reviewed AI journal sponsored by LCU and authored by AI professionals worldwide",
    link: "Browse issues",
    image: "/placeholder.svg?height=150&width=300"
  },
  {
    title: "AI Publications",
    description: "Keep up with new developments and trends in AI practice and research at Lifestyle Corp University.",
    link: "See all publications",
    image: "/placeholder.svg?height=150&width=300"
  },
]

export default function AIProfessionals() {
  return (
    <div className="font-sans">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-600">AI Professionals</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">AI Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clinicalUpdates.map((update, index) => (
                  <a key={index} href="#" className="text-blue-600 hover:underline">{update}</a>
                ))}
              </div>
              <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">Sign up for AI updates</a>
            </div>
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold mb-4">Referrals</h2>
              {referrals.map((referral, index) => (
                <div key={index} className="mb-2">
                  <p className="font-semibold">{referral.location}</p>
                  <p>{referral.number}</p>
                </div>
              ))}
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                AI-Link online referrals
              </button>
              <a href="#" className="block mt-2 text-blue-600 hover:underline">Download a fax referral form</a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">AI Provider Relations</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=300&width=500" alt="AI Provider" className="rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="mb-4">
                We welcome the opportunity to collaborate in the care of your patients using advanced AI technologies. Whether it's your first time or you already have an ongoing relationship with us and our AI systems, we can connect you with LCU AI experts and services, arrange a visit to your office, provide information about AI-enhanced continuing education, and help you find LCU AI-driven clinical trials.
              </p>
              <div className="space-y-2">
                <a href="#" className="block text-blue-600 hover:underline">Refer an AI case</a>
                <a href="#" className="block text-blue-600 hover:underline">AI Resources and support</a>
                <a href="#" className="block text-blue-600 hover:underline">AI-Enhanced Information for patients</a>
                <a href="#" className="block text-blue-600 hover:underline">AI-Powered COVID-19 Resources for Providers</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">AI-Enhanced Continuing Education</h2>
          <div className="space-y-4">
            <p className="font-semibold">LCU School of AI-Enhanced Continuous Professional Development</p>
            <a href="#" className="block text-blue-600 hover:underline">Courses tailored for AI professionals</a>
            <p className="font-semibold">Continuing AI Education</p>
            <a href="#" className="block text-blue-600 hover:underline">See AI course calendar</a>
            <p className="font-semibold">LCU AI Laboratories Continuing Education</p>
            <a href="#" className="block text-blue-600 hover:underline">Find online AI programs and conferences</a>
          </div>
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSections.map((section, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img src={section.image} alt={section.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <p className="mb-4">{section.description}</p>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  {section.link} <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalSections.map((section, index) => (
            <div key={index} className="flex gap-4">
              <img src={section.image} alt={section.title} className="w-1/3 h-auto object-cover rounded" />
              <div>
                <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                <p className="mb-2">{section.description}</p>
                <a href="#" className="text-blue-600 hover:underline block">{section.link}</a>
                {section.secondLink && (
                  <a href="#" className="text-blue-600 hover:underline block mt-1">{section.secondLink}</a>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">AI Video Center</h3>
            <img src="/placeholder.svg?height=200&width=300" alt="AI Video Center" className="w-full h-40 object-cover rounded mb-2" />
            <p className="mb-2">Watch videos on advances in AI-driven disease treatment, procedures and surgeries, and select AI Grand Rounds. New AI presentations are added regularly.</p>
            <a href="#" className="text-blue-600 hover:underline">See all AI videos</a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">LCU AI Alumni Center</h3>
            <img src="/placeholder.svg?height=200&width=300" alt="LCU AI Alumni Center" className="w-full h-40 object-cover rounded mb-2" />
            <p className="mb-2">Keeping AI alumni connected with each other and Lifestyle Corp University</p>
            <a href="#" className="text-blue-600 hover:underline">Connect now</a>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Professionals</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">AskLCUAI</a></li>
                <li><a href="#" className="hover:underline">AI Clinical Trials</a></li>
                <li><a href="#" className="hover:underline">LCU AI Alumni Association</a></li>
                <li><a href="#" className="hover:underline">Refer an AI Case</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Researchers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">AI Research Faculty</a></li>
                <li><a href="#" className="hover:underline">AI Laboratories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Students</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">AI Admissions Requirements</a></li>
                <li><a href="#" className="hover:underline">AI Degree Programs</a></li>
                <li><a href="#" className="hover:underline">AI Student & Faculty Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Patients</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Request AI Consultation</a></li>
                <li><a href="#" className="hover:underline">AI-Enhanced Patient Care</a></li>
                <li><a href="#" className="hover:underline">AI in Clinical Trials</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p>&copy; 2024 Lifestyle Corp University. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">AI Ethics Guidelines</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
