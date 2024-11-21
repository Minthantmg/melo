import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import {categories} from "@/type";

const Hero = () => {
    return (
        <Carousel className="mt-10">
            <CarouselContent>
                {categories.map((category, index) => (
                    <CarouselItem key={index} className='md:basis-1/6 basis-1/2'>
                        <div className='bg-gray-100 p-4 rounded-2xl text-center text-sm select-none'>
                            {category.name}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default Hero;