import PropTypes from "prop-types";
import { defaultPalette } from "../styled/const";

const isInteger = (props, propName, componentName) => {
    if(!Number.isInteger(props[propName]))
        return new Error ('Invalid value of `' + propName + '` supplied to' + ' `' + componentName + '`. Expected integer.')
}

const isValidHeader = (props, propName, componentName) => {
    if(!Array.isArray(props[propName]) || (props[propName].length !== 7 && props[propName].length !== 0))
        return new Error ('Invalid type of `' + propName + '` supplied to' + ' `' + componentName + '`. Expected Array(7) or Array(0).')
}

export default {
    schema: {
        month: PropTypes.exact({
            index: isInteger,
            year: isInteger,
        }).isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        onChange: PropTypes.func.isRequired,
        closedDays: PropTypes.array,
        closedPastDays: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['include-today'])
        ]),
        indicator: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['show-year'])
        ]),
        onIndicatorClick: PropTypes.func,
        multiselect: PropTypes.bool,
        header: isValidHeader,
        headerStyle: PropTypes.exact({
            opacity: PropTypes.number,
            palette: PropTypes.oneOf(['primary','selection','accent']),
        }),
        layout: PropTypes.oneOf(['fill','fixed']),
        palette: PropTypes.exact({
            primary: PropTypes.string,
            selection: PropTypes.string,
            accent: PropTypes.string,
        }),
        disabledOpacity: PropTypes.number,
        daySize: isInteger,
        fontSize: isInteger,
        fontFamily: PropTypes.string
    },

    default: {
        value: null,
        closedDays: [],
        closedPastDays: false,
        indicator: 'show-year',
        onIndicatorClick: () => alert('react-minimal-calendar is 🔥'),
        multiselect: false,
        header: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        headerStyle: {
            palette: 'primary',
            opacity: .25,
        },
        layout: 'fixed',
        palette: defaultPalette,
        disabledOpacity: .25,
        daySize: 40,
        fontSize: 14,
        fontFamily: 'Helvetica, sans-serif',
    }
}