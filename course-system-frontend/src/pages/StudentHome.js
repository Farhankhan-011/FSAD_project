import React from 'react';

const StudentHome = () => {
  const availableCourses = [
    { id: 1, title: "React Development", instructor: "Dr. Smith" },
    { id: 2, title: "Python for AI", instructor: "Prof. Khanna" }
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h1>Available Courses</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {availableCourses.map(course => (
          <div key={course.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', width: '200px' }}>
            <h3>{course.title}</h3>
            <p>By {course.instructor}</p>
            <button style={{ background: '#1cc88a', color: 'white', border: 'none', padding: '8px', borderRadius: '5px', width: '100%' }}>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentHome;