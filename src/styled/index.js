import styled from "styled-components";

// Calendar Style
export const CalendarContainer = styled.div`
  display:flex;
  flex-direction:column;
    flex: 1;
    align-self: stretch;
    * {
        font-family: ${props=>props.fontFamily || 'Helvetica, sans-serif'};
        color: ${props=>props.palette?.primary || 'black'};
    }
`;
export const CalendarGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
`;
export const CalendarRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  ${props=>props.header ?
    `opacity:.25;
    margin-bottom: 12px;`
    : null}
`;
export const MonthSelectorButton = styled.button`
  margin-bottom: 20px;
  border: 0;
  background-color: transparent;
  &:hover{
    cursor: pointer;
    opacity: .5;
  }
`;

// Day Style
export const DayContainer = styled.div`
  display:flex;
  flex: 1;
  justify-content:center;
  font-size: ${props=>props.fontSize || 14}px;
`;

export const DayItem = styled.button`
  width: ${props=>props.daySize || 40}px;
  height: ${props=>props.daySize || 40}px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border:0;
  background-color: ${props => props.selected ? props.palette?.selection || 'black' : 'transparent'};
  &:hover{
    cursor: pointer;
  }
  font-size: ${props => props.fontSize || 14}px;
  ${(props) => props.closed ? { textDecoration: "line-through" } : null}
  ${(props) => (props.disabled ? `
    opacity: 0.25;
    &:hover{
      cursor: default;
    }
  ` : null)}
  ${props => props.selected ? `
    color: ${props.palette?.accent || 'white'};
  ` : null}
`;

export const Label = styled.span`
    font-weight: 500;
    font-size: 19px;
`
export const FixedWrapper = styled.div`
    width: calc(${props=>props.daySize || 40}px * 7);
`