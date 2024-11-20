import React from 'react';
import {UserRound, Menu, BellIcon} from 'lucide-react'

const Nav = () => {
    return (
        <div className='h-16 flex justify-between items-center'>
            <div className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-300
            bg-clip-text text-transparent px-11'>
                MELO
            </div>
            <div className='hidden md:flex justify-center items-center bg-black text-white rounded-full text-sm'>
                <div className='px-10 py-2'>
                    Movies
                </div>
                <div className='px-10 py-2'>
                    Series
                </div>
            </div>
            <div className='hidden md:flex justify-center items-center mr-4'>
                <div className="relative bg-gray-100 p-2 rounded-full mr-2">
                    <div
                        className="absolute top-0 right-0 bg-red-600 text-white
                        text-xs font-bold rounded-full w-4 h-4 flex
                        items-center justify-center -mt-1 -mr-1">
                        8
                    </div>
                    <div className="relative">
                        <BellIcon className="w-6 h-6 text-gray-600"/>
                    </div>
                </div>
                <div className='rounded-full bg-gray-100 text-gray-500 p-2 mr-2'>
                    <UserRound/>
                </div>
                <div className='text-sm'>
                    Guest
                </div>
            </div>
            <div className='flex justify-center items-center md:hidden mr-4'>
                <Menu/>
            </div>
        </div>
    );
};

export default Nav;