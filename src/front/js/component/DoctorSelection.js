import React from 'react';

const DoctorSelection = ({ doctors, handleDoctorSelect }) => {
  return (
    <div>
      <h2>Select Doctor</h2>
      <select onChange={(e) => handleDoctorSelect(e.target.value)}>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
        ))}
      </select>
    </div>
  );
};

export default DoctorSelection;