'use client'
import { ThemeProvider } from 'next-themes';

function providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'> 
        <div className="text-black bg-sky-100  dark:text-gray-400 dark:bg-gray-700 min-h-screen">
            {children}
        </div>
    </ThemeProvider>
  )
}

export default providers


/* import React from 'react'

export default function providers() {
  return (
    <div>providers</div>
  )
} */
