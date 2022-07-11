import './index.css';
import React, { useState } from 'react'
import Calendar, {useMonth} from 'react-minimal-calendar'
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from 'react-feather'
import {palette} from './const'

function App() {
  const [date, setDate] = useState('2022-06-16')
  const [month, setMonth, setYear] = useMonth(5, 2022);
  const [theme, setTheme] = useMonth('light')


  return (
    <div className="app">
      <div className="row">
        <div className="btn-back-container">
          <button onClick={setYear.prev}><ChevronsLeft/></button>
          <button onClick={setMonth.prev}><ChevronLeft/></button>
        </div>
        <Calendar 
          month={month}
          value={date}
          onChange={setDate}
          closedDays={['2022-06-15']}
          closedPastDays={false}
          indicator={'show-year'}
          onIndicatorClick={()=>alert('react-minimal-calendar is 🔥')}
          multiselect={false}
          header={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
          layout="fixed"
          palette={palette.light}
          daySize={40}
          fontSize={16}
          fontFamily={'Poppins'}
        />
        <div className="btn-next-container">
          <button onClick={setMonth.next}><ChevronRight/></button>
          <button onClick={setYear.next}><ChevronsRight/></button>

        </div>
      </div>
      {date ? <span className="abs-date-indicator">{date}</span> : null}
    </div>
  );
}

export default App;
