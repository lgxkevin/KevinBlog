import React, {createContext, useState} from 'react'
import IThemeContext from "../Interfaces/IThemeContext";

export const ThemeContext = createContext<IThemeContext | null>(null);

interface ThemeContextWrapperProps {
  children: React.ReactNode
}

export default function ThemeContextWrapper(props: ThemeContextWrapperProps) {
  const [theme, setTheme] = useState<string>('/laptopAndGlasses.jpg');

  const onThemeChange = (themePassedIn: string) => {
    if (themePassedIn !== theme) {
      setTheme(themePassedIn)
    }
  };

  return (
      <ThemeContext.Provider value={{theme, onThemeChange: onThemeChange}}>
        {props.children}
      </ThemeContext.Provider>
  )
};
