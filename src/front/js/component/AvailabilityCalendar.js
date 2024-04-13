import React from 'react';

const AvailabilityCalendar = ({ availability, handleAppointment }) => {
  return (
    <div>
      <h2>Availability Calendar</h2>
      <p>Select date and time:</p>
      {/* Mostrar el calendario de disponibilidad */}
      <button onClick={handleAppointment}>Confirm Appointment</button>
    </div>
  );
};

export default AvailabilityCalendar;