import React from 'react';

const Login = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f9fc' }}>
    <div style={{ padding: '40px', background: 'white', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', width: '350px' }}>
      <h2 style={{ textAlign: 'center', color: '#4e73df' }}>LMS Login</h2>
      <input type="email" placeholder="Email" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />
      <button style={{ width: '100%', padding: '10px', background: '#4e73df', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Login</button>
    </div>
  </div>
);

const inputStyle = { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' };

export default Login;