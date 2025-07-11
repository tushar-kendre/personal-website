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
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import Link from "next/link"

export default function ResumePage() {
  const resumeData = {
    name: "Tushar Kendre",
    title: "Full Stack Software Engineer",
    contact: {
      location: "Boston, MA, USA",
      email: "tusharkendre7@gmail.com",
      phone: "(508) 381 9158",
      website: "tusharkendre.com",
      github: "https://github.com/tusharkendre",
      linkedin: "https://linkedin.com/in/tusharkendre",
    },
    summary:
      "Full Stack Software Engineer (SDE 2) with 4+ years of experience building scalable APIs, responsive UIs, and cloud infrastructure. Proven track record delivering end-to-end products using React, Node.js/Fastify, PostgreSQL, Terraform, Docker, and AWS. Strong in system design, cross-functional collaboration, and deploying ML/NLP solutions at scale.",
    experience: [
      {
        title: "Software Development Engineer II",
        company: "Patient First.AI",
        location: "Boston, MA",
        dates: "Jan 2025 – Present",
        description: [
          "Built a platform for 10+ universities, managing 50,000+ vaccination records with a rule engine supporting 100+ policies",
          "Created a document parser with OCR and logic-based extraction, achieving >95% accuracy",
          "Built Fastify–Node.js APIs and React dashboards on PostgreSQL, streamlining submissions and reviews",
          "Automated CI/CD with GitHub Actions and Terraform, deploying to AWS Lambda, ECS, and ALB with >99.9% uptime",
        ],
      },
      {
        title: "Desktop Support Assistant",
        company: "College of Engineering, Boston University",
        location: "Boston, MA",
        dates: "July 2024 – Dec 2024",
        description: [
          "Built an access control system using Golang, PHP, and MariaDB to manage lab machine usage",
          "Integrated real-time authentication and machine triggers, improving lab access tracking and policy enforcement",
          "Deployed the system across 10+ labs, reducing unauthorized access incidents and streamlining lab operations",
        ],
      },
      {
        title: "Software Development Engineer",
        company: "Brainwave Science Inc.",
        location: "Boston, MA",
        dates: "Oct 2020 – Dec 2023",
        description: [
          "Led development of EEG-based AI tools using FastAPI, Airflow, Snowflake, and AWS SageMaker",
          "Built real-time ML pipelines, reducing inference latency by 70% and hardware footprint by 60%",
          "Deployed containerized services using Docker, Kubernetes, and AWS EC2; integrated data pipelines with PostgreSQL (RDS)",
          "Managed a team of 10 developers and delivered AI tools to NIA (India) and Dubai Police for investigative use",
        ],
      },
    ],
    education: [
      {
        degree: "MS in Computer Science",
        university: "Boston University",
        dates: "Jan 2024 – May 2025",
        coursework:
          "Analysis of Algorithms, Computer Architecture, Operating Systems, Software Engineering, Computer Networks",
      },
      {
        degree: "B.Tech. in Aerospace Engineering",
        university: "Indian Institute of Technology (IIT) Kanpur",
        dates: "July 2016 – Oct 2020",
        coursework: "Data Structures and Algorithms, Neural Networks, Autonomous Navigation, Image Processing",
      },
    ],
    publications: [
      {
        title:
          "Comparative Performance Analysis of Scalp EEG and Ear EEG based P300 Ambulatory Brain-Computer Interfaces using Riemannian Geometry and Convolutional Neural Network",
        date: "July 2020",
        authors: "Vartika Gupta, Tushar P. Kendre, Tharun Kumar Reddy, Vipul Arora",
        doi: "10.1109/NCC55593.2022.9806815",
      },
    ],
    projects: [
      {
        name: "rcube-js: In-Browser Rubik's Cube Simulator",
        description:
          "Built a scalable 3D Rubik's Cube simulator with smooth animations, NxN cube support, and interactive controls in the browser",
        tools: "React, Three.js, JavaScript, WebGL",
        imageUrl: "/rcube-js.png",
        githubUrl: "https://github.com/tushar-kendre/rcube-js",
        featured: true,
      },
      {
        name: "Resume Analyzer: AI-powered Resume Review Tool",
        description:
          "Built a full-stack app that analyzes resumes via NLP to extract entities, model topics, and visualize skill gaps",
        tools: "Fastify, React.js, SpaCy, LDA, Python",
        imageUrl: "/placeholder.svg?height=200&width=300",
        githubUrl: "https://github.com/BUMETCS673/seprojects-cs673a2f24_team4",
        featured: true,
      },
      {
        name: "Online SSVEP-Based Robot Controller Using Adaptive Riemannian GeometryBCI Meeting 2021",
        description:
          "Built a real-time BCI system using SSVEP signals and Riemannian geometry to control a mobile robot without training. Achieved 99.1% accuracy on live EEG data and received a student award at the BCI Meeting 2021",
        tools: "EEG, Riemannian Geometry, BCI",
        imageUrl: "/placeholder.svg?height=200&width=300",
        featured: false,
      },
    ],
    skills: {
      "Languages & Frameworks":
        "Python, JavaScript, TypeScript, C++, Golang, React, Node.js, Fastify, FastAPI, PostgreSQL",
      "Cloud & DevOps": "AWS (Lambda, ECS, EC2, SageMaker), Terraform, Docker, GitHub Actions, Airflow, Kubernetes",
      "ML & Tools": "PyTorch, TensorFlow, HuggingFace, LDA, SpaCy, Jenkins, MATLAB",
    },
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans antialiased">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Logo */}
        <div className="absolute top-6 left-6 z-40">
          <div className="w-12 h-12 card-subtle rounded-lg flex items-center justify-center shadow-md">
            <span className="text-accent-blue font-bold text-xl">TK</span>
          </div>
        </div>

        {/* Split Background */}
        <div className="absolute inset-0 flex">
          {/* Left Side - Light */}
          <div
            className="hero-gradient flex-1"
            style={{
              clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)",
            }}
          />
          {/* Right Side - Dark */}
          <div
            className="bg-slate-900 flex-1"
            style={{
              clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 max-w-lg">
              <p className="text-slate-600 text-2xl md:text-3xl mb-4 font-light">Hi, I am</p>
              <h1 className="hero-text-static text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight">
                {resumeData.name}
              </h1>
              <div className="relative mb-8">
                <p className="hero-text-static text-xl md:text-2xl font-medium">{resumeData.title}</p>
                <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-accent-blue to-accent-blue-light rounded-full"></div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="w-12 h-12 bg-slate-400 hover:bg-accent-blue rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-md group"
                >
                  <Mail className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                </a>
                <a
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-400 hover:bg-accent-blue rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-md group"
                >
                  <Github className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                </a>
                <a
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-400 hover:bg-accent-blue rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-md group"
                >
                  <Linkedin className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Content - Photo */}
            <div className="flex-1 flex justify-end items-center">
              <div className="relative">
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
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-300">{resumeData.summary}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="card-subtle p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent-blue">4+</div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
                <div className="card-subtle p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent-blue">50K+</div>
                  <div className="text-slate-400 text-sm">Records Managed</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 card-subtle rounded-lg hover:bg-slate-800/40 transition-colors">
                <MapPin className="w-6 h-6 text-accent-blue" />
                <span className="text-slate-300">{resumeData.contact.location}</span>
              </div>
              <div className="flex items-center gap-4 p-4 card-subtle rounded-lg hover:bg-slate-800/40 transition-colors">
                <Phone className="w-6 h-6 text-accent-blue" />
                <a
                  href={`tel:${resumeData.contact.phone.replace(/\D/g, "")}`}
                  className="text-slate-300 hover:text-accent-blue transition-colors"
                >
                  {resumeData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-4 p-4 card-subtle rounded-lg hover:bg-slate-800/40 transition-colors">
                <Globe className="w-6 h-6 text-accent-blue" />
                <Link
                  href={`http://${resumeData.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-accent-blue transition-colors"
                >
                  {resumeData.contact.website}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(resumeData.skills).map(([category, skillsList]) => (
              <Card key={category} className="card-subtle p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl font-semibold text-slate-50 flex items-center gap-2">
                    <Code className="w-5 h-5 text-accent-blue" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2">
                    {skillsList.split(", ").map((skill) => (
                      <Badge key={skill} className="skill-tag text-slate-200 text-sm px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Work Experience</h2>

          <div className="space-y-8">
            {resumeData.experience.map((job, index) => (
              <Card
                key={index}
                className="card-subtle text-slate-50 shadow-lg rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-50 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-accent-blue" />
                        {job.title}
                      </CardTitle>
                      <p className="text-lg text-accent-blue font-medium mt-1">
                        {job.company} - {job.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{job.dates}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3 text-slate-300">
                    {job.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Featured Projects</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {resumeData.projects.map((project, index) => (
              <Card key={index} className="project-card rounded-xl shadow-lg overflow-hidden">
                {project.imageUrl && (
                  <div className="relative group">
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={`Preview of ${project.name}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                <CardHeader className="p-6 pb-0">
                  <CardTitle className="text-xl font-bold text-slate-50 flex items-center gap-2">
                    {project.featured && <Award className="w-5 h-5 text-accent-blue" />}
                    {project.name}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-slate-400 hover:text-accent-blue transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-3">
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  {project.tools && (
                    <div className="flex flex-wrap gap-2">
                      {project.tools.split(", ").map((tool) => (
                        <Badge key={tool} className="skill-tag text-xs px-2 py-0.5">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Education</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {resumeData.education.map((edu, index) => (
              <Card key={index} className="card-subtle p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold text-slate-50">{edu.degree}</CardTitle>
                  <p className="text-lg text-accent-blue font-medium">{edu.university}</p>
                  <div className="flex items-center gap-2 text-slate-400 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.dates}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-slate-300">
                    <span className="font-medium text-slate-200">Coursework:</span> {edu.coursework}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Publications</h2>

          <div className="grid gap-8">
            {resumeData.publications.map((pub, index) => (
              <Card key={index} className="card-subtle p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold text-slate-50 mb-3 leading-relaxed">
                    {pub.title}
                  </CardTitle>
                  <p className="text-slate-300 mb-2">{pub.authors}</p>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pub.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {pub.doi && (
                    <p className="text-sm text-slate-400">
                      <span className="font-medium">DOI:</span>{" "}
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent-blue transition-colors inline-flex items-center gap-1"
                      >
                        {pub.doi}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-slate-50 section-title">Get In Touch</h2>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              discuss a project or just say hello!
            </p>
            <Button
              asChild
              className="accent-gradient text-white hover:opacity-90 font-medium px-12 py-4 rounded-full text-lg shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <a href={`mailto:${resumeData.contact.email}`} className="inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
