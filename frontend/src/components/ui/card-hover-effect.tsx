import React from 'react';
import { cn } from "../../utils/cn.ts";
import { AnimatePresence, motion } from "framer-motion";
import {Link} from "react-router-dom";
import { useState } from "react";
import Lottie from 'react-lottie';

export const HoverEffect = ({
  items,
  className,
}: {
  items: { 
    title: string;
    description: string;
    link: string;
    image: string;
    animationData: any;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex flex-wrap flex-col md:flex-row  md:space-y-4 w-full h-full ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
        to={item?.link}
        key={item?.link}
        className="relative group  block p-2 h-full w-full"
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-orange-200 dark:bg-orange-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className='flex flex-col md:flex-row '>
              <div className='flex flex-col'>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              </div>
            <CardImage animationData={item.animationData} />
            </div>

          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
// export const CardImage = ({
//   SvgComponent,
//   className,
// }: {
//   SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//   className?: string;
// }) => {
//   return (
//     <SvgComponent
//       className={cn(
//         "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     />
//   );
// };

export function CardImage({ animationData }) {
  const animationOption = {
    loop: true, 
    autoplay: true, 
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

  return <Lottie options={animationOption} height={400} width={400} />;
}