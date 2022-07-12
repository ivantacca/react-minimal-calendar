
import React from "react";
import {
    CalendarContainer,
    CalendarGrid,
    CalendarRow,
    MonthSelectorButton,
    DayContainer,
    DayItem,
    Label,
    FixedWrapper
} from './styled'
import { loader, resolveMonthName, reduceMonthIndex } from './utils'
import propTypes from './schema'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: reduceMonthIndex(this.props.month.index),
            year: this.props.month.year,
            selected: this.props.multiselect ? [this.props.value] : this.props.value
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.month.year !== this.props.month.year){
            this.setState({
                year: this.props.month.year
            })
        }

        if(prevProps.month.index !== this.props.month.index){
            this.setState({
                month: reduceMonthIndex(this.props.month.index),
                year: this.props.month.year,
            })
        }
    }

    select = async (day) => {
        if(typeof(this.props.onChange) === 'function'){
            if(this.props.multiselect){
                let newSelected = []
                if(this.state.selected.includes(day)){
                    newSelected = await this.state.selected.filter(selection => selection !== day)
                    this.setState({ selected:  newSelected});
                }
                else {
                    newSelected = [...this.state.selected, day]
                    this.setState({ selected:  newSelected});
                }
                this.props.onChange(newSelected);

            }
            else {
                if (this.state.selected == day) {
                    this.setState({ selected: null });
                    this.props.onChange(null);
                } else {
                    this.setState({ selected: day });
                    this.props.onChange(day);
                }
            }
        }

    };

    handleIndicatorClick = callback => {
        if (typeof (callback) === 'function')
            callback()
    }

    render() {
        const CalendarRender = (
            <CalendarContainer fontFamily={this.props.fontFamily} palette={this.props.palette || {}}>
                {this.props.indicator ? <MonthSelectorButton onClick={() => this.handleIndicatorClick(this.props.onIndicatorClick)}>
                    <Label>{resolveMonthName(this.state.month)}{this.props.indicator === 'show-year' ? ' ' + this.state.year : null}</Label>
                </MonthSelectorButton> : null}
                <InnerCalendar
                    closedDays={this.props.closedDays || []}
                    closedPastDays={this.props.closedPastDays}
                    select={this.select}
                    selected={this.state.selected}
                    month={this.state.month}
                    year={this.state.year}
                    header={this.props.header}
                    headerStyle={this.props.headerStyle}
                    palette={this.props.palette}
                    daySize={this.props.daySize}
                    fontSize={this.props.fontSize}
                    multiselect={this.props.multiselect}
                />
            </CalendarContainer>
        )

        return (this.props.layout || 'fixed') === 'fixed' ? React.createElement(FixedWrapper, {daySize: this.props.daySize}, CalendarRender) 
        : CalendarRender
    }
}

class InnerCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.calendarData = [];
        this.state = {
            loading: true
        }
    }


    componentDidMount() {
        loader.bind(this)()
    }

    componentDidUpdate(pp, ps) {
        if (pp.month != this.props.month || pp.year != this.props.year) loader.bind(this)()
    }

    isActive = (day) => {
        if(this.props.multiselect){
            return this.props.selected.includes(day)
        }
        else return day == this.props.selected
    }

    render() {
        let weekRender = [];
        let monthRender = [];

        for (const week of this.calendarData) {
            for (const day of week) {
                weekRender.push(
                    <Day
                        dayNumber={day.dayNumber}
                        key={day.key}
                        dayKey={day.key}
                        active={this.isActive(day.key)}
                        select={() => this.props.select(day.key)}
                        closed={day.closed}
                        disabled={day.disabled}
                        palette={this.props.palette}
                        daySize={this.props.daySize}
                        fontSize={this.props.fontSize}
                    />
                )
            }
            monthRender.push(weekRender)
            weekRender = []
        }

        return this.state.loading ? null : (
            <CalendarGrid>
                {this.props.header.length ? <CalendarRow header 
                paletteKey={this.props.headerStyle.palette}
                palette={this.props.palette}
                opacity={this.props.headerStyle.opacity}>
                    {this.props.header.map((day, index) => <DayContainer fontSize={this.props.fontSize} key={index}>{day}</DayContainer>)}
                </CalendarRow> : null}
                {monthRender.map((week, index) => <CalendarRow key={index}>{week}</CalendarRow>)}
            </CalendarGrid>
        );
    }
}

// Day Component
const Day = (props) => {
    // Disabled: "Only for other months"
    return (
        <DayContainer>
            <DayItem
                onClick={props.select}
                disabled={props.disabled || props.closed}
                selected={props.active}
                closed={props.closed}
                daySize={props.daySize}
                palette={props.palette}
                fontSize={props.fontSize}>
                {props.dayNumber}
            </DayItem>
        </DayContainer>
    );
};

Calendar.propTypes = propTypes.schema;
Calendar.defaultProps = propTypes.default;

export default Calendar;

export {useMonth} from './hooks'