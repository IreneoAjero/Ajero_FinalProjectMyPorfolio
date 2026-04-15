import React from 'react';

function Showcase() {
  const artworks = [
    { id: 1, src: "/artwork1.png", title: "Character Design" },
    { id: 2, src: "/artwork2.png", title: "Digital Illustration" },
    { id: 3, src: "/artwork3.png", title: "Conceptual Frame" },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
      {/* SECTION HEADER */}
      <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.4 }}>
        Showcase
      </h2>

      {/* ARTWORK GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {artworks.map((art) => (
          <div 
            key={art.id}
            style={{
              width: '100%',
              height: '300px',
              borderRadius: '30px', // Soft rounded corners matching your screenshot
              overflow: 'hidden',
              backgroundColor: '#f5f5f4', // Subtle background for non-square art
              transition: 'all 0.4s ease-in-out',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
            }}
          >
            <img 
              src={art.src} 
              alt={art.title} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain' // FIX: Shows the full image without cropping
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `<div style="color:#a89984; font-size:12px;">Art ${art.id}</div>`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showcase;