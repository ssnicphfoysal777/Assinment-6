import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="hero container mx-auto bg-base-200 min-h-[60vh]">
      <div className="hero-content grid grid-cols-2 gap-8">

        <div>
          <span className='text-[#C2F800]'>WORKOUT LIBRARY</span>
          <h1 className=" mt-4 text-5xl font-bold">TRAIN WITH INTENT. LOG
            EVERY SET.</h1>
          <p className="py-6">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <button className="bg-[#C2F800] rounded-md text-black btn btn-primary">BROWSE WORKOUTS</button>
        </div>

        <div className='flex justify-center'>
          <Image src="/banner.png" alt="Exercise" width={334} height={334} />
        </div>
      </div>
    </div>

  );
};

export default Banner;