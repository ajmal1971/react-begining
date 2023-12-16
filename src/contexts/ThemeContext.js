import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'dark',
    modeLabel: 'Dark',
    switchTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export default function useThemeContext() {
    return useContext(ThemeContext);
}