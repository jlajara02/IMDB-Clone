'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function inner_nav_item({title, param}) {
    const SearchParams = useSearchParams();
    const genre = SearchParams.get('genre');
  return (
    <div>
        <Link href={`/?genre=${param}`} 
        className={` text-amber-500 hover:text-stone-50 font-semibold  
        ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-lg': 
        ''}`}>{title}</Link>
    </div>
  )
}
