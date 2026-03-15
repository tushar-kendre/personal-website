import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Briefcase,
  Sparkles,
  Rocket,
  Workflow,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const profile = {
    name: "Tushar Kendre",
    title: "Senior Software Engineer · Platform & Architecture",
    location: "Boston, MA, USA",
    email: "tusharkendre7@gmail.com",
    phone: "(508) 381 9158",
    website: "tushar-kendre.com",
    github: "https://github.com/tusharkendre",
    linkedin: "https://linkedin.com/in/tusharkendre",
  }

  const intro = {
    headline: "I design and lead production platforms where correctness, governance, and delivery speed all matter.",
    summary:
      "I specialize in backend-heavy products where policy, data quality, and user workflows intersect. My sweet spot is owning systems end-to-end: product shaping, architecture, implementation, and production reliability.",
    now:
      "Most recently at Patient First.AI, I led architecture and execution for Vactrack-v2 modernization, including migration safety, rules governance, and team-level delivery quality.",
  }

  const patientFirstCaseStudy = {
    title: "Featured Case Study — Vactrack-v2 Modernization",
    summary:
      "As lead architect and technical owner, I directed platform design, migration strategy, and execution governance for a healthcare compliance modernization effort where trust and correctness were non-negotiable.",
    leadership: [
      "Led a 6-engineer team across backend, UI, platform, and quality workstreams with architecture-first delivery planning.",
      "Owned end-to-end roadmap sequencing, readiness gates, and risk controls for a multi-phase V1→V2 transition.",
      "Mentored implementation decisions around service boundaries, contract stability, and migration-safe behavior.",
    ],
    architecture: [
      "Designed a parallel-run V1→V2 migration model with dual-run parity validation before traffic expansion.",
      "Defined rollback-first rollout mechanics so production concerns could be handled without disruptive cutovers.",
      "Established a DSL/node-driven compliance framework and lifecycle governance (Draft → Validate → Publish → Version → Rollback).",
      "Made observability and auditability first-class: structured logs, traceable lifecycle events, and rollout monitoring posture.",
    ],
    outcomes: [
      "Created a durable foundation for policy evolution without repeated rewrites or hardcoded branching.",
      "Reduced migration risk by replacing all-at-once releases with measured, evidence-driven rollout decisions.",
      "Improved delivery confidence through explicit governance, version traceability, and production-safe controls.",
    ],
  }

  const strengths = [
    {
      title: "Platform Architecture",
      icon: Rocket,
      description:
        "Designing multi-tenant systems with clean service boundaries, resilient APIs, and data models that survive real growth.",
      tags: ["System Design", "Fastify / FastAPI", "PostgreSQL", "Distributed Services"],
    },
    {
      title: "Automation & Delivery",
      icon: Workflow,
      description:
        "Turning engineering workflows into repeatable pipelines through CI/CD, infrastructure as code, and cloud-native deployments.",
      tags: ["AWS", "Terraform", "GitHub Actions", "Docker / Kubernetes"],
    },
    {
      title: "Applied ML in Products",
      icon: Sparkles,
      description:
        "Integrating OCR and ML into operational systems so models produce business outcomes, not just offline metrics.",
      tags: ["OCR", "NLP", "PyTorch / TensorFlow", "SageMaker"],
    },
  ]

  const impactStories = [
    {
      role: "Software Development Engineer II",
      company: "Patient First.AI",
      dates: "Jan 2025 – Present",
      location: "Boston, MA",
      highlights: [
        "Architected and owned Vactrack-v2 modernization as design authority and delivery lead for a 6-engineer team.",
        "Designed migration-safe V1→V2 parallel-run architecture with parity checks, phased cutovers, and rollback safeguards.",
        "Built configurable compliance orchestration used by 10+ universities, supporting 100+ rules and 50,000+ student records.",
        "Integrated OCR + ML document workflows achieving >95% structured extraction accuracy and built cloud operations targeting >99.9% uptime.",
      ],
    },
    {
      role: "Software Development Engineer",
      company: "Brainwave Science Inc.",
      dates: "Oct 2020 – Dec 2023",
      location: "Boston, MA",
      highlights: [
        "Led development of distributed ML services for EEG-based workflows across data processing, model training, and inference.",
        "Reduced real-time inference latency by 70% while cutting hardware footprint by 60% through pipeline redesign.",
        "Delivered production AI systems for high-stakes investigative environments with cross-functional stakeholder coordination.",
        "Mentored a 10-engineer team and helped standardize engineering execution across product and research tracks.",
      ],
    },
    {
      role: "Desktop Support Assistant",
      company: "Boston University, College of Engineering",
      dates: "Jul 2024 – Dec 2024",
      location: "Boston, MA",
      highlights: [
        "Designed and deployed a lab access platform spanning 10+ engineering labs.",
        "Integrated authentication, hardware triggers, and operational support to improve policy enforcement on campus.",
      ],
    },
  ]

  const projects = [
    {
      name: "rcube-js",
      description:
        "Interactive NxN Rubik's Cube simulator focused on smooth browser performance and robust cube state transitions.",
      tools: ["React", "Three.js", "WebGL"],
      imageUrl: "/rcube-js.png",
      link: "https://github.com/tushar-kendre/rcube-js",
    },
    {
      name: "Resume Analyzer",
      description:
        "AI-assisted review experience for resume analysis with entity extraction, topic discovery, and actionable skill insights.",
      tools: ["Fastify", "React", "SpaCy", "LDA"],
      imageUrl: "/placeholder.svg?height=200&width=300",
      link: "https://github.com/BUMETCS673/seprojects-cs673a2f24_team4",
    },
  ]

  const education = [
    {
      degree: "MS in Computer Science",
      school: "Boston University",
      dates: "Jan 2024 – May 2025",
    },
    {
      degree: "B.Tech. in Aerospace Engineering",
      school: "Indian Institute of Technology (IIT) Kanpur",
      dates: "Jul 2016 – Oct 2020",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans antialiased">
      <Navigation />

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute top-6 left-6 z-40">
          <div className="w-12 h-12 card-subtle rounded-lg flex items-center justify-center shadow-md">
            <span className="text-accent-blue font-bold text-xl">TK</span>
          </div>
        </div>

        <div className="absolute inset-0 bg-slate-900" />

        <div className="relative z-10 h-full flex items-center py-24">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl">
              <div className="rounded-2xl border border-white/10 bg-slate-950/35 backdrop-blur-sm p-6 md:p-8 shadow-lg">
                <p className="text-slate-200 text-2xl md:text-3xl mb-4 font-light">Hello, I&apos;m</p>
                <h1 className="text-slate-50 text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight drop-shadow-sm">
                  {profile.name}
                </h1>
                <p className="text-slate-100 text-xl md:text-2xl font-medium mb-4">{profile.title}</p>
                <div className="w-32 h-1 bg-gradient-to-r from-accent-blue to-accent-blue-light rounded-full mb-8" />

                <p className="text-slate-100 text-xl leading-relaxed mb-4">{intro.headline}</p>
                <p className="text-slate-200 leading-relaxed mb-3">{intro.summary}</p>
                <p className="text-slate-300 leading-relaxed mb-8">{intro.now}</p>

                <div className="flex space-x-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="w-12 h-12 bg-slate-300/90 hover:bg-accent-blue rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-md group"
                  >
                    <Mail className="w-6 h-6 text-slate-800 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-300/90 hover:bg-accent-blue rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-md group"
                  >
                    <Github className="w-6 h-6 text-slate-800 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-300/90 hover:bg-accent-blue rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-md group"
                  >
                    <Linkedin className="w-6 h-6 text-slate-800 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-end items-center">
              <Image
                src="/hero-photo.jpg"
                alt="Tushar Kendre"
                width={400}
                height={500}
                className="object-cover rounded-lg shadow-xl border border-slate-700/30"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="card-subtle p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-semibold text-slate-50 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-accent-blue" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} className="skill-tag text-slate-200 text-xs px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Principal Scope Work</h2>
          <Card className="card-subtle text-slate-50 shadow-lg rounded-xl p-8 mb-8">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-2xl font-bold text-slate-50">{patientFirstCaseStudy.title}</CardTitle>
              <p className="text-slate-300 mt-3 leading-relaxed">{patientFirstCaseStudy.summary}</p>
            </CardHeader>
            <CardContent className="p-0 grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-accent-blue font-semibold mb-3">Leadership & Ownership</h3>
                <ul className="space-y-3 text-slate-300">
                  {patientFirstCaseStudy.leadership.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-accent-blue font-semibold mb-3">Architecture Decisions</h3>
                <ul className="space-y-3 text-slate-300">
                  {patientFirstCaseStudy.architecture.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-accent-blue font-semibold mb-3">Program Outcomes</h3>
                <ul className="space-y-3 text-slate-300">
                  {patientFirstCaseStudy.outcomes.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold mb-6 text-slate-100">Additional Experience</h3>
          <div className="space-y-8">
            {impactStories.map((story) => (
              <Card key={story.company + story.role} className="card-subtle text-slate-50 shadow-lg rounded-xl p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-50 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-accent-blue" />
                        {story.role}
                      </CardTitle>
                      <p className="text-lg text-accent-blue font-medium mt-1">
                        {story.company} · {story.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{story.dates}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3 text-slate-300">
                    {story.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Core Stack</h2>
          <Card className="card-subtle p-8 rounded-xl shadow-lg">
            <CardContent className="p-0 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent-blue" /> Platform & APIs
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "TypeScript",
                    "Golang",
                    "Fastify",
                    "FastAPI",
                    "Node.js",
                    "PostgreSQL",
                    "REST API Design",
                  ].map((skill) => (
                    <Badge key={skill} className="skill-tag text-slate-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent-blue" /> Cloud, Ops & ML
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS (ECS, Lambda, EC2, SageMaker)",
                    "Terraform",
                    "GitHub Actions",
                    "Docker",
                    "Kubernetes",
                    "Airflow",
                    "OCR Pipelines",
                    "PyTorch / TensorFlow",
                  ].map((skill) => (
                    <Badge key={skill} className="skill-tag text-slate-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Selected Builds</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name} className="project-card rounded-xl shadow-lg overflow-hidden">
                <div className="relative group">
                  <Image
                    src={project.imageUrl}
                    alt={`Preview of ${project.name}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="p-6 pb-0">
                  <CardTitle className="text-xl font-bold text-slate-50 flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent-blue" />
                    {project.name}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-slate-400 hover:text-accent-blue transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-3">
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} className="skill-tag text-xs px-2 py-0.5">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="education" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Education & Research</h2>
          <div className="grid gap-8 md:grid-cols-2 mb-8">
            {education.map((item) => (
              <Card key={item.degree} className="card-subtle p-6 rounded-xl shadow-lg">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-xl font-semibold text-slate-50">{item.degree}</CardTitle>
                  <p className="text-lg text-accent-blue font-medium">{item.school}</p>
                </CardHeader>
                <CardContent className="p-0 flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{item.dates}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="card-subtle p-8 rounded-xl shadow-lg">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-semibold text-slate-50">Publication</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-slate-300 space-y-3">
              <p>
                Comparative Performance Analysis of Scalp EEG and Ear EEG based P300 Ambulatory Brain-Computer
                Interfaces using Riemannian Geometry and Convolutional Neural Network.
              </p>
              <p className="text-slate-400">Vartika Gupta, Tushar P. Kendre, Tharun Kumar Reddy, Vipul Arora</p>
              <a
                href="https://doi.org/10.1109/NCC55593.2022.9806815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm hover:text-accent-blue transition-colors"
              >
                10.1109/NCC55593.2022.9806815
                <ExternalLink className="w-3 h-3" />
              </a>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Let&apos;s Build Something Useful</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 card-subtle rounded-lg hover:bg-slate-800/40 transition-colors">
                <MapPin className="w-6 h-6 text-accent-blue" />
                <span className="text-slate-300">{profile.location}</span>
              </div>
              <div className="flex items-center gap-4 p-4 card-subtle rounded-lg hover:bg-slate-800/40 transition-colors">
                <Phone className="w-6 h-6 text-accent-blue" />
                <a href={`tel:${profile.phone.replace(/\D/g, "")}`} className="text-slate-300 hover:text-accent-blue">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-4 p-4 card-subtle rounded-lg hover:bg-slate-800/40 transition-colors">
                <Globe className="w-6 h-6 text-accent-blue" />
                <Link href={`https://${profile.website}`} target="_blank" className="text-slate-300 hover:text-accent-blue">
                  {profile.website}
                </Link>
              </div>
            </div>

            <div className="text-left md:text-right self-center">
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                If you&apos;re building a product that needs dependable backend systems, strong execution, and thoughtful
                engineering leadership, I&apos;d love to connect.
              </p>
              <Button
                asChild
                className="accent-gradient text-white hover:opacity-90 font-medium px-12 py-4 rounded-full text-lg shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
