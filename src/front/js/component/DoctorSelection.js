import React, { useState, useEffect } from 'react';

const DoctorSelection = ({ handleDoctorSelect, selectedSpeciality }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (selectedSpeciality) {
      fetch(process.env.BACKEND_URL + `/doctors?speciality=${selectedSpeciality}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching doctors');
          }
          return response.json();
        })
        .then(data => {
          setDoctors(data.result);
        })
        .catch(error => {
          console.error('Error fetching doctors:', error);
        });
    }
  }, [selectedSpeciality]);

  return (
    <div>
      <h2>Seleccione Doctor</h2>
      <select onChange={(e) => handleDoctorSelect(e.target.value)}>
        <option value="">Seleccionar Doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
        ))}
      </select>
    </div>
  );
};

export default DoctorSelection;

