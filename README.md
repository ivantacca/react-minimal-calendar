# react-minimal-calendar 🗓
A minimal, modern and responsive date picker for react.

## Installation
```
npm i react-minimal-calendar
```

## Usage
```javascript
import { useState } from 'react';
import Calendar from 'react-minimal-calendar';

function App() {
  const [date, setDate] = useState()
  const [month, setMonth] = useState(5) // June
  
  return (
    <div className="App">
    
      <Calendar 
        month={{ year: 2022, month }} // mandatory
        value={date} // mandatory
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
        fontFamily={'Gotham'} // optional
      />
      
    </div>
  );
}

export default App;
```
