export const resolveMonthName = index => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[index];
}
export const reduceMonthIndex = index => {
    if( index >= 0 && index <= 11) return index
    else{
        console.warn(`Invalid month index supplied to Calendar. Expected integer between 0 and 11 and got ${index} instead.\nIt seems like you are not using the useMonth hook, learn more at https://github.com/ivantacca/react-minimal-calendar#update-month.`)
        return index - 12 * Math.floor(index / 12)
    }
}

// export const reduceYear = (year, monthIndex) => {
//     if (monthIndex >= 0 && monthIndex < 12) return year
//     else return monthIndex >= 12 ?
//         year + Math.floor(monthIndex / 12)
//         : year + Math.floor(monthIndex / 12)
// }

export const validateMonthIndex = index => {
    if(index > 11 || index < 0){
        console.warn(`Invalid month index supplied to useMonth. Expected integer between 0 and 11 and got ${index} instead. The default month index will be set to 0 (January)`)
        return 0
    }
    else return index;
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
