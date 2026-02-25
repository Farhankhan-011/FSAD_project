import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AdminDashboard from './pages/AdminDashboard';
import StudentHome from './pages/StudentHome';
import Login from './pages/Login';

function App() {
  const [currentView, setCurrentView] = useState('admin');

  if (currentView === 'login') {
    return <Login onLogin={() => setCurrentView('admin')} />;
  }

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />

      <div style={{ display: 'flex', flex: 1 }}>
        {currentView === 'admin' && <Sidebar />}

        <main style={{ flex: 1, backgroundColor: '#f8f9fc', overflowY: 'auto' }}>
          <div style={{ padding: '10px', background: '#d1d3e2', textAlign: 'center' }}>
             <button style={btnStyle} onClick={() => setCurrentView('admin')}>Teacher View</button>
             <button style={btnStyle} onClick={() => setCurrentView('student')}>Student View</button>
             <button style={btnStyle} onClick={() => setCurrentView('login')}>Logout</button>
          </div>

          {currentView === 'admin' ? <AdminDashboard /> : <StudentHome />}
        </main>
      </div>
    </div>
  );
}

const btnStyle = {
  margin: '0 5px',
  padding: '5px 15px',
  cursor: 'pointer',
  borderRadius: '4px',
  border: '1px solid #4e73df',
  backgroundColor: 'white',
  color: '#4e73df',
  fontWeight: 'bold'
};

export default App;