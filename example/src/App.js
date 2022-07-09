import React, { useState } from 'react'
import Calendar from 'react-minimal-calendar'
import {ChevronLeft, ChevronRight} from 'react-feather'
import './index.css';

function App() {
  const [date, setDate] = useState('2022-06-16')
  const [month, setMonth] = useState(5)

  return (
    <div className="App">
      <div className="row">
        <button onClick={()=>setMonth(month-1)}><ChevronLeft/></button>
        <Calendar 
          month={{ year: 2022, month }}
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
        <button onClick={()=>setMonth(month+1)}><ChevronRight/></button>
      </div>
      {date ? <span className="abs-date-indicator">{date}</span> : null}
    </div>
  );
}

export default App;
