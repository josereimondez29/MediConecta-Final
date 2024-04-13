import React from 'react';

const SpecialitySelection = ({ specialities, handleSpecialitySelect }) => {
  return (
    <div>
      <h2>Select Speciality</h2>
      <select onChange={(e) => handleSpecialitySelect(e.target.value)}>
        {specialities.map((speciality) => (
          <option key={speciality.id} value={speciality.id}>{speciality.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SpecialitySelection;