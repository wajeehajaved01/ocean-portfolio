 

export default function Contact() {
  return (
    <section className="page-section">
      <div className="content-container">
        <h2 className="section-title">Drop an Anchor</h2>
        <p className="contact-subtitle">Have a project in mind, or just want to say hello? Let's connect!</p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}