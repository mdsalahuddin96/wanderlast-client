import FilterDestinations from '@/components/FilterDestinations';
import React from 'react';

const destinationPageLayout = ({children}) => {
    return (
        <div className='container mx-auto'>
            <div className='my-10 space-y-3'>
                <h1 className='text-6xl'>Explore All Destinations</h1>
                <p className="text-lg text-gray-600">Find your perfect travel experience from our curated collection</p>
            </div>
            <div className='mb-10'>
                <FilterDestinations/>
            </div>
            {children}
        </div>
    );
};

export default destinationPageLayout;