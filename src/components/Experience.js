import React from 'react';

function Experience() {
  const jobs = [
    {
      role: "Design Student",
      company: "Multimedia Arts Department",
      year: "2016 — Present",
      description: "Developing web activities and digital design frames using React and Figma. Focusing on the intersection of technical code and minimalist aesthetics."

      
    }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
      {/* LEFT COLUMN */}
      <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.4 }}>
        Experience
      </h2>

      {/* RIGHT COLUMN */}
      <div>
        {jobs.map((job, index) => (
          <div key={index}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', margin: '0 0 10px 0' }}>
              {job.company}
            </h3>
            <p style={{ color: '#341705', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
              {job.year}
            </p>
            <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: '1.6' }}>
              <span style={{ fontWeight: '700' }}>{job.role}</span>. {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;