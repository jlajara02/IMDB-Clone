import React from 'react'
import InnerNavItem from '@/app/components/inner_nav_item';

export default function inner_navbar() {
  return (
    <div className="flex bg-blue-500 dark:bg-gray-600 py-3 justify-center gap-4">
        <InnerNavItem title="TopTrending" param="fetchTrending"/>
        <InnerNavItem title="TopRated" param="fetchTopRated"/>
    </div>
  )
}
