import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export default function Header() {
  return (
  <header className='p-2'>
    <div className="flex justify-between items-center px-[2%] py-4">
        <div className="flex gap-4">
           <p className='flex justify-center items-center text-[12px] gap-1 font-semibold'><Icon icon={'eva:phone-outline'}/>1-800-242-2728</p>
           <p className='flex justify-center items-center text-[12px] gap-1 font-semibold'><Icon icon={'bx:map'}/>Stores</p>
           <p className='flex justify-center items-center text-[12px] gap-1 font-semibold'><Icon icon={'iconamoon:headphone-light'}/>Virtual Appointment</p>
        </div>
        <div className="flex gap-5">
            <div className="relative">
            <input className='' type="search" name="" id=""  />
            <Icon className='absolute top-1 right-2' icon={'eva:search-outline'} />
            </div>
            <Icon icon={'fluent-mdl2:contact'} />
            <Icon icon={'icon-park-outline:like'} />
            <Icon icon={'octicon:lock-16'} />
        </div>
    </div>
    <div className="">
        <img width={120} src="/img/logo.svg" alt="" />
    </div>
  </header>
  )
}
