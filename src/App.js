import React from 'react';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education'; 
import Showcase from './components/Showcase'; 

function App() {
  return (
    <div style={{ backgroundColor: '#fcfaf7', color: '#3c3836', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* NAVIGATION */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 8%' }}>
        <div style={{ fontWeight: '900', fontSize: '24px', letterSpacing: '-1px' }}>Portfolio</div>
        <div style={{ display: 'flex', gap: '40px', fontSize: '14px', fontWeight: '500' }}>
          <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
          <a href="#showcase" style={{ textDecoration: 'none', color: 'inherit' }}>Showcase</a>
          <a href="#education" style={{ textDecoration: 'none', color: 'inherit' }}>Education</a>
          <a href="#experience" style={{ textDecoration: 'none', color: 'inherit' }}>Experience</a>
        </div>
        <button style={{ padding: '12px 28px', borderRadius: '50px', background: '#3c3836', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '12px' }}>
          FINAL PROJECT
        </button>
      </nav>

      {/* HERO SECTION */}
      <header style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', padding: '80px 8%', alignItems: 'center', minHeight: '80vh' }}>
        <div>
          <p style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', marginBottom: '10px', color: '#371803' }}>
            Greetings I am
          </p>
          <h1 style={{ fontSize: '5.5rem', margin: '0', fontWeight: '900', letterSpacing: '-3px', lineHeight: '0.9' }}>
            Ireneo <span style={{ fontWeight: '400', color: '#a89984', fontStyle: 'italic' }}>Ajero C. III</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '25px', opacity: 0.8, maxWidth: '480px', lineHeight: '1.6' }}>
            A <span style={{ fontWeight: '700' }}>Multi-Media Student</span>. I am interested in sharing my creativity through drawing, film and coding.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
            <a href="mailto:your@email.com" style={{ textDecoration: 'none', padding: '18px 45px', borderRadius: '50px', background: '#3c3836', color: 'white', fontWeight: 'bold', fontSize: '14px' }}>
              Contact Me
            </a>
            <button onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })} 
                    style={{ padding: '18px 45px', borderRadius: '50px', background: 'transparent', border: '1px solid #3c3836', color: '#3c3836', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
              Learn More
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Skills /> {/* Circular Profile Area */}
        </div>
      </header>

      {/* CONTENT SECTIONS */}
      <main style={{ padding: '0 8%', paddingBottom: '100px' }}>
        <div id="about" style={{ padding: '100px 0', borderTop: '1px solid #e7e5e4' }}>
          <AboutMe />
        </div>
        <div id="showcase" style={{ padding: '100px 0', borderTop: '1px solid #e7e5e4' }}>
          <Showcase />
        </div>
        <div id="education" style={{ padding: '100px 0', borderTop: '1px solid #e7e5e4' }}>
          <Education />
        </div>
        <div id="experience" style={{ padding: '100px 0', borderTop: '1px solid #e7e5e4' }}>
          <Experience />
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '50px 8%', textAlign: 'center', fontSize: '12px', opacity: 0.5, borderTop: '1px solid #e7e5e4' }}>
        © 2026 | FINAL PROJECT SUBMISSION
      </footer>
    </div>
  );
}

export default App;