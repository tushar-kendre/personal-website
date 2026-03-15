"use client"

import { Application, extend, useTick } from "@pixi/react"
import { Container, Graphics } from "pixi.js"
import { type MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from "react"

extend({ Container, Graphics })

type SystemCanvasProps = {
  className?: string
}

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: number
  repelStrength: number
}

type Link = {
  a: number
  b: number
  restLength: number
  maxLength: number
  color: number
}

type Spark = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: number
  size: number
}

function createNodes(width: number, height: number, count: number): Node[] {
  const palette = [0xffffff, 0x93c5fd, 0x3b82f6, 0xfda4af, 0xff4d6d]
  const baseRadius = 1.4

  const createNode = (x: number, y: number): Node => {
    const radius = baseRadius + Math.random() * 3.3
    const sizeRatio = (radius - baseRadius) / 3.3

    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      radius,
      color: palette[Math.floor(Math.random() * palette.length)] ?? 0x67e8f9,
      repelStrength: 0.85 + sizeRatio * 1.45,
    }
  }

  const zodiacPatterns: Array<Array<[number, number]>> = [
    [[-0.24, 0.04], [-0.08, -0.08], [0.05, 0.03], [0.2, -0.02]],
    [[-0.28, 0.06], [-0.12, -0.1], [0.05, 0.0], [0.18, -0.12], [0.3, 0.06]],
    [[-0.3, -0.1], [-0.15, 0.06], [0.0, -0.05], [0.15, 0.08], [0.3, -0.1]],
    [[-0.28, 0.12], [-0.1, -0.06], [0.06, -0.1], [0.22, 0.0]],
    [[-0.3, 0.02], [-0.12, -0.12], [0.03, 0.02], [0.2, -0.1], [0.3, 0.08]],
    [[-0.26, -0.12], [-0.1, -0.02], [0.02, -0.08], [0.15, 0.02], [0.28, -0.04]],
    [[-0.25, -0.02], [-0.1, -0.12], [0.02, 0.02], [0.14, -0.1], [0.26, 0.0]],
    [[-0.3, 0.14], [-0.18, -0.04], [-0.05, -0.1], [0.08, 0.03], [0.2, -0.12], [0.3, 0.06]],
    [[-0.3, -0.06], [-0.15, 0.06], [0.0, -0.08], [0.15, 0.05], [0.3, -0.12]],
    [[-0.3, 0.06], [-0.16, -0.12], [-0.02, -0.02], [0.12, -0.16], [0.3, 0.02]],
    [[-0.26, 0.04], [-0.1, -0.1], [0.03, 0.04], [0.15, -0.08], [0.28, 0.08]],
    [[-0.3, 0.12], [-0.16, -0.02], [-0.02, -0.1], [0.12, -0.02], [0.25, -0.12], [0.32, 0.04]],
  ]

  const namedPatterns: Array<Array<[number, number]>> = [
    [[-0.36, -0.16], [-0.22, -0.08], [-0.1, 0.02], [0.03, -0.04], [0.16, 0.08], [0.26, 0.2], [0.34, 0.3]],
    [[-0.25, 0.0], [-0.12, -0.08], [0.0, 0.0], [0.11, 0.06], [0.2, 0.14], [0.28, 0.23]],
    [[-0.3, 0.12], [-0.12, -0.08], [0.06, 0.14], [0.2, -0.06], [0.32, 0.1]],
    [[-0.24, -0.26], [-0.08, -0.12], [0.04, -0.02], [0.16, 0.08], [0.27, 0.22], [0.08, -0.24], [0.26, -0.16]],
    [[-0.3, -0.16], [-0.18, -0.05], [-0.06, 0.06], [0.08, 0.18], [0.2, 0.28], [0.3, 0.16]],
    [[-0.2, -0.04], [-0.05, -0.12], [0.1, 0.0], [0.24, 0.08]],
  ]

  const constellationPatterns = [...zodiacPatterns, ...namedPatterns]

  const pickWeightedCenter = () => {
    const sideBias = Math.random() < 0.78
    const xNorm = sideBias
      ? Math.random() < 0.5
        ? 0.06 + Math.random() * 0.24
        : 0.7 + Math.random() * 0.24
      : 0.34 + Math.random() * 0.32
    const yNorm = 0.08 + Math.random() * 0.84
    return { x: width * xNorm, y: height * yNorm }
  }

  const nodes: Node[] = []

  for (let index = 0; index < constellationPatterns.length; index += 1) {
    if (nodes.length >= count) {
      break
    }

    const pattern = constellationPatterns[index]
    if (!pattern) {
      continue
    }

    const scale = 88 + Math.random() * 74
    const center = pickWeightedCenter()
    const rotation = Math.random() * Math.PI * 2
    const cosRotation = Math.cos(rotation)
    const sinRotation = Math.sin(rotation)

    for (let pointIndex = 0; pointIndex < pattern.length; pointIndex += 1) {
      if (nodes.length >= count) {
        break
      }

      const point = pattern[pointIndex]
      if (!point) {
        continue
      }

      const rotatedX = point[0] * cosRotation - point[1] * sinRotation
      const rotatedY = point[0] * sinRotation + point[1] * cosRotation
      const x = center.x + rotatedX * scale + (Math.random() - 0.5) * 5
      const y = center.y + rotatedY * scale + (Math.random() - 0.5) * 5
      const clampedX = Math.max(4, Math.min(width - 4, x))
      const clampedY = Math.max(4, Math.min(height - 4, y))
      nodes.push(createNode(clampedX, clampedY))
    }
  }

  while (nodes.length < count) {
    const sideBias = Math.random() < 0.72
    const xNorm = sideBias
      ? Math.random() < 0.5
        ? 0.02 + Math.random() * 0.3
        : 0.68 + Math.random() * 0.3
      : Math.random()
    const yNorm = Math.random()
    nodes.push(createNode(xNorm * width, yNorm * height))
  }

  return nodes
}

