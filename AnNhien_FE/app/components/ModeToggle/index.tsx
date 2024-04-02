"use client"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, IconButton, useTheme } from "@mui/material"
import { useEffect, useState } from 'react';


export function ModeToggle() {
  const [mode, setMode] = useState<boolean>(false);
  useEffect(() => {
    setMode(String(localStorage.getItem('mode')) === 'light' ? false : true);
    if (String(localStorage.getItem('mode') === 'dark')) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.add('dark-mode-navbar')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.remove('dark-mode-navbar')
    }
  }, [])
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.add('dark-mode-navbar')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.remove('dark-mode-navbar')
    } 
  }, [mode])
  const handleClickDarkMode = (check: boolean) => {
    localStorage.setItem('mode', !check ? 'dark' : 'light');
    setMode(!check)
  }
  return (
    <IconButton className='toggle_button' sx={{ ml: 1, color: 'white' }} onClick={() => handleClickDarkMode(mode)} color="inherit">
      {mode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )


}
