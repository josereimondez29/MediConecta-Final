import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AvailabilityCalendar = ({ handleAppointment, doctorAvailability }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    console.log('Disponibilidad del médico:', doctorAvailability);
  }, [doctorAvailability]); // Ejecutar cada vez que cambie la disponibilidad del médico

  const transformAvailabilityToExcludeTimes = () => {
    if (!doctorAvailability) {
      return [];
    }
    
    return doctorAvailability.map(availability => {
      const startTime = new Date(`1970-01-01T${availability.start_time}`);
      const endTime = new Date(`1970-01-01T${availability.end_time}`);
      return { start: startTime, end: endTime };
    });
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    handleAppointment(date);
  };

  return (
    <div>
      <h2>Seleccione una fecha y hora disponibles</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate={new Date()}
        placeholderText="Seleccione una fecha y hora"
        excludeTimes={transformAvailabilityToExcludeTimes()}
      />
    </div>
  );
};

export default AvailabilityCalendar;

















