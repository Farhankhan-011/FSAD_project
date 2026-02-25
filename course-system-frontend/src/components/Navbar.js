import React from 'react';

const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: '#4e73df', color: 'white', alignItems: 'center' }}>
    <h3 style={{ margin: 0 }}>EduManager Pro</h3>
    <div>
      <span style={{ marginRight: '20px', cursor: 'pointer' }}>Profile</span>
      <button style={{ padding: '5px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Logout</button>
    </div>
  </nav>
);

export default Navbar;