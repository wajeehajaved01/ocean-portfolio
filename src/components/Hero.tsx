import OceanWaves from './OceanWaves'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-canvas-wrapper">
        <OceanWaves />
      </div>
      <div className="hero-overlay">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Wajeeha Javed</h1>
        <p className="hero-subtitle">Full-Stack Developer &amp; UI Designer</p>
        <blockquote className="hero-quote">
          &ldquo;Crafting elegant solutions where the frontend meets the
          horizon.&rdquo;
        </blockquote>
      </div>
    </section>
  )
}
