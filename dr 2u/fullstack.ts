import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

// Basic styles (you can move this to a CSS file)
const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' },
  nav: { display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#f4f4f4' },
  section: { marginBottom: '40px' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', fontSize: '16px' },
  button: { padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none' }
};

function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Portfolio, Resume, Projects, Contact" />
    </Helmet>
  );
}

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/about">Resume</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function Home() {
  return (
    <div style={styles.section}>
      <h1>👋 Hi, I'm Your Name</h1>
      <p>I'm a web developer specializing in React and Node.js. Welcome to my portfolio!</p>
    </div>
  );
}

function About() {
  return (
    <div style={styles.section}>
      <h2>📄 Resume</h2>
      <h3>Skills</h3>
      <ul>
        <li>React.js, JavaScript, HTML, CSS</li>
        <li>Node.js, Express, MongoDB/MySQL</li>
      </ul>
      <h3>Education</h3>
      <p>Bachelor's in Computer Science - XYZ University</p>
      <h3>Experience</h3>
      <p>Frontend Developer at ABC Corp (2023–Present)</p>
    </div>
  );
}

function Projects() {
  return (
    <div style={styles.section}>
      <h2>💼 Projects</h2>
      <ul>
        <li><strong>Portfolio Website</strong> – This very site!</li>
        <li><strong>Task Manager App</strong> – React + Node + MongoDB</li>
      </ul>
    </div>
  );
}

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'your_service_id', 
      'your_template_id', 
      form.current, 
      'your_public_key'
    ).then(() => {
      alert('Message sent!');
    }).catch(err => alert('Failed to send message'));
  };

  return (
    <div style={styles.section}>
      <h2>📬 Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} style={styles.form}>
        <input style={styles.input} type="text" name="user_name" placeholder="Your Name" required />
        <input style={styles.input} type="email" name="user_email" placeholder="Your Email" required />
        <textarea style={styles.input} name="message" placeholder="Your Message" required rows="5" />
        <button style={styles.button} type="submit">Send</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <SEO title="Your Name | Portfolio" description="Personal portfolio website for showcasing skills, projects, and achievements." />
      <div style={styles.container}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
