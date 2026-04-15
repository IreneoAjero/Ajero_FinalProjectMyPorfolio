import React from 'react';

function Skills() {
  return (
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100%'
    }}>
      {/* PHOTO CONTAINER (Matches the neutral brown theme)
        We use borderRadius: '50%' to make sure it's a perfect circle.
      */}
      <div style={{
        width: '400px', 
        height: '400px', 
        borderRadius: '50%', 
        border: '12px solid #e7e5e4', /* A subtle stone-grey border */
        overflow: 'hidden', /* This 'cuts' the image into a circle */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e7e5e4', /* Placeholder color while image loads */
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)' /* Smooth soft shadow */
      }}>
        
        {/*
          ACTUAL IMAGE (Loaded from the public folder)
        */}
        <img 
          src="/profile.png" 
          alt="Leo Profile" 
          style={{
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' /* This ensures the photo doesn't stretch */
          }} 
          /* If the image fails to load, show a placeholder */
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.innerHTML = '<span style="font-size: 80px">👤</span>';
            e.target.parentNode.style.backgroundColor = '#d6d3d1';
          }}
        />
      </div>
    </div>
  );
}

export default Skills;