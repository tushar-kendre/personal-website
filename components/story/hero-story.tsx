"use client"

import { Mail, ArrowRight, Music, Palette, ChefHat, Gamepad2 } from "lucide-react"
import Image from "next/image"
import { SectionRail } from "@/components/story/section-rail"
import { SystemCanvas } from "@/components/viz/system-canvas"

const storySections = [
  { id: "intro", label: "Intro" },
  { id: "mindset", label: "Mindset" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "hobbies", label: "Hobbies" },
  { id: "publications-awards", label: "Publications & Awards" },
  { id: "contact", label: "Contact" },
]

export default function HeroStory() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <SystemCanvas className="absolute inset-0" />
      <SectionRail sections={storySections} />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/60 to-slate-950/75" />

      <section id="intro" className="relative z-10 min-h-screen border-b border-white/10">
        <div className="mx-auto flex min-h-screen w-full max-w-[94rem] items-center px-6 pt-20 pb-24">
          <div className="grid w-full gap-10 lg:-translate-y-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <div className="rounded-2xl border border-white/15 bg-slate-950/55 p-8 shadow-2xl backdrop-blur-md md:p-10 lg:flex lg:h-[600px] lg:flex-col lg:justify-between">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.22em] text-cyan-300/90">Tushar Kendre</p>
                <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-50 md:text-6xl">
                  Backend Engineer focused on scalable systems, cloud architecture, and reliable product delivery.
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-slate-200">
                  I build and ship resilient APIs and distributed services, turning complex requirements into
                  production-ready solutions that are maintainable, observable, and cost-aware.
                </p>
                <p className="text-slate-300">
                  My work combines deep engineering with practical product thinking — from system design and data flows
                  to deployment, performance, and long-term scale.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:tusharkendre7@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 font-medium text-slate-950 transition-opacity hover:opacity-90"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>

                <a
                  href="/resume/TPK_RESUME_SDE.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-slate-200 transition-colors hover:bg-white/10"
                >
                  Download Resume
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tushar-kendre-92b21b144/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-slate-200 transition-colors hover:bg-white/10"
                >
                  LinkedIn
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/tushar-kendre"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-slate-200 transition-colors hover:bg-white/10"
                >
                  GitHub
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mx-auto w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-950/60 shadow-2xl backdrop-blur-md lg:h-[600px]">
              <div className="relative h-[300px] sm:h-[360px] lg:h-full">
                <Image src="/hero-photo.jpg" alt="Portrait of Tushar Kendre" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mindset" className="relative z-10 border-b border-white/10">
        <div className="mx-auto w-full max-w-[94rem] px-6 py-24 xl:px-8">
          <h2 className="mb-10 text-3xl font-semibold text-slate-50 md:text-4xl">System Mindset</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-cyan-300/90">Design for change</p>
              <p>I build multi-tenant systems and rules engines that stay configurable as product requirements evolve.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-cyan-300/90">Reliability first</p>
              <p>
                I optimize for uptime, observability, and predictable performance with strong API design, schema choices,
                and cloud-native deployment.
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-cyan-300/90">Product-aware execution</p>
              <p>
                I balance engineering depth with delivery: clear milestones, measurable outcomes, and systems that teams
                can maintain long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 border-b border-white/10">
        <div className="mx-auto w-full max-w-[94rem] px-6 py-24 xl:px-8">
          <h2 className="mb-10 text-3xl font-semibold text-slate-50 md:text-4xl">Selected Builds</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900/55">
              <div className="relative h-52 w-full border-b border-white/10">
                <Image src="/rcube-js.png" alt="rcube-js project preview" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-50">rcube-js</h3>
                <p className="mt-2 text-slate-200">
                  Interactive NxN Rubik&apos;s Cube simulator focused on smooth browser performance and robust cube state
                  transitions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                  <span className="rounded-full border border-white/20 px-3 py-1">React</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">Three.js</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">WebGL</span>
                </div>
                <a
                  href="https://github.com/tushar-kendre/rcube-js"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 transition-opacity hover:opacity-85"
                >
                  View on GitHub
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            <article className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900/55">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-50">Resume Analyzer</h3>
                <p className="mt-2 text-slate-200">
                  AI-powered resume review tool with entity extraction, topic modeling, and skill-gap insights for
                  actionable feedback.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                  <span className="rounded-full border border-white/20 px-3 py-1">Fastify</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">React</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">SpaCy</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">LDA</span>
                </div>
                <a
                  href="https://github.com/BUMETCS673/seprojects-cs673a2f24_team4"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 transition-opacity hover:opacity-85"
                >
                  View on GitHub
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-white/15 bg-slate-900/55 p-6">
              <h3 className="text-xl font-semibold text-slate-50">Online SSVEP-Based Robot Controller</h3>
              <p className="mt-2 text-slate-200">
                Real-time brain-computer interface project using adaptive Riemannian geometry for autonomous robot
                control.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                <span className="rounded-full border border-white/20 px-3 py-1">BCI Meeting 2021</span>
                <span className="rounded-full border border-white/20 px-3 py-1">99.1% Accuracy</span>
                <span className="rounded-full border border-white/20 px-3 py-1">Student Award</span>
              </div>
              <a
                href="/SSVEP.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 transition-opacity hover:opacity-85"
              >
                View abstract (PDF)
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 border-b border-white/10">
        <div className="mx-auto w-full max-w-[94rem] px-6 py-24 xl:px-8">
          <h2 className="mb-10 text-3xl font-semibold text-slate-50 md:text-4xl">Experience Timeline</h2>
          <div className="space-y-4 text-slate-200">
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6">
              <p className="text-sm text-cyan-300/90">Jan 2025 – Present</p>
              <p className="mt-1 text-lg font-medium text-slate-50">Software Development Engineer II · Patient First.AI</p>
              <p className="mt-2 text-slate-300">Led a multi-tenant compliance platform with high-volume ingestion and ML extraction.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6">
              <p className="text-sm text-cyan-300/90">July 2024 – Dec 2024</p>
              <p className="mt-1 text-lg font-medium text-slate-50">Desktop Support Assistant · Boston University</p>
              <p className="mt-2 text-slate-300">Designed and deployed lab access control across 10+ engineering labs.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6">
              <p className="text-sm text-cyan-300/90">Oct 2020 – Dec 2023</p>
              <p className="mt-1 text-lg font-medium text-slate-50">Software Development Engineer · Brainwave Science Inc.</p>
              <p className="mt-2 text-slate-300">Built and scaled distributed EEG/ML systems for production deployments.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="relative z-10 border-b border-white/10">
        <div className="mx-auto w-full max-w-[94rem] px-6 py-24 xl:px-8">
          <h2 className="mb-10 text-3xl font-semibold text-slate-50 md:text-4xl">Education</h2>
          <div className="space-y-4 text-slate-200">
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6">
              <p className="text-sm text-cyan-300/90">Jan 2024 – May 2025</p>
              <p className="mt-1 text-lg font-medium text-slate-50">MS in Computer Science · Boston University</p>
              <p className="mt-2 text-slate-300">
                Coursework: Analysis of Algorithms, Computer Architecture, Operating Systems, Software Engineering,
                Computer Networks.
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6">
              <p className="text-sm text-cyan-300/90">July 2016 – Oct 2020</p>
              <p className="mt-1 text-lg font-medium text-slate-50">
                B.Tech in Aerospace Engineering · IIT Kanpur
              </p>
              <p className="mt-2 text-slate-300">
                Coursework: Data Structures and Algorithms, Neural Networks, Autonomous Navigation, Image Processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 border-b border-white/10">
        <div className="mx-auto w-full max-w-[94rem] px-6 py-24 xl:px-8">
          <h2 className="mb-10 text-3xl font-semibold text-slate-50 md:text-4xl">Skills in Context</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-blue-300/90">Built with</p>
              <p>Python, JavaScript/TypeScript, Golang, C++, React, Three.js, Fastify, FastAPI.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-blue-300/90">Shipped with</p>
              <p>AWS ECS/Lambda/EC2/SageMaker, PostgreSQL, Docker, Kubernetes, GitHub Actions, Terraform.</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-blue-300/90">Scaled with</p>
              <p>Distributed systems, REST APIs, Airflow, Snowflake, NLP pipelines, observability-first design.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="hobbies" className="relative z-10 border-b border-white/10">
        <div className="mx-auto w-full max-w-[94rem] px-6 py-24 xl:px-8">
          <h2 className="mb-10 text-3xl font-semibold text-slate-50 md:text-4xl">Things I Do for Fun</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <div className="mb-4 inline-flex rounded-lg border border-white/15 bg-slate-950/70 p-2">
                <Music className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-slate-50">Piano</h3>
              <p className="mt-2 text-sm text-slate-300">
                Late evenings, I usually sit at the piano and play whatever feels right that day. It&apos;s one of my
                favorite ways to reset.
              </p>
            </article>

            <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <div className="mb-4 inline-flex rounded-lg border border-white/15 bg-slate-950/70 p-2">
                <Palette className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-slate-50">Warhammer 40k Mini Painting</h3>
              <p className="mt-2 text-sm text-slate-300">
                I can spend hours painting one miniature—especially Dark Angels. I love trying color tones, fixing tiny
                details, and slowly seeing a full character come together.
              </p>
            </article>

            <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <div className="mb-4 inline-flex rounded-lg border border-white/15 bg-slate-950/70 p-2">
                <ChefHat className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-slate-50">Cooking</h3>
              <p className="mt-2 text-sm text-slate-300">
                Cooking is my weekend ritual. I like trying new recipes, changing them halfway, and seeing what fun
                version comes out.
              </p>
            </article>

            <article className="rounded-2xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <div className="mb-4 inline-flex rounded-lg border border-white/15 bg-slate-950/70 p-2">
                <Gamepad2 className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-slate-50">Card-Based Game Design</h3>
              <p className="mt-2 text-sm text-slate-300">
                I keep a notebook of card game ideas—strange mechanics, wild combos, and little worlds I&apos;d want to
                play with friends.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="publications-awards" className="relative z-10 border-b border-white/10">
        <div className="mx-auto w-full max-w-[94rem] px-6 py-24 xl:px-8">
          <h2 className="mb-10 text-3xl font-semibold text-slate-50 md:text-4xl">Publications & Awards</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-red-300/90">Publication</p>
              <p className="text-slate-300">
                Comparative Performance Analysis of Scalp EEG and Ear EEG based P300 Ambulatory Brain-Computer
                Interfaces using Riemannian Geometry and Convolutional Neural Network.
              </p>
              <a
                href="https://doi.org/10.1109/NCC55593.2022.9806815"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 transition-opacity hover:opacity-85"
              >
                DOI: 10.1109/NCC55593.2022.9806815
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-xl border border-white/15 bg-slate-900/60 p-6 text-slate-200">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-red-300/90">Award</p>
              <p className="text-slate-300">
                Student award at BCI Meeting 2021 for building an online SSVEP-based robot controller, achieving
                99.1% accuracy on live EEG data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10">
        <div className="mx-auto w-full max-w-[94rem] px-6 py-24 xl:px-8">
          <h2 className="mb-8 text-3xl font-semibold text-slate-50 md:text-4xl">Contact CTA</h2>
          <div className="rounded-2xl border border-white/15 bg-slate-900/60 p-8">
            <p className="mb-6 max-w-2xl text-slate-200">
              If you&apos;re building a backend-heavy product and want reliable systems with clean execution, I&apos;d love to
              collaborate.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:tusharkendre7@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 font-medium text-slate-950 transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                Work With Me
              </a>
              <a
                href="https://github.com/tushar-kendre"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-slate-200 transition-colors hover:bg-white/10"
              >
                View GitHub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