type PixiSceneProps = {
  reducedMotion: boolean
  size: { width: number; height: number }
  pointerRef: MutableRefObject<{ x: number; y: number; active: boolean }>
  nodesRef: MutableRefObject<Node[]>
  linksRef: MutableRefObject<Link[]>
  sparksRef: MutableRefObject<Spark[]>
  draw: (graphics: Graphics) => void
}

function PixiScene({ reducedMotion, size, pointerRef, nodesRef, linksRef, sparksRef, draw }: PixiSceneProps) {
  const graphicsRef = useRef<Graphics | null>(null)

  useTick((ticker) => {
    if (reducedMotion || size.width < 2 || size.height < 2) {
      return
    }

    const dt = Math.min(2, ticker.deltaMS / 16.67)
    const pointer = pointerRef.current
    const nodes = nodesRef.current
    const previousLinks = linksRef.current

    const nextLinksMap = new Map<string, Link>()
    const nodeConnectionCount = new Array(nodes.length).fill(0)

    for (let index = 0; index < previousLinks.length; index += 1) {
      const link = previousLinks[index]
      if (!link) {
        continue
      }

      const nodeA = nodes[link.a]
      const nodeB = nodes[link.b]
      if (!nodeA || !nodeB) {
        continue
      }

      const dx = nodeB.x - nodeA.x
      const dy = nodeB.y - nodeA.y
      const distance = Math.hypot(dx, dy)
      if (distance < 0.001) {
        continue
      }

      if (distance > link.maxLength) {
        const breakX = (nodeA.x + nodeB.x) * 0.5
        const breakY = (nodeA.y + nodeB.y) * 0.5
        const burstCount = 7

        for (let sparkIndex = 0; sparkIndex < burstCount; sparkIndex += 1) {
          const angle = (sparkIndex / burstCount) * Math.PI * 2 + Math.random() * 0.45
          const speed = 0.55 + Math.random() * 1.2
          sparksRef.current.push({
            x: breakX,
            y: breakY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 18 + Math.random() * 12,
            maxLife: 18 + Math.random() * 12,
            color: link.color,
            size: 1.2 + Math.random() * 1.7,
          })
        }

        continue
      }

      const nx = dx / distance
      const ny = dy / distance
      const stretch = distance - link.restLength
      const springStrength = 0.0026
      const springForce = stretch * springStrength * dt

      nodeA.vx += nx * springForce
      nodeA.vy += ny * springForce
      nodeB.vx -= nx * springForce
      nodeB.vy -= ny * springForce

      const key = link.a < link.b ? `${link.a}:${link.b}` : `${link.b}:${link.a}`
      nextLinksMap.set(key, link)
      nodeConnectionCount[link.a] += 1
      nodeConnectionCount[link.b] += 1
    }

    for (let index = 0; index < nodes.length; index += 1) {
      const node = nodes[index]
      if (!node) {
        continue
      }

      if (pointer.active) {
        const dx = node.x - pointer.x
        const dy = node.y - pointer.y
        const d2 = dx * dx + dy * dy
        const influenceRadius = 300
        if (d2 > 1 && d2 < influenceRadius * influenceRadius) {
          const distance = Math.sqrt(d2)
          const nx = dx / distance
          const ny = dy / distance
          const proximity = 1 - distance / influenceRadius
          const proximityBoost = 1 + proximity * proximity * 6
          let force = 0.06 * node.repelStrength * proximityBoost

          if (distance < 70) {
            force *= 1.65
          }

          node.vx += nx * force
          node.vy += ny * force
        }
      }

      node.x += node.vx * dt
      node.y += node.vy * dt

      node.vx *= 0.992
      node.vy *= 0.992

      const speed = Math.hypot(node.vx, node.vy)
      const maxSpeed = 0.85
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed
        node.vx *= scale
        node.vy *= scale
      }

      if (node.x < 0) {
        node.x = 0
        node.vx *= -1
      } else if (node.x > size.width) {
        node.x = size.width
        node.vx *= -1
      }

      if (node.y < 0) {
        node.y = 0
        node.vy *= -1
      } else if (node.y > size.height) {
        node.y = size.height
        node.vy *= -1
      }
    }

    const linkCreationDistance = 150
    const maxDistanceSquared = linkCreationDistance * linkCreationDistance
    const maxLinksPerNode = 4
    const linkPalette = [0xffffff, 0x60a5fa, 0xff5d73]
    const maxTotalLinks = Math.min(nodes.length * 2, 420)
    const cellSize = linkCreationDistance
    const grid = new Map<string, number[]>()

    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i]
      if (!node) {
        continue
      }

      const cellX = Math.floor(node.x / cellSize)
      const cellY = Math.floor(node.y / cellSize)
      const key = `${cellX}:${cellY}`
      const bucket = grid.get(key)
      if (bucket) {
        bucket.push(i)
      } else {
        grid.set(key, [i])
      }
    }

    const neighborOffsets = [-1, 0, 1]

    outer: for (let i = 0; i < nodes.length; i += 1) {
      const nodeA = nodes[i]
      if (!nodeA || nodeConnectionCount[i] >= maxLinksPerNode) {
        continue
      }

      const baseCellX = Math.floor(nodeA.x / cellSize)
      const baseCellY = Math.floor(nodeA.y / cellSize)

      for (let xOffsetIndex = 0; xOffsetIndex < neighborOffsets.length; xOffsetIndex += 1) {
        const xOffset = neighborOffsets[xOffsetIndex]
        if (xOffset === undefined) {
          continue
        }

        for (let yOffsetIndex = 0; yOffsetIndex < neighborOffsets.length; yOffsetIndex += 1) {
          const yOffset = neighborOffsets[yOffsetIndex]
          if (yOffset === undefined) {
            continue
          }

          const cellKey = `${baseCellX + xOffset}:${baseCellY + yOffset}`
          const candidates = grid.get(cellKey)
          if (!candidates) {
            continue
          }

          for (let candidateIndex = 0; candidateIndex < candidates.length; candidateIndex += 1) {
            const j = candidates[candidateIndex]
            if (j === undefined || j <= i) {
              continue
            }

            if (nodeConnectionCount[i] >= maxLinksPerNode || nodeConnectionCount[j] >= maxLinksPerNode) {
              continue
            }

            const nodeB = nodes[j]
            if (!nodeB) {
              continue
            }

            const key = `${i}:${j}`
            if (nextLinksMap.has(key)) {
              continue
            }

            const dx = nodeB.x - nodeA.x
            const dy = nodeB.y - nodeA.y
            const distanceSquared = dx * dx + dy * dy
            if (distanceSquared > maxDistanceSquared) {
              continue
            }

            const distance = Math.sqrt(distanceSquared)
            const restLength = Math.max(18, distance * 0.78)
            const maxLength = Math.max(linkCreationDistance + 40, restLength * 1.72)

            nextLinksMap.set(key, {
              a: i,
              b: j,
              restLength,
              maxLength,
              color: linkPalette[(i + j) % linkPalette.length] ?? 0xffffff,
            })

            nodeConnectionCount[i] += 1
            nodeConnectionCount[j] += 1

            if (nextLinksMap.size >= maxTotalLinks) {
              break outer
            }
          }
        }
      }
    }

    linksRef.current = Array.from(nextLinksMap.values())

    const sparks = sparksRef.current
    for (let index = sparks.length - 1; index >= 0; index -= 1) {
      const spark = sparks[index]
      if (!spark) {
        continue
      }

      spark.x += spark.vx * dt
      spark.y += spark.vy * dt
      spark.vx *= 0.95
      spark.vy *= 0.95
      spark.life -= dt

      if (spark.life <= 0) {
        sparks.splice(index, 1)
      }
    }

    if (sparks.length > 240) {
      sparks.splice(0, sparks.length - 240)
    }

    const graphics = graphicsRef.current
    if (graphics) {
      draw(graphics)
    }
  })

  return (
    <pixiContainer>
      <pixiGraphics ref={graphicsRef} draw={draw} />
    </pixiContainer>
  )
}

export function SystemCanvas({ className }: SystemCanvasProps) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })
  const nodesRef = useRef<Node[]>([])
  const linksRef = useRef<Link[]>([])
  const sparksRef = useRef<Spark[]>([])

  const [size, setSize] = useState({ width: 0, height: 0 })
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    if (!hostRef.current) {
      return
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) {
        return
      }
      const nextWidth = Math.max(1, Math.floor(entry.contentRect.width))
      const nextHeight = Math.max(1, Math.floor(entry.contentRect.height))
      setSize({ width: nextWidth, height: nextHeight })
    })

    observer.observe(hostRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(media.matches)

    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const rect = hostRef.current?.getBoundingClientRect()
      if (!rect) {
        return
      }

      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom

      if (!isInside) {
        pointerRef.current.active = false
        return
      }

      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      }
    }

    const clearPointer = () => {
      pointerRef.current.active = false
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerdown", handlePointerMove, { passive: true })
    window.addEventListener("blur", clearPointer)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerdown", handlePointerMove)
      window.removeEventListener("blur", clearPointer)
    }
  }, [])

  const nodeCount = useMemo(() => {
    const area = size.width * size.height
    if (area <= 480 * 900) {
      return 140
    }
    if (area <= 900 * 1400) {
      return 220
    }
    return 320
  }, [size.height, size.width])

  useEffect(() => {
    if (size.width < 2 || size.height < 2) {
      return
    }
    nodesRef.current = createNodes(size.width, size.height, nodeCount)
    linksRef.current = []
    sparksRef.current = []
  }, [nodeCount, size.height, size.width])

  const draw = useCallback(
    (graphics: Graphics) => {
      graphics.clear()

      if (size.width < 2 || size.height < 2) {
        return
      }

      graphics.rect(0, 0, size.width, size.height)
      graphics.fill({ color: 0x02020a, alpha: 1 })

      const nodes = nodesRef.current
      const links = linksRef.current
      const sparks = sparksRef.current

      for (let index = 0; index < links.length; index += 1) {
        const link = links[index]
        if (!link) {
          continue
        }

        const nodeA = nodes[link.a]
        const nodeB = nodes[link.b]
        if (!nodeA || !nodeB) {
          continue
        }

        const dx = nodeA.x - nodeB.x
        const dy = nodeA.y - nodeB.y
        const distance = Math.hypot(dx, dy)
        const stretchRatio = Math.min(1, Math.max(0, (distance - link.restLength) / (link.maxLength - link.restLength)))
        const alpha = reducedMotion ? 0.12 : 0.34 - stretchRatio * 0.14

        graphics.moveTo(nodeA.x, nodeA.y)
        graphics.lineTo(nodeB.x, nodeB.y)
        graphics.stroke({ color: link.color, alpha, width: 1 })
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i]
        if (!node) {
          continue
        }

        graphics.circle(node.x, node.y, node.radius * 2.8)
        graphics.fill({ color: node.color, alpha: reducedMotion ? 0.08 : 0.16 })

        graphics.circle(node.x, node.y, node.radius * 1.7)
        graphics.fill({ color: 0xffffff, alpha: reducedMotion ? 0.05 : 0.1 })

        graphics.circle(node.x, node.y, node.radius)
        graphics.fill({ color: node.color, alpha: reducedMotion ? 0.74 : 0.96 })
      }

      for (let index = 0; index < sparks.length; index += 1) {
        const spark = sparks[index]
        if (!spark || spark.maxLife <= 0) {
          continue
        }

        const lifeRatio = Math.max(0, Math.min(1, spark.life / spark.maxLife))
        graphics.circle(spark.x, spark.y, spark.size * lifeRatio)
        graphics.fill({ color: spark.color, alpha: lifeRatio * 0.9 })
      }
    },
    [reducedMotion, size.height, size.width],
  )

  return (
    <div ref={hostRef} className={className}>
      {size.width > 1 && size.height > 1 ? (
        <Application antialias width={size.width} height={size.height} backgroundAlpha={0}>
          <PixiScene
            reducedMotion={reducedMotion}
            size={size}
            pointerRef={pointerRef}
            nodesRef={nodesRef}
            linksRef={linksRef}
            sparksRef={sparksRef}
            draw={draw}
          />
        </Application>
      ) : null}
    </div>
  )
}
