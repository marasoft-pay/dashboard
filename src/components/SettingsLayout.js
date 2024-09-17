import React from 'react'



const SettingsLayout = ({ children }) => {
    return (
      <div style={{ display: 'grid', width: '100%' }}>
        <nav style={{ display: 'flex',  alignContent:'start', gap: '20px', padding: '20px', backgroundColor: '#f0f0f0' }}>
          {/* Navigation bar content here */}
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="settings">Contact</a>
        </nav>
        <main style={{ flex: 6, padding: '20px' }}>
          {/* Main content area here */}
          {children}
        </main>
      </div>
    );
  };
  
  export default SettingsLayout;