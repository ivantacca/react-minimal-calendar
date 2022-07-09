import PropTypes from "prop-types";

export default {
    schema: {
        month: PropTypes.object.isRequired,
        value: PropTypes.string.isRequired,
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
        header: PropTypes.array, // specific length (Array(7))
        layout: PropTypes.oneOf(['fill','fixed']),
        palette: PropTypes.exact({
            primary:  PropTypes.string,
            selection:  PropTypes.string,
            accent:  PropTypes.string,
        }),
        daySize:  PropTypes.number, //integer
        fontSize:  PropTypes.number, //integer
        fontFamily:  PropTypes.string,
    },

    default: {
        closedDays: [],
        closedPastDays: false,
        indicator: 'show-year',
        onIndicatorClick: () => alert('react-minimal-calendar is 🔥'),
        multiselect: false,
        header: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        layout: 'fixed',
        palette: {
            primary: "black",
            selection: "black",
            accent: "white"
        },
        daySize: 40,
        fontSize: 14,
        fontFamily: 'Helvetica, sans-serif',
    }
}