import React from 'react';

const Sidebar = () => (
  <div style={{ width: '200px', background: '#2e59d9', color: 'white', minHeight: '100vh', padding: '20px' }}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li style={{ padding: '10px 0', borderBottom: '1px solid #4e73df', cursor: 'pointer' }}>📊 Dashboard</li>
      <li style={{ padding: '10px 0', borderBottom: '1px solid #4e73df', cursor: 'pointer' }}>📚 My Courses</li>
      <li style={{ padding: '10px 0', borderBottom: '1px solid #4e73df', cursor: 'pointer' }}>👥 Students</li>
      <li style={{ padding: '10px 0', borderBottom: '1px solid #4e73df', cursor: 'pointer' }}>⚙️ Settings</li>
    </ul>
  </div>
);

export default Sidebar;