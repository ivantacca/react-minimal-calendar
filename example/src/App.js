import './index.css';
import React, { useState } from 'react'
import Calendar, {useMonth} from 'react-minimal-calendar'
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from 'react-feather'
import {palette} from './const'
import {AppContainer, Row, ArrowButton, DateIndicator, ButtonContainer} from './styled'

function App() {
  const [date, setDate] = useState('2022-06-16')
  const [month, setMonth, setYear] = useMonth(5, 2022);
  const [theme, setTheme] = useMonth('light')

  return (
    <AppContainer>
      <Row>
        <ButtonContainer>
          <ArrowButton onClick={setYear.prev}><ChevronsLeft/></ArrowButton>
          <ArrowButton onClick={setMonth.prev}><ChevronLeft/></ArrowButton>
        </ButtonContainer>
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
          palette={palette.light}
          daySize={40}
          fontSize={16}
          fontFamily={'Poppins'}
        />
        <ButtonContainer>
          <ArrowButton onClick={setMonth.next}><ChevronRight/></ArrowButton>
          <ArrowButton onClick={setYear.next}><ChevronsRight/></ArrowButton>
        </ButtonContainer>
      </Row>
      <DateIndicator>{date || 'No date selected.'}</DateIndicator>
    </AppContainer>
  );
}

export default App;
