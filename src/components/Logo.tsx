interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = '', height = 32 }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 whitespace-nowrap ${className}`} style={{ height }}>
      {/* Sleek Wave SVG Logo */}
      <svg
        viewBox="0 0 100 60"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id="mainWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="bottomWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>

        {/* The Main Top Wave */}
        <path
          d="M 10 23 
             C 25 10, 45 10, 55 20 
             C 68 32, 75 50, 95 53 
             C 75 55, 55 45, 45 32 
             C 38 23, 22 22, 10 23 Z"
          fill="url(#mainWaveGrad)"
        />

        {/* The Bottom Splashing Wave */}
        <path
          d="M 10 53 
             C 25 53, 35 48, 38 38 
             C 32 30, 25 35, 18 50 
             C 15 53, 12 53, 10 53 Z"
          fill="url(#bottomWaveGrad)"
        />
      </svg>
      
      {/* Beautiful Typography */}
      <span className="font-sans font-bold tracking-tight text-white text-base sm:text-lg flex items-center">
        Queen<span className="text-sky-400 font-medium">OfWaves</span>
        <span className="text-xs text-sky-500/80 font-mono ml-1 font-semibold">.dev</span>
      </span>
    </div>
  );
}