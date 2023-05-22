import React, { useContext } from 'react'
import { ThemeContext } from '../context.js/useTheme';
import { themeStyles } from '../utils/setstyle';

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  console.log(isDarkTheme , "navbar")
  const styles = themeStyles(isDarkTheme);
  return (
    <div style={styles}>

           <button onClick={toggleTheme}> {isDarkTheme ? "light": "dark"}</button>
    </div>
  )
}

export default Navbar