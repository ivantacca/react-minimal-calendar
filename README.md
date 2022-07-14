# react-minimal-calendar 🗓
A minimal, modern and responsive date picker for react.

## Installation
```
npm i react-minimal-calendar
```

## Usage
```js
import { useState } from 'react';
import Calendar from 'react-minimal-calendar';

function App() {
  const [date, setDate] = useState()
  const month = { index: 5, year: 2022 } // June 2022

  return (
    <div className="App">
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
        headerStyle={{palette: 'primary', opacity: .25}}
        
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

| Key              | Mandatory | Type                       | Default                                    |
|------------------|-----------|----------------------------|--------------------------------------------|
| month            | required  | Object                     | -                                          |
| value            | required  | String 'YYYY-MM-DD' or []  | -                                          |
| onChange         | required  | Function                   | -                                          |
| closedDays       | -         | Array                      | []                                         |
| closedPastDays   | -         | Boolean or 'include-today' | false                                      |
| indicator        | -         | Boolean or 'show-year'     | undefined                                  |
| onIndicatorClick | -         | Function                   | undefined                                  |
| multiselect      | -         | Boolean                    | false                                      |
| header           | -         | Array(7) or Array(0)       | ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] |
| headerStyle      | -         | Object                     | {palette: 'primary', opacity: .25}         |
| layout           | -         | 'fill' or 'fixed'          | 'fixed'                                    |
| palette          | -         | Object                     | [default theme](#default-theme)            |
| daySize          | -         | Integer (px)               | 40                                         |
| fontSize         | -         | Integer (px)               | 14                                         |
| fontFamily       | -         | String                     | 'Helvetica, sans-serif'                    |


### Default Theme
```js
{
  primary: "black",
  selection: "black",
  accent: "white"
}
```

## Update month
It could be tricky to implement a month picker to select the desired month, expecially when you are looking for a sequential month picker, for example a "next month" feature. `react-minimal-calendar` provides a built-in hook called `useMonth`. This hook allows you to safely choose the month to display in the calendar, without implementing the month picker logic from scratch

```js
import {useMonth} from 'react-minimal-calendar'

function Example (){
  const [month, setMonth, setYear] = useMonth(5, 2022) //  June 2022

  return <div>
    <button onClick={prevMonth}>previous</button>
    <Calendar month={month}/>
    <button onClick={nextMonth}>next</button>
  </div>
}

```

The hook returns an array of three objects
|          |                 |                                                                           |
|----------|-----------------|---------------------------------------------------------------------------|
| month    | `{index, year}` | **object** that could be passed to `Calendar` as it is.                   |
| setMonth | `{prev, next}`  | **functions** to set current index to the **previous** or **next** month. |
| setYear  | `{prev, next}`  | **functions** to set **previous** or **next** year.                       |