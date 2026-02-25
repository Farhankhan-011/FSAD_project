import React, { useState } from 'react';

const AdminDashboard = () => {
  // 1. Dynamic State (This is B.Tech Level)
  const [courses, setCourses] = useState([
    { id: 1, title: "Java Full Stack", enrollment: 450, status: "Live" },
    { id: 2, title: "UI/UX Design", enrollment: 320, status: "Draft" },
    { id: 3, title: "Python Data Science", enrollment: 150, status: "Live" }
  ]);

  const stats = [
    { label: "Total Students", value: "1,240", color: "#4e73df" },
    { label: "Active Courses", value: courses.length, color: "#1cc88a" },
    { label: "Assignments", value: "45", color: "#f6c23e" }
  ];

  return (
    <div style={{ padding: '30px', backgroundColor: '#f8f9fc', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#5a5c69' }}>Educator Control Panel</h1>
        <button 
          onClick={() => alert("Redirecting to Course Creator...")}
          style={{ background: '#4e73df', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          + Create New Course
        </button>
      </header>
      
      {/* Stat Cards using Mapping */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ ...cardStyle, borderLeft: `5px solid ${stat.color}` }}>
            <h4 style={{ color: stat.color, margin: '0 0 10px 0', fontSize: '12px', textTransform: 'uppercase' }}>{stat.label}</h4>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '40px', color: '#5a5c69' }}>Course Management</h2>
      <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f8f9fc' }}>
            <tr style={{ textAlign: 'left', color: '#4e73df' }}>
              <th style={tableHeader}>Course Title</th>
              <th style={tableHeader}>Enrollment</th>
              <th style={tableHeader}>Status</th>
              <th style={tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id} style={{ borderBottom: '1px solid #e3e6f0' }}>
                <td style={tableCell}>{course.title}</td>
                <td style={tableCell}>{course.enrollment}</td>
                <td style={tableCell}>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '12px',
                    backgroundColor: course.status === 'Live' ? '#1cc88a' : '#858796',
                    color: 'white'
                  }}>{course.status}</span>
                </td>
                <td style={tableCell}>
                  <button style={{ marginRight: '5px' }}>Edit</button>
                  <button style={{ color: 'red' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const cardStyle = { background: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' };
const tableHeader = { padding: '15px', fontSize: '14px' };
const tableCell = { padding: '15px', color: '#858796' };

export default AdminDashboard;