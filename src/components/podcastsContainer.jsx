import React from 'react';
import Button from './button';
import PodcastCard from './podcastCard';
import podcastOne from '../assets/dashboardImages/podcastOne.svg';

const PodcastsHeader = ({ title }) => (
  <div className='flex justify-between items-center'>
    <h2 className='text-xlText font-semiBold'>{title}</h2>
    <Button label="View All" />
  </div>
);

const PodcastCardContainer = () => (
  <section className='flex gap-[24px]'>
    <PodcastCard img={podcastOne} title="Mind Matters" category="Premium" status="online" />
    <PodcastCard img={podcastOne} title="Tech Talk" category="Premium" status="offline" />
    <PodcastCard img={podcastOne} title="History Quest" category="Premium" status="online" />
    <PodcastCard img={podcastOne} title="Mystery Junction" category="Premium" status="online" />
    <PodcastCard img={podcastOne} title="Creative Minds" category="Premium" status="offline" />
  </section>
);

export default function PodcastContainer() {
  return (
    <div className='flex flex-col gap-[20px]'>
      <PodcastsHeader title="Podcasts" />
      <PodcastCardContainer />
    </div>
  );
}
