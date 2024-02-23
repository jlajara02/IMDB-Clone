/* 'use server' */
import React from 'react'
import MenuItem from '@/app/components/menuitem'
import DarkModeSwitch from '@/app/components/darkModeSwitch'
/* import AlertButton from '@/app/components/alertButton'
import ThemeButton from '@/app/components/themeButton' */
import {AiFillHome} from 'react-icons/ai'
import { IoIosInformationCircle } from "react-icons/io";
import Link from 'next/link';

export default function header() {

  return (
    <div className='cont_header flex justify-between item-center p-3 max-w-12xl'>
        <div className='cnt_left flex gap-4'>
            <MenuItem title="Home" address="/" Icon={AiFillHome} /> 
            <MenuItem title="About" address="about" Icon={IoIosInformationCircle} />
        </div>
        <div className='items-center flex gap-4'>  
{/*       <ThemeButton text="change color!" color="#ff5733" styles="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" />        
          <AlertButton text="click me!" handleClick="This kind of sucks, how to make a global button?" styles="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" />
 */}         
          <DarkModeSwitch/> 
          <Link href={"/"} className='cnt_right flex gap-1 items-center'>
              <span className='text-lg font-bold bg-amber-600 py-1 px-2'>IMDB</span>
              <span className='text-xl hidden sm:inline'>Clone</span>
          </Link>
        </div>
    </div>
  )
}
