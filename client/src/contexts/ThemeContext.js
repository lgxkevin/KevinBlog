import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextWrapper = (props) => {
  const [theme, setTheme] = useState('/laptopAndGlasses.jpg');

  const onThemeChange = themePassedIn => {
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

export default ThemeContextWrapper;
