import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

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
    // Ajustar la zona horaria a la del servidor (GMT+1 en este caso)
    const adjustedDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)); 
    setSelectedDate(adjustedDate);
    handleAppointment(adjustedDate);
  };

  return (
    <div>
      <h2>Seleccione una fecha y hora disponibles</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm" // Utilizar el formato de 24 horas
        timeIntervals={15}
        dateFormat="MMMM d, yyyy HH:mm" // Agregar HH:mm para incluir horas en formato de 24 horas
        minDate={new Date()}
        placeholderText="Seleccione una fecha y hora"
        excludeDates={[{date: new Date("2024/05/02")}]}
        excludeTimes={[
          setHours(setMinutes(new Date("2024/05/03"), 0), 17),
          setHours(setMinutes(new Date("2024/05/03"), 30), 17),
        ]}
      />
    </div>
  );
};

export default AvailabilityCalendar;





















