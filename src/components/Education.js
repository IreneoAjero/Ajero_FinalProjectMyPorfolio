import React from 'react';

function Education() {
  const degrees = [
    {
      school: "University of Cordilleras",
      degree: "Bachelor of Multi-Media Arts",
      year: "2021 — Present",
      description: "Focusing on the creative world of animation and illustration."
    }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
      <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.4 }}>Education</h2>
      <div style={{ spaceY: '30px' }}>
        {degrees.map((item, index) => (
          <div key={index} style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', margin: '0 0 5px 0' }}>{item.school}</h3>
            <p className="fancy-highlight" style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 15px 0' }}>{item.year}</p>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.6' }}>
              <span style={{ fontWeight: '700' }}>{item.degree}</span>. {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;