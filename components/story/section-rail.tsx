"use client"

import { type FocusEvent, useCallback, useEffect, useMemo, useRef, useState } from "react"

type SectionItem = {
  id: string
  label: string
}

type SectionRailProps = {
  sections: SectionItem[]
}

export function SectionRail({ sections }: SectionRailProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "")
  const [expanded, setExpanded] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const updateActiveSection = useCallback(() => {
    if (!sections.length) {
      return
    }

    const viewportMarker = window.scrollY + window.innerHeight * 0.38
    let closestId = sections[0]?.id ?? ""
    let minDistance = Number.POSITIVE_INFINITY

    for (let index = 0; index < sections.length; index += 1) {
      const section = sections[index]
      if (!section) {
        continue
      }

      const element = document.getElementById(section.id)
      if (!element) {
        continue
      }

      const sectionTop = element.offsetTop
      const sectionCenter = sectionTop + element.offsetHeight * 0.5
      const distance = Math.abs(sectionCenter - viewportMarker)

      if (distance < minDistance) {
        minDistance = distance
        closestId = section.id
      }
    }

    setActiveId((previousId) => (previousId === closestId ? previousId : closestId))
  }, [sections])

  useEffect(() => {
    updateActiveSection()

    let frame = 0
    const onScrollOrResize = () => {
      if (frame) {
        return
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0
        updateActiveSection()
      })
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
    }
  }, [updateActiveSection])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) {
      return
    }

    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 24
    window.scrollTo({ top: offsetTop, behavior: "smooth" })
  }

  const activeLabel = useMemo(() => sections.find((section) => section.id === activeId)?.label ?? "", [activeId, sections])

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!wrapperRef.current?.contains(event.relatedTarget as Node)) {
      setExpanded(false)
    }
  }

  return (
    <>
      <aside
        className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div
          ref={wrapperRef}
          className={`relative overflow-visible rounded-2xl border border-white/20 bg-slate-950/65 py-4 pr-3 shadow-[0_12px_40px_rgba(2,6,23,0.5)] backdrop-blur-md transition-all duration-200 ${
            expanded ? "w-52 pl-3" : "w-12 pl-2"
          }`}
          onFocus={() => setExpanded(true)}
          onBlur={handleBlur}
        >
          <div
            className={`pointer-events-none absolute left-5 top-5 h-[calc(100%-40px)] w-px bg-gradient-to-b from-white/10 via-cyan-300/20 to-white/10 transition-opacity duration-200 ${
              expanded ? "opacity-0" : "opacity-100"
            }`}
          />

          <div className="space-y-2">
            {sections.map((section) => {
              const isActive = section.id === activeId
              const showLabel = expanded

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className="group relative flex w-full items-center gap-3 rounded-md py-1.5 text-left transition-colors hover:bg-white/8 focus-visible:bg-white/8 focus-visible:outline-none"
                  aria-label={`Go to ${section.label}`}
                >
                  <span
                    className={`relative ml-[11px] h-2.5 w-2.5 rounded-full border transition-all ${
                      isActive
                        ? "scale-110 border-cyan-300 bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.7)]"
                        : "border-white/45 bg-slate-950"
                    }`}
                  />
                  <span
                    className={`whitespace-nowrap text-[11px] uppercase tracking-[0.16em] text-slate-200 transition-all duration-200 ${
                      showLabel ? "max-w-[180px] opacity-100" : "max-w-0 overflow-hidden opacity-0"
                    }`}
                  >
                    {section.label}
                  </span>

                  {!expanded && isActive ? (
                    <span className="pointer-events-none absolute right-full mr-3 rounded-md border border-white/20 bg-slate-950/80 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-200">
                      {activeLabel}
                    </span>
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>
      </aside>

      <nav className="fixed inset-x-3 bottom-3 z-40 lg:hidden">
        <div className="no-scrollbar overflow-x-auto rounded-2xl border border-white/20 bg-slate-950/70 p-2 backdrop-blur-md">
          <div className="flex min-w-max gap-2">
            {sections.map((section) => {
              const isActive = section.id === activeId
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? "border-cyan-300/70 bg-cyan-300/20 text-cyan-200"
                      : "border-white/20 bg-slate-950/60 text-slate-300"
                  }`}
                >
                  {section.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
