import React from 'react'
import Button from './button';



const PodcastsHeader = () => (
  <div className='flex justify-between items-center'>
    <h3 className='text-xlText font-semiBold'>Podcasts</h3>
    <Button label="View All" />
  </div>
);

export default function PodcastContainer() {
  return (
    <div>
      <PodcastsHeader />
    </div>
  );
}
