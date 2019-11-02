import React, {createContext, useState} from 'react'

const Context = createContext('black')

const ThemeStore = (props) => {
  const [theme, setTheme] = useState('black');
  
  const onThemeChange = theme => {
    setTheme(theme)
  };

  return (
    <Context.Provider value ={theme, onThemeChange}>
      {props.children}
    </Context.Provider>
  )

}

export default ThemeStore;