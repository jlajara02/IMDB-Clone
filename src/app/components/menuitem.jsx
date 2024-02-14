import Link from 'next/link'
import React from 'react'

export default function mainnav({title, address, Icon}) {
  return (
    <div>
      <Link href={address}>
        <Icon className="hover:text-amber-500 text-2xl sm:hidden"/>
        <p className='uppercase hidden sm:inline'>{title}</p>
      </Link>
    </div>
  )
}
