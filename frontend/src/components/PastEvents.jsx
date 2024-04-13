"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards.tsx";

export function PastEventsCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden md:my-6 ">
        <h1 className="text-lg md:text-7xl font-normal  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">OUR PAST EVENTS</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    source: "https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=loading",
    
  },
  {
    source: "https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=loading",
    
  },
  {
    source: "https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=loading",
    
  },
  {
    source: "https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=loading",
    
  },
  {
    source: "https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=loading",
    
  },
];
