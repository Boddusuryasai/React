import React, { useContext } from 'react'
import Dashboard from './Dashboard'
import { ThemeContext } from '../context.js/useTheme';
import { themeStyles } from '../utils/setstyle';

const Home = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  console.log("home" , isDarkTheme)
  const styles = themeStyles(isDarkTheme);
  return (
    <div style={styles}>
        <h1>Home Component</h1>
        <Dashboard/>
    </div>
  )
}

export default Home