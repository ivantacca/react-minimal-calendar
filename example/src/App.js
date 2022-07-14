import './index.css';
import React, { useState } from 'react'
import Calendar, {useMonth} from 'react-minimal-calendar'
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from 'react-feather'
import {palette} from './const'
import {AppContainer, Nav, Row, ArrowButton, DateIndicator, ButtonContainer} from './style'
import Switch from './components/Switch';
import { getColorAndBackground, getNavStyle, getSwitchStyle } from './style/theming';

function App() {
  const [date, setDate] = useState('2022-06-16')
  const [month, setMonth, setYear] = useMonth(5, 2022);
  const [isDarkTheme, updateTheme] = useState(false);

  const [calendarHover, setCalendarHover] = useState(false);

  return (
    <AppContainer style={{backgroundColor: isDarkTheme ? 'black' : 'white'}}>
      <Nav style={getNavStyle(isDarkTheme)}>
        <span>
          <div>{isDarkTheme? '🌚':'🌞'}</div>
          <Switch
            styled={getSwitchStyle(isDarkTheme)}
            value={isDarkTheme}
            onChange={()=>updateTheme(!isDarkTheme)} />
        </span>
      </Nav>
      <Row>
        <ButtonContainer>
          <ArrowButton style={getColorAndBackground(isDarkTheme)} onClick={setYear.prev}><ChevronsLeft/></ArrowButton>
          <ArrowButton style={getColorAndBackground(isDarkTheme)} onClick={setMonth.prev}><ChevronLeft/></ArrowButton>
        </ButtonContainer>
        <div
          onMouseEnter={()=>setCalendarHover(true)}
          onMouseLeave={()=>setCalendarHover(false)}>
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
            palette={isDarkTheme ? palette.dark : palette.light}
            daySize={40}
            fontSize={16}
            fontFamily={'Poppins'}
          />
        </div>
        <ButtonContainer>
          <ArrowButton style={getColorAndBackground(isDarkTheme)} onClick={setMonth.next}><ChevronRight/></ArrowButton>
          <ArrowButton style={getColorAndBackground(isDarkTheme)} onClick={setYear.next}><ChevronsRight/></ArrowButton>
        </ButtonContainer>
      </Row>
      <DateIndicator style={getColorAndBackground(isDarkTheme)} isVisible={(Array.isArray(date) ? date.length : date) || calendarHover}>
        {(Array.isArray(date) && !date.length) || !date ? 'No date selected.' : date.join ? date.join(', ') : date}
      </DateIndicator>
    </AppContainer>
  );
}



export default App;
