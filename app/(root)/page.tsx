import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="px-4 md:px-8 lg:px-12 overflow-x-hidden">
      <section className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-8 md:gap-12 lg:gap-20 py-8 md:py-12">
        {/* Text Content - Below image on mobile, Left on desktop */}
        <div className="flex flex-col justify-center space-y-4 md:space-y-5 text-center md:text-left w-full md:w-auto animate-fade-in">
          <p className="text-base md:text-lg animate-slide-up">
            Ready to travel the world?
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold animate-slide-up">
            Visa migration <br className="hidden sm:block" />
            For a Brighter
            <br className="hidden sm:block" /> Future
          </h1>

          <button className="self-center md:self-start rounded-full border-2 border-[var(--primary)] flex items-center p-2 px-5 hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 group">
            Contact Us 
            <span className="ml-3 inline-flex transition-transform duration-300 group-hover:translate-x-2">
              <HiOutlineArrowRight />
            </span>
          </button>
        </div>

        {/* Image - Above text on mobile, Right on desktop */}
        <div className="mt-0 mb-6 md:mt-0 md:mb-0 animate-fade-in">
          <Image
            src="/girl.png"
            className="rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            alt="GlobeTrek Logo"
            width={300}
            height={300}
            priority
            style={{ height: 'auto' }}
          />
        </div>
      </section>
    </main>
  );
};

export default Page;