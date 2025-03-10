import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="px-4 md:px-8 lg:px-12">
      <section className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-12 lg:gap-20 py-8 md:py-12">
        <div className="flex flex-col justify-center space-y-4 md:space-y-5 text-center md:text-left">
          <p className="text-base md:text-lg">Ready to travel the world?</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Visa migration <br className="hidden sm:block" />
            For a Brighter
            <br className="hidden sm:block" /> Future
          </h1>

          <button className="self-center md:self-start rounded-full border-2 border-[var(--primary)] flex items-center p-2 px-5 hover:bg-[var(--primary)] hover:text-white transition-colors duration-300">
            Contact Us <HiOutlineArrowRight className="ml-3" />
          </button>
        </div>

        <div className="mt-6 md:mt-0">
          <Image
            src="/girl.png"
            className="rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md"
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