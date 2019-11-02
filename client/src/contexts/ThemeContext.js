import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextWrapper = (props) => {
  const [theme, setTheme] = useState('black');

  const onThemeChange = theme => {
    setTheme(theme)
  };

  return (
    <ThemeContext.Provider value={{theme, onThemeChange: onThemeChange}}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export default ThemeContextWrapper;