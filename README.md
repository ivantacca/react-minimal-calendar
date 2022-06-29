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
        month={{ year: 2022, month }}
        value={date}
        onChange={setDate}
        closedDays={['2022-06-15']}
        closedPastDays={false}
        indicator={'show-year'}
        onIndicatorClick={()=>alert('react-minimal-calendar is 🔥')}
        multiselect={false}
        header={true}
        layout="fixed"
        palette={{
          primary: "darkblue",
          selection: "pink",
          accent: "white"
        }}
        daySize={40}
        fontSize={14}
        fontFamily={'Poppins'}
      />
    </div>
  );
}

export default App;
```

### Props

| Key              | Mandatory | Type                       | Default                         |
|------------------|-----------|----------------------------|---------------------------------|
| month            | required  | Object                     | -                               |
| value            | required  | String 'YYYY-MM-DD'        | -                               |
| onChange         | required  | Function                   | -                               |
| closedDays       | -         | Array                      | []                              |
| closedPastDays   | -         | Boolean or 'include-today' | false                           |
| indicator        | -         | Boolean or 'show-year'     | undefined                       |
| onIndicatorClick | -         | Function                   | undefined                       |
| multiselect      | -         | Boolean                    | false                           |
| header           | -         | Boolean or Array(7)        | true                            |
| layout           | -         | 'fill' or 'fixed'          | 'fixed'                         |
| palette          | -         | Object                     | [default theme](#default-theme) |
| daySize          | -         | Integer (px)               | 40                              |
| fontSize         | -         | Integer (px)               | 14                              |
| fontFamily       | -         | String                     | 'Helvetica, sans-serif'         |


### Default Theme
```
{
  primary: "black",
  selection: "black",
  accent: "white"
}
```

## Change Months