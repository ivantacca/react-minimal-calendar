import React, { useState } from 'react'
import Calendar from 'react-minimal-calendar'
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from 'react-feather'
import './index.css';

function App() {
  const [date, setDate] = useState('2022-06-16')
  const [month, setMonth] = useState(5)
  const [year, setYear] = useState(2022)

  return (
    <div className="App">
      <div className="row">
        <div className="btn-back-container">
          <button onClick={()=>setYear(year-1)}><ChevronsLeft/></button>
          <button onClick={()=>setMonth(month-1)}><ChevronLeft/></button>
        </div>
        <Calendar 
          month={{ year, month }}
          value={date}
          onChange={setDate}
          closedDays={['2022-06-15']}
          closedPastDays={false}
          indicator={'show-year'}
          onIndicatorClick={()=>alert('react-minimal-calendar is 🔥')}
          multiselect={false}
          header={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
          layout="fixed"
          palette={{
            primary: "darkblue",
            selection: "pink",
            accent: "white"
          }}
          daySize={40}
          fontSize={16}
          fontFamily={'Poppins'}
        />
        <div className="btn-next-container">
          <button onClick={()=>setMonth(month+1)}><ChevronRight/></button>
          <button onClick={()=>setYear(year+1)}><ChevronsRight/></button>
        </div>
      </div>
      {date ? <span className="abs-date-indicator">{date}</span> : null}
    </div>
  );
}

export default App;
