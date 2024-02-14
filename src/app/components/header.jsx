import React from 'react'
import MenuItem from '@/app/components/menuitem'
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
        <div>
          <Link href={"/"} className='cnt_right flex gap-1 items-center'>
              <span className='text-lg font-bold bg-amber-600 py-1 px-2'>IMDB</span>
              <sapn className='text-xl hidden sm:inline'>Clone</sapn>
          </Link>
        </div>
    </div>
  )
}
