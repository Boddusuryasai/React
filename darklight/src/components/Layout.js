import React, { useContext } from 'react'
import Navbar from "./Navbar"
import { ThemeContext } from '../context.js/useTheme';
import Home from './Home';
import { themeStyles } from '../utils/setstyle';
const Layout = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const styles = themeStyles(isDarkTheme);
  return (
    <div style={styles}>
        <Navbar/>
        <Home/>
    </div>
  )
}

export default Layout