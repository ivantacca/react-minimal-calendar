import React, { useState } from 'react'
import './index.css';
import Calendar from 'react-minimal-calendar'

function App() {
  const [date, setDate] = useState('2022-06-16')
  const [month, setMonth] = useState(5)

  return (
    <div className="App">
      <Calendar 
        month={{ year: 2022, month }} // mandatory
        value={date} // mandatory (required for initial selection)
        onChange={setDate}  // mandatory
        closedDays={['2022-06-15']} // optional
        closedPastDays={false} // optional boolean or 'include-today'
        indicator={()=>alert('react-minimal-calendar is 🔥')} // optional (boolean or callback)
        multiselect={false} // optional (boolean ...)
        header={true} // optional bool or Array(7)
        layout="fixed" // optional (fill or fixed, def. fixed)
        palette={{
          primary: "darkblue",
          selection: "pink",
          accent: "white"
        }} // optional (boolean or callback)
        daySize={40} // optional (int, def. 40)
        fontSize={16} // optional (int, def. 14)
        fontFamily={'Gotham'}
      />

      <span style={{marginTop: 50, fontSize: 14, color: "darkblue"}}>{date || 'No date selected.'}</span>
      <span style={{marginTop: 50, fontSize: 14, color: "darkblue"}}>{month}</span>
      <span>
        <button onClick={()=>setMonth(month-1)}>Previous month</button>
        <button onClick={()=>setMonth(month+1)}>Next month</button>
      </span>
    </div>
  );
}

export default App;
