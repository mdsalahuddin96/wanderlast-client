

import DestinationCard from '@/components/DestinationCard';
import { getAllDestination } from '@/lib/service';
import React from 'react';

const DestinationPage = async() => {
  const allDestination=await getAllDestination();
  return (
      <div className='grid grid-cols-3 gap-4'>
        {allDestination.map(destination=><DestinationCard key={destination._id} destination={destination}></DestinationCard>)}
      </div>
    );
};

export default DestinationPage;