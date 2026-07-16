import { useRef, useEffect, useCallback } from 'react'

interface Cloud {
  x: number
  y: number
  radius: number
  speed: number
  opacity: number
}

interface Wave {
  amplitude: number
  frequency: number
  speed: number
  color: string
  phase: number
}

interface Mouse {
  x: number
  y: number
}

const CLOUD_COUNT = 8
const WAVE_COLORS = [
  'rgba(30, 144, 255, 0.15)',
  'rgba(0, 119, 190, 0.25)',
  'rgba(0, 85, 150, 0.35)',
  'rgba(0, 55, 110, 0.45)',
]

function createClouds(canvasW: number, canvasH: number): Cloud[] {
  const clouds: Cloud[] = []
  for (let i = 0; i < CLOUD_COUNT; i++) {
    clouds.push({
      x: Math.random() * canvasW,
      y: Math.random() * canvasH * 0.55,
      radius: 20 + Math.random() * 60,
      speed: 0.15 + Math.random() * 0.35,
      opacity: 0.3 + Math.random() * 0.4,
    })
  }
  return clouds
}

function createWaves(): Wave[] {
  return WAVE_COLORS.map((color, i) => ({
    amplitude: 18 + i * 6,
    frequency: 0.008 + i * 0.003,
    speed: 0.3 + i * 0.15,
    color,
    phase: i * Math.PI * 0.5,
  }))
}

function drawCloud(ctx: CanvasRenderingContext2D, cloud: Cloud) {
  ctx.beginPath()
  ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2)
  ctx.arc(cloud.x - cloud.radius * 0.6, cloud.y + cloud.radius * 0.2, cloud.radius * 0.7, 0, Math.PI * 2)
  ctx.arc(cloud.x + cloud.radius * 0.6, cloud.y + cloud.radius * 0.15, cloud.radius * 0.65, 0, Math.PI * 2)
  ctx.arc(cloud.x - cloud.radius * 0.3, cloud.y - cloud.radius * 0.35, cloud.radius * 0.55, 0, Math.PI * 2)
  ctx.arc(cloud.x + cloud.radius * 0.35, cloud.y - cloud.radius * 0.3, cloud.radius * 0.5, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`
  ctx.fill()
}

interface WaveState {
  amplitude: number
  offsetX: number
}

export default function OceanWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cloudsRef = useRef<Cloud[]>([])
  const wavesRef = useRef<Wave[]>([])
  const mouseRef = useRef<Mouse>({ x: -1000, y: -1000 })
  const waveStateRef = useRef<WaveState>({ amplitude: 0, offsetX: 0 })
  const animFrameRef = useRef<number>(0)

  const resize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    cloudsRef.current = createClouds(canvas.width, canvas.height)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    cloudsRef.current = createClouds(canvas.width, canvas.height)
    wavesRef.current = createWaves()

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleResize = () => {
      resize()
    }

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('resize', handleResize)

    function animate() {
      const cvs = canvas!
      const w = cvs.width
      const h = cvs.height

      const skyGrad = ctx.createLinearGradient(0, 0, 0, h)
      skyGrad.addColorStop(0, '#87CEEB')
      skyGrad.addColorStop(0.6, '#B0E0E6')
      skyGrad.addColorStop(0.85, '#E0F4FF')
      skyGrad.addColorStop(1, '#FFFFFF')
      ctx.fillStyle = skyGrad
      ctx.fillRect(0, 0, w, h)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const influence = Math.max(0, 1 - Math.abs(my - h * 0.5) / (h * 0.5))

      waveStateRef.current.amplitude += ((influence * 12) - waveStateRef.current.amplitude) * 0.05
      waveStateRef.current.offsetX += ((mx / w - 0.5) * 40 - waveStateRef.current.offsetX) * 0.05

      for (const cloud of cloudsRef.current) {
        cloud.x += cloud.speed + influence * 0.3
        if (cloud.x > w + cloud.radius * 2) {
          cloud.x = -cloud.radius * 2
          cloud.y = Math.random() * h * 0.55
        }
        drawCloud(ctx, cloud)
      }

      const waveTop = h * 0.75
      const waveHeight = h * 0.25

      for (const wave of wavesRef.current) {
        wave.phase += wave.speed * 0.02
        const ampOffset = waveStateRef.current.amplitude * (0.3 + wave.speed * 0.5)
        const xOffset = waveStateRef.current.offsetX * (0.5 + wave.frequency * 30)

        ctx.beginPath()
        ctx.moveTo(0, h)

        for (let x = 0; x <= w; x += 2) {
          const y = waveTop
            + (waveHeight - wave.amplitude - ampOffset)
            + Math.sin(x * wave.frequency + wave.phase + xOffset) * (wave.amplitude + ampOffset * 0.5)
            + Math.sin(x * wave.frequency * 2.3 + wave.phase * 1.5) * (wave.amplitude * 0.25)
          ctx.lineTo(x, y)
        }

        ctx.lineTo(w, h)
        ctx.closePath()
        ctx.fillStyle = wave.color
        ctx.fill()
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)
    }
  }, [resize])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  )
}
