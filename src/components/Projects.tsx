 
export default function Projects() {
  const projects = [
    {
      title: "SwiftUET",
      subtitle: "University Bus Management System | Kirothon 2026",
      tech: "Node.js, Express.js, MongoDB, React, Leaflet.js, Socket.io",
      desc: "Built solo at Kirothon 2026. A real-time bus tracking and seat booking system for students featuring live GPS tracking and socket-driven updates. Rebuilt a core system component mid-competition under extreme time constraints to deliver a working prototype."
    },
    {
      title: "LegalEase AI",
      subtitle: "Pakistan-Focused Legal Document Assistant",
      tech: "Supabase, Python (AI service), OCR, Document Classification",
      desc: "A hackathon project classifying legal documents, extracting text via OCR, and flagging high-risk clauses for everyday users navigating Pakistani legal documentation."
    },
    {
      title: "ClinicaRead AI",
      subtitle: "Bilingual Medical OCR Assistant",
      tech: "Gemini API, Groq API, OCR, Python",
      desc: "A bilingual (English/Urdu) medical document extraction tool backed by 183 passing unit tests, submitted to a European AI Summer Research Program."
    },
    {
      title: "PhishGuard v2.1",
      subtitle: "Email Phishing Detection Tool",
      tech: "Python, Async DNS, VirusTotal API",
      desc: "An Information Security Lab project identifying email phishing attempts using asynchronous DNS resolution and a weighted scoring system with a dedicated review GUI."
    }
  ];

  return (
    <section className="page-section">
      <h2 className="section-title">Anchored Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-card-header">
              <h3>{proj.title}</h3>
              <span className="project-subtitle">{proj.subtitle}</span>
            </div>
            <span className="project-tech">{proj.tech}</span>
            <p className="project-desc">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}