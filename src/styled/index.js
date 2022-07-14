import styled from "styled-components";
import { defaultPalette } from "./const";

// Calendar Style
export const CalendarContainer = styled.div`
  display:flex;
  flex-direction:column;
    flex: 1;
    align-self: stretch;
    * {
        font-family: ${props=>props.fontFamily};
        color: ${props=>props.palette?.primary || defaultPalette.primary};
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
    `opacity: ${props.opacity || props.disabledOpacity || .25};
    * { color: ${props.palette[props.paletteKey] || props.palette?.primary || defaultPalette.primary} }
    margin-bottom: 12px;`
    : null}
`;
export const MonthSelectorButton = styled.button`
  margin-bottom: 20px;
  border: 0;
  background-color: transparent;
  transition: .2s;
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
  font-size: ${props=>props.fontSize}px;
`;

export const DayItem = styled.button`
  width: ${props=>props.daySize}px;
  height: ${props=>props.daySize}px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border:0;
  background-color: ${props => props.selected ? props.palette?.selection || defaultPalette.selection : 'transparent'};
  &:hover{
    cursor: pointer;
  }
  font-size: ${props => props.fontSize}px;
  ${(props) => props.closed ? { textDecoration: "line-through" } : null}
  ${(props) => (props.disabled ? `
    opacity: ${props.disabledOpacity || .25};
    &:hover{
      cursor: default;
    }
  ` : null)}
  ${props => props.selected ? `
    color: ${props.palette?.accent || defaultPalette.accent};
  ` : null}
`;

export const Label = styled.span`
    font-weight: 500;
    font-size: 19px;
`
export const FixedWrapper = styled.div`
    width: calc(${props=>props.daySize}px * 7);
`