import { useEffect, useRef } from 'react'

export default function Background() {
  const containerRef = useRef(null)

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#060a18]">
      {/* Subtle Grain / Paper Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-10" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Blue Night Theme - Only blue/cyan hues */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#0a2463] rounded-full blur-[160px] opacity-[0.12] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-[#0ea5e9] rounded-full blur-[140px] opacity-[0.06] animate-pulse" style={{ animationDuration: '14s' }} />
      <div className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] bg-[#1e3a8a] rounded-full blur-[130px] opacity-[0.05] animate-pulse" style={{ animationDuration: '18s' }} />

      {/* Touch of Black - Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(6,10,24,0.6)_100%] z-20" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
    </div>
  )
}
