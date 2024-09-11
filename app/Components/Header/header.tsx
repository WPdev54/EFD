"use cleint"
import { NavLinks } from '@/app/constants'
import Links from '@/components/Links'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import ScrollLogger from '../ScrollLogger'
const Header = () => {


    return (
        <div className='overflow-x-hidden py-1 w-full'>
            <nav
                className="
                flex
                justify-center
                md:space-x-20
                space-x-32
                py-2
                relative
                w-full
                z-50
                mb-5
                items-center
                overflow-hidden
             ">
                <div className="logo flex gap-1 items-center font-bold text-xl">
                    {/* <img src="/logo.png" alt="logoimg" className='w-16 h-16' /> */}
                    <h1 className='bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent'>EFDBD</h1>
                </div>
                    <div className='md:flex hidden gap-8'>
                        {
                            NavLinks.map((l => (
                                <Links name={l.name} link={l.link} key={l.id} />
                            )))
                        }
                    </div>
                    <div className="registerbtn">
                        <Button variant={'Super'}>Registration</Button>
                    </div>
            </nav>
            <ScrollLogger />
        </div>
    )
}

export default Header
