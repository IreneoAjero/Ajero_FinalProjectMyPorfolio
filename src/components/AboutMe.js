import React from 'react';

function AboutMe() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
      {/* LEFT COLUMN */}
      <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.4 }}>
        About Me
      </h2>
      
      {/* RIGHT COLUMN */}
      <div>
        <p style={{ fontSize: '1.5rem', fontWeight: '300', lineHeight: '1.6', margin: 0 }}>
          I am a <span style={{fontWeight: '700'}}>Multi-Media Student</span> dedicated to exploring the balance between visual aesthetics and functional code. 
          My design philosophy is rooted in <span style={{color: '#441e05', fontWeight: '600'}}>simplicity</span> and 
          the use of neutral tones to create effective user experiences.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;