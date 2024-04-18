import React, { useState, useEffect } from 'react';

const DoctorSelection = ({ handleDoctorSelect }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + '/doctors') // Hace una solicitud GET a la ruta '/doctors'
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching doctors');
        }
        return response.json();
      })
      .then(data => {
        setDoctors(data.result);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  return (
    <div>
      <h2>Seleccione Doctor</h2>
      <select onChange={(e) => handleDoctorSelect(e.target.value)}>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
        ))}
      </select>
    </div>
  );
};

export default DoctorSelection;
