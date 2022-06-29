export const resolveHeader = header => {
    if (header)
        return header.length === 7 ? header : ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    else return []
}

export const resolveMonthName = index => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[index];
}
export const reduceMonthIndex = index => {
    if (index >= 0)
        return index < 12 ? index : index - 12 * Math.floor(index / 12)
    else
        return index - 12 * Math.floor(index / 12)
}
export const reduceYear = (year, monthIndex) => {
    if (monthIndex >= 0 && monthIndex < 12) return year
    else return monthIndex >= 12 ?
        year + Math.floor(monthIndex / 12)
        : year + Math.floor(monthIndex / 12)
}

export const validateProps = props => {
    const missingMandatoryProps = ["month","value","onChange"]
    .reduce((missing, property)=>{
        if(!Object.keys(props).includes(property))
        missing.push(property)
        return missing
    },[])
    
    if(missingMandatoryProps.length > 0)
        throw `The following required props are missing: ${missingMandatoryProps.join(', ')}`
    else return {
        month: reduceMonthIndex(props.month.month),
        year: props.month.year,
        selected: props.multiselect ? [props.value] : props.value
    }
}

export function loader() {
    this.calendarData = [];
    const monthFirstWeekDay =
        new Date(this.props.year, this.props.month, 1).getDay() || 7;
    let weekData = [];

    //// previous month ////
    for (let i = monthFirstWeekDay - 2; i >= 0; i--) {
        let currentDay = new Date(this.props.year, this.props.month, -i);
        const dateKey = {
            year: currentDay.getFullYear(),
            month: currentDay.getMonth() + 1,
            day: currentDay.getDate(),
            disabled: true,
        };
        const key = `${dateKey.year}-${dateKey.month.toString().padStart(2, "0")}-${dateKey.day.toString().padStart(2, "0")}`;
        weekData.push({ disabled: true, dayNumber: currentDay.getDate(), key })
    }

    //// current month ////
    for (
        let i = 1;
        i <= new Date(this.props.year, this.props.month + 1, 0).getDate();
        i++
    ) {
        const currentDay = new Date(this.props.year, this.props.month, i);

        const dateKey = {
            year: currentDay.getFullYear(),
            month: currentDay.getMonth() + 1,
            day: currentDay.getDate(),
        };
        const key = `${dateKey.year}-${dateKey.month.toString().padStart(2, "0")}-${dateKey.day.toString().padStart(2, "0")}`;
        const isDisabled = this.props.closedDays.includes(key) ||
            this.props.closedPastDays === true && currentDay < new Date().setHours(0, 0, 0, 0) ||
            this.props.closedPastDays === 'include-today' && currentDay <= new Date().setHours(0, 0, 0, 0)

        weekData.push({
            key,
            dayNumber: currentDay.getDate(),
            closed: isDisabled
        })
        if (new Date(this.props.year, this.props.month, i).getDay() == 0) {
            this.calendarData.push(weekData);
            weekData = [];
        }
    }

    //// next month ////
    let daysToFill =
        42 -
        (monthFirstWeekDay -
            1 +
            new Date(this.props.year, this.props.month + 1, 0).getDate());
    for (let i = 1; i < daysToFill + 1; i++) {
        const currentDay = new Date(this.props.year, this.props.month + 1, i);
        const dateKey = {
            year: currentDay.getFullYear(),
            month: currentDay.getMonth() + 1,
            day: currentDay.getDate()
        };
        const key = `${dateKey.year}-${dateKey.month.toString().padStart(2, "0")}-${dateKey.day.toString().padStart(2, "0")}`;

        weekData.push({
            disabled: true,
            dayNumber: currentDay.getDate(),
            key,
        });

        if (currentDay.getDay() == 0) {
            this.calendarData.push(weekData);
            weekData = [];
        }
    }
    this.setState({ loading: false })
}
