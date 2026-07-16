 

export default function Skills() {
  const skillCategories = [
    { category: "Languages", skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "x86 Assembly"] },
    { category: "Web & Backend", skills: ["Node.js", "Express.js", "React.js", "HTML", "CSS", "REST APIs", "JWT"] },
    { category: "Databases", skills: ["MongoDB (Atlas)", "MySQL", "Supabase", "Query Optimization"] },
    { category: "AI & APIs", skills: ["Google Gemini API", "Groq API", "OCR pipelines", "RAG fundamentals"] },
    { category: "Security", skills: ["Network Security", "Wireshark", "Nmap", "VirusTotal", "OpenSSL", "CTF"] }
  ];

  return (
    <section className="page-section">
      <h2 className="section-title">My Toolkit</h2>
      <div className="skills-container">
        {skillCategories.map((cat, idx) => (
          <div className="skills-category-card" key={idx}>
            <h3>{cat.category}</h3>
            <div className="skills-list">
              {cat.skills.map((skill, sIdx) => (
                <span className="skill-badge" key={sIdx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}