import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './content/AuthContent.tsx'

const theme= createTheme({
  typography:{
    fontFamily:"Roboto Slab, serif", 
    allVariants: {color:"white"},
  },
})
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)