'use client'
import React from 'react';
import { FaRegMoon, FaMoon } from "react-icons/fa6";
import { IoMdSunny } from "react-icons/io";
import { useTheme } from 'next-themes';

/* export default function darkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme()
    const  currentTheme = theme === 'system' ? systemTheme : theme

    console.log("currentTheme:" + currentTheme)
  return (
    <div>{currentTheme === 'dark' ? 
        <IoMdSunny onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/>:
        <FaMoon onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500'/>}</div>
  )
}
 */

function darkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme()
    const  currentTheme = theme === 'system' ? systemTheme : theme
    //console.log("currentTheme:" + currentTheme)
  return (
    <div>{currentTheme === 'dark' ? 
        <IoMdSunny onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/>:
        <FaMoon onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500'/>}</div>
  )
}

export default darkModeSwitch
