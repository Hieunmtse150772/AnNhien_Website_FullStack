"use client"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, IconButton, useTheme } from "@mui/material"
import { useEffect, useState } from 'react';


export function ModeToggle() {
  const currentMode = localStorage.getItem('mode');
  const [mode, setMode] = useState<boolean>(currentMode === 'light' ? false : true);
  const handleClickDarkMode = () => {
    setMode(!mode)
    console.log(mode ? 'dark' : 'light');
  }
  useEffect(() => {
    localStorage.setItem('mode', mode ? 'dark' : 'light');
    if (mode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.add('dark-mode-navbar')

    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.remove('dark-mode-navbar')
    }

  }, [mode])
  return (
    <IconButton className='toggle_button' sx={{ ml: 1, color: 'white' }} onClick={handleClickDarkMode} color="inherit">
      {mode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}
