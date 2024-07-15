import React from 'react';
import DashboardSectionHeader from './dashboardSectionHeader';
import PodcastCard from './podcastCard';
import podcastOne from '../assets/dashboardImages/podcastOne.svg';

const PodcastCardContainer = () => (
  <section className='flex gap-[24px] overflow-x-auto no-scrollbar'>
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
      <DashboardSectionHeader title="Podcasts" buttonLabels={['View All']} />
      <PodcastCardContainer />
    </div>
  );
}
