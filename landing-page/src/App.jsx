import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    insurance: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-container">
      <nav className="nav animate-fade-in">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/via-logo.png" alt="VI-A Logo" style={{ height: '32px' }} />
          VI-A <span>Construction</span>
        </div>
        <div style={{fontSize: '0.9rem', color: '#cbd5e1'}}>24/7 Emergency Response</div>
      </nav>

      <main className="hero">
        <div className="hero-content animate-fade-in delay-1">
          <div style={{display: 'inline-block', background: 'rgba(245,158,11,0.2)', color: '#fbbf24', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '20px', border: '1px solid rgba(245,158,11,0.4)'}}>
            ⚠️ Recent Storm Warning in Your Area
          </div>
          <h1 className="hero-title">Hail & Wind Damage? Get a Free Roof Inspection.</h1>
          <p className="hero-subtitle">
            If your neighborhood was hit by recent storms, your insurance may cover a full roof replacement. Our experts provide 24/7 emergency tarping and loss consulting across 40+ states.
          </p>
          
          <div className="trust-badges">
            <div style={{fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#10b981', fontSize: '1.2rem'}}>✓</span> Trusted by Insurance
            </div>
            <div style={{fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px'}}>
              <span style={{color: '#10b981', fontSize: '1.2rem'}}>✓</span> $1B+ Losses Identified
            </div>
          </div>
        </div>

        <div className="glass-panel hero-form animate-fade-in delay-2">
          {submitted ? (
            <div style={{textAlign: 'center', padding: '40px 0'}}>
              <div style={{fontSize: '3rem', marginBottom: '10px'}}>🎉</div>
              <h2 style={{marginBottom: '10px'}}>Request Received!</h2>
              <p style={{color: '#cbd5e1'}}>An inspector will call you shortly to schedule your free property assessment.</p>
            </div>
          ) : (
            <>
              <h3 style={{marginBottom: '8px', fontSize: '1.5rem'}}>Check Qualification</h3>
              <p style={{color: '#cbd5e1', marginBottom: '24px', fontSize: '0.95rem'}}>Takes exactly 30 seconds.</p>
              
              <form onSubmit={handleSubmit}>
                <input 
                  required
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  className="input-field" 
                  value={formData.name}
                  onChange={handleChange}
                />
                <input 
                  required
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  className="input-field" 
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input 
                  required
                  type="text" 
                  name="zip" 
                  placeholder="Zip Code" 
                  className="input-field" 
                  value={formData.zip}
                  onChange={handleChange}
                />
                <select 
                  required
                  name="insurance"
                  className="input-field"
                  style={{appearance: 'auto', backgroundColor: '#0f172a', color: '#fff'}}
                  value={formData.insurance}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Insurance Provider...</option>
                  <option value="State Farm">State Farm</option>
                  <option value="Allstate">Allstate</option>
                  <option value="Progressive">Progressive</option>
                  <option value="Geico">Geico</option>
                  <option value="Other">Other / Not Sure</option>
                </select>

                <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '10px'}}>
                  Get My Free Inspection
                </button>
                <p style={{fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: '16px'}}>
                  By submitting, you agree to receive communications regarding your property inspection.
                </p>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
