import React, { useContext } from 'react'
import { ThemeContext } from '../context.js/useTheme';
import { themeStyles } from '../utils/setstyle';

const Dashboard = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  console.log("dashboard" , isDarkTheme)
  const styles = themeStyles(isDarkTheme);
  return (
    <div style={styles}>
      <h2>Dashboard</h2>
      </div>
  )
}

export default Dashboard