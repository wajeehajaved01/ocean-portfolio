 
interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = '', height = 32 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient for the Ocean Wave Crown */}
        <defs>
          <linearGradient id="waveCrownGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" /> {/* Cyan/Sky Blue */}
            <stop offset="100%" stopColor="#0ea5e9" /> {/* Deep Ocean Blue */}
          </linearGradient>
        </defs>

        {/* The Wave Crown Icon */}
        <path
          d="M15 75 
             C 25 75, 20 40, 30 35 
             C 35 32, 40 45, 50 20 
             C 60 45, 65 32, 70 35 
             C 80 40, 75 75, 85 75
             C 70 85, 30 85, 15 75 Z"
          fill="url(#waveCrownGrad)"
        />
        
        {/* Abstract Crown Peak Accents / Droplets */}
        <circle cx="30" cy="25" r="4" fill="#38bdf8" />
        <circle cx="50" cy="10" r="4.5" fill="#bae6fd" />
        <circle cx="70" cy="25" r="4" fill="#38bdf8" />
        
        {/* Sleek bottom wave cutting through base */}
        <path 
          d="M25 70 Q 50 60, 75 70" 
          stroke="#0f172a" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
      </svg>
      
      {/* Typography */}
      <span className="font-sans font-bold tracking-tight text-white text-lg sm:text-xl">
        Queen<span className="text-sky-400 font-light">OfWaves</span>
        <span className="text-xs text-sky-500 font-mono ml-0.5">.dev</span>
      </span>
    </div>
  );
}