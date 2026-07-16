 
export default function Skills() {
  const skills = ["React & TypeScript", "Node.js", "Vite & Rolldown", "Tailwind CSS", "UI/UX Design", "SQL & NoSQL"];
  return (
    <section className="page-section">
      <div className="content-container">
        <h2 className="section-title">My Toolkit</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}