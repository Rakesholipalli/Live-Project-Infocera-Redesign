function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 9999,
      background: 'rgba(15,23,42,0.95)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      padding: '20px 40px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ 
          fontFamily: "'Exo', 'Orbitron', sans-serif",
          fontWeight: 800,
          fontSize: '28px',
          letterSpacing: '3px',
          background: 'linear-gradient(135deg,#5b21b6,#9333ea,#4f46e5)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none'
        }}>
          INFOCERA
        </a>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Home</a>
          <a href="/about.html" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>About</a>
          <a href="/services.html" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Services</a>
          <a href="/technologies.html" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Technologies</a>
          <a href="/portfolio.html" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Portfolio</a>
          <a href="/careers.html" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Careers</a>
          <a href="/contact.html" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
