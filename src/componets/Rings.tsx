'use client';

import React from 'react';

export default function Rings() {
  return (
    <div className="flex items-center justify-center min-h-[300px] bg-gradient-radial from-[#0f0f0f] to-[#1a1a1a]">
      <div className="rounded-full border-4 border-cyan-300 p-5 ">
        <div className="rounded-full border-4 border-dotted border-green-400 p-4 animate-spin-slow">
          <div className="rounded-full border-4 border-dotted border-blue-500 p-3 animate-spin-slower">
            <div className="rounded-full border-4 border-dotted border-green-400 p-2 animate-spin-reverse-slower">
              <div className="rounded-full border-4 border-dotted border-lime-400 w-6 h-6 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="futuristic-background">
    //   <div className="outer-solid-ring">
    //     <div className="inner-dotted-ring-green-lg">
    //       <div className="inner-dotted-ring-blue-md">
    //         <div className="inner-dotted-ring-green-sm">
    //           <div className="center-dotted-ring-lime" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>