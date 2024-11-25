import React from 'react';

const Feature = () => {
    return (
        <div className='md:flex h-32 md:h-60 mt-10'>
            <div className='md:w-5/12 bg-red-300 rounded-2xl h-full'>
            </div>
            <div className='md:w-7/12 bg-blue-300 md:ml-6 rounded-2xl h-full hidden md:block'>
            </div>
        </div>
    );
};

export default Feature;