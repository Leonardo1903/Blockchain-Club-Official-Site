import { InfiniteMovingCards } from "./ui/infinite-moving-cards.tsx";
import one from "../assets/Events/1.jpg";
import two from "../assets/Events/2.jpg";
import three from "../assets/Events/3.jpg";
import four from "../assets/Events/4.jpg";
import five from "../assets/Events/5.jpg";
import six from "../assets/Events/6.jpg";
import seven from "../assets/Events/7.jpg";
import eight from "../assets/Events/8.jpg";
import nine from "../assets/Events/9.jpg";
import ten from "../assets/Events/10.jpg";
import eleven from "../assets/Events/11.jpg";
import twelve from "../assets/Events/12.jpg";
import thirteen from "../assets/Events/13.jpg";
import fourteen from "../assets/Events/14.jpg";
import fifteen from "../assets/Events/15.jpg";

export function PastEventsCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden md:my-6 ">
      <h1 className="text-lg md:text-7xl font-normal  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 mb-6">
        OUR PAST EVENTS
      </h1>
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
    source: one,
  },
  {
    source: two,
  },
  {
    source: three,
  },
  {
    source: four,
  },
  {
    source: five,
  },
  {
    source: six,
  },
  {
    source: seven,
  },
  {
    source: eight,
  },
  {
    source: nine,
  },
  {
    source: ten,
  },
  {
    source: eleven,
  },
  {
    source: twelve,
  },
  {
    source: thirteen,
  },
  {
    source: fourteen,
  },
  {
    source: fifteen,
  },
  
];
