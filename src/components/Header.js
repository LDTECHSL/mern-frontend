import React from 'react'
import Logo from './Logo'
import { GrSearch } from 'react-icons/gr'

const Header = () => {
    return (
        <header className='h-16 shadow-md'>
            <div className='h-full container mx-2 flex items-center px-4 justify-between'>
                <div className=''>
                    <Logo w={100} h={60} />
                </div>

                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                    <input type='text' placeholder='Search' className='w-full outline-none'/>
                    <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                        <GrSearch />
                    </div>
                </div>

                <div className=''>
                    User Items
                </div>
            </div>
        </header>
    )
}

export default Header