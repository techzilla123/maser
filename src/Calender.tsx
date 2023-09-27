import  { useState } from 'react';
import './Calender.css';

const Calendar = () => {
  // Initialize the current date
  const currentDate = new Date();

  // Create an array of month names
  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  // Create an array of day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // State to manage the current month
  const [currentDateState, setCurrentDateState] = useState(currentDate);

  // Function to change to the previous month
  const handlePrevMonth = () => {
    const prevDate = new Date(currentDateState);
    prevDate.setMonth(prevDate.getMonth() - 1);
    setCurrentDateState(prevDate);
  };

  // Function to change to the next month
  const handleNextMonth = () => {
    const nextDate = new Date(currentDateState);
    nextDate.setMonth(nextDate.getMonth() + 1);
    setCurrentDateState(nextDate);
  };

  // Calculate the number of days in the current month
  const daysInMonth = getDaysInMonth(currentDateState.getFullYear(), currentDateState.getMonth());

  // Create an array of days in the current month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>{'<'}</button>
        <div className="calendar-month">
          {monthNames[currentDateState.getMonth()]} {currentDateState.getFullYear()}
        </div>
        <button onClick={handleNextMonth}>{'>'}</button>
      </div>
      <div className="calendar-body">
        <div className="calendar-row">
          {dayNames.map(day => (
            <div key={day} className="calendar-cell">
              <span className="day-name">{day}</span>
            </div>
          ))}
        </div>
        {daysArray.map(day => (
           <div className="day" ><div key={day} className="calendar-cell">
           {day}</div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Calendar;
