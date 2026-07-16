

export default function About() {
  return (
    <section className="page-section about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        <div className="about-text-card">
          <p>
            I'm a passionate full-stack developer with a love for building intuitive, 
            performant web applications. With experience across the modern JavaScript 
            ecosystem, I bring ideas to life through clean code and thoughtful design.
          </p>
          <p>
            From crafting pixel-perfect UIs in React to designing scalable backends in Node.js, 
            I thrive at every layer of the stack. I believe great software is born at the 
            intersection of technical rigor and creative curiosity.
          </p>
        </div>

        <div className="about-quote-card">
          <span className="quote-icon">“</span>
          <p className="quote-text">
            The ocean stirs the heart, inspires the imagination, and brings eternal joy to the soul.
          </p>
          <span className="quote-author">— Robert Wyland</span>
        </div>
      </div>
    </section>
  );
}