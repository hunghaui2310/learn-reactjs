import { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('dark');

    const toggleChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const value = {
        theme,
        toggleChange
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }