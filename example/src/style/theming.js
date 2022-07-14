import { palette } from '../const'

export const getColorAndBackground = (isDarkTheme) => {
    return isDarkTheme ? {
        color: palette.dark.primary,
        backgroundColor: '#161616',
        outline: `7px solid black`

    } :
        {
            color: palette.light.primary,
            backgroundColor: '#f7f7fb',
            outline: `7px solid white`,
        }
        
}

export const getNavStyle = (isDarkTheme) => {
    return isDarkTheme ? {
        borderColor: '#2c2c2c',
    } :
        {
            borderColor: '#e0e2e9',
        }
}

export const getSwitchStyle = (isDarkTheme) => {
    return isDarkTheme ? {
        borderColor: '#b3b3b3',
        backgroundColor: 'white'
    } :
        {
            borderColor: '#e0e2e9',
            backgroundColor: '#d7dae5',
        }
}