 
export default function Experience() {
  return (
    <section className="page-section">
      <h2 className="section-title">Voyage & Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-header">
            <h3>Full Stack Developer Intern</h3>
            <span className="timeline-date">Jul 2026 – Present</span>
          </div>
          <h4 className="company-name">Spurvance Labs</h4>
          <ul className="timeline-bullets">
            <li>Building CTF and cybersecurity course modules for the Cyber Community Pakistan platform using React, contributing to interactive learning content for a live security-education product.</li>
            <li>Working within a remote, deadline-driven team environment, delivering assigned modules on schedule.</li>
          </ul>
        </div>

        <div className="timeline-item">
          <div className="timeline-header">
            <h3>Full Stack Developer Intern</h3>
            <span className="timeline-date">Apr 2026 – May 2026</span>
          </div>
          <h4 className="company-name">DevelopersHub Corporation</h4>
          <ul className="timeline-bullets">
            <li>Built a Medical Credentialing Management System from scratch — a full-stack web app with JWT authentication, role-based dashboards, and RESTful APIs delivered within an accelerated 3-day sprint.</li>
            <li>Deployed the solution using a Node.js + Express backend, MongoDB Atlas, and a frontend hosted on Railway + Vercel.</li>
            <li>Implemented client registration, status tracking, and an admin analytics dashboard while debugging CORS and database connection issues independently.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}