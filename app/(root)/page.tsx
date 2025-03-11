import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Page = () => {
  return (
    <main className="px-4 md:px-8 lg:px-12 overflow-x-hidden">
      <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-5 lg:gap-36 py-8 md:py-12">
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

          <button className="self-center md:self-start rounded-full border-2 border-[var(--primary)] flex items-center p-2 px-5 hover:bg-[var(--primary)]  transition-all duration-300 hover:scale-105 active:scale-95 group">
            Contact Us
            <span className="ml-3 inline-flex transition-transform duration-300 group-hover:translate-x-2">
              <HiOutlineArrowRight />
            </span>
          </button>
        </div>

        {/* Image - Above text on mobile, Right on desktop */}
        <div className="mt-0 mb-6 md:mt-0 md:mb-0 animate-fade-in relative inline-block">
          {/* Main Image */}
          <Image
            src="/girl.png"
            className="rounded-lg md:max-w-sm md:flex-shrink-0 lg:max-w-md shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            alt="GlobeTrek Logo"
            width={300}
            height={300}
            priority
            style={{ height: "auto" }}
          />

          {/* Avatars positioned around the image */}

          {/* Germany (de.png) - Top Left */}
          <div className="absolute top-[10px] left-[10px] bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center">
            <Avatar>
              <AvatarImage src="de.png" alt="Germany Flag" />
              <AvatarFallback>DE</AvatarFallback>
            </Avatar>
          </div>

          {/* Spain (es.png) - Bottom Left */}
          <div className="absolute bottom-[-10px] left-[-10px] bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center">
            <Avatar>
              <AvatarImage src="es.png" alt="Spain Flag" />
              <AvatarFallback>ES</AvatarFallback>
            </Avatar>
          </div>

          {/* UK (gb.png) - Top Right */}
          <div className="absolute top-[50px] right-[-10px] bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center">
            <Avatar>
              <AvatarImage src="gb.png" alt="UK Flag" />
              <AvatarFallback>GB</AvatarFallback>
            </Avatar>
          </div>

          {/* Random Extra Flag (France - fr.png) - Bottom Right */}
          {/* <div className="absolute bottom-[-10px] right-[-10px] bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center">
            <Avatar>
              <AvatarImage src="fr.png" alt="France Flag" />
              <AvatarFallback>FR</AvatarFallback>
            </Avatar>
          </div> */}
          {/* Random Extra Flag (France - fr.png) - Bottom Right */}
          <div className="absolute bottom-[80px] right-[-10px] bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center">
            <Avatar>
              <AvatarImage src="ae.png" alt="France Flag" />
              <AvatarFallback>AE</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
      {/* What We Offer Section */}
      <section className="py-12 sm:py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center mb-2">
              <Image
                src="/GlobeTrek.png"
                alt="GlobeTrek Logo"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">
              WHAT WE OFFER
            </h2>
            <p className="text-base sm:text-lg text-green-700">
              Your Future Awaits
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Free Consultations */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg animation-fade-in transition-shadow duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row">
                {/* Image container */}
                <div className="w-full sm:w-2/5 h-48 sm:h-auto p-5 mb-20 sm:mb-0 ">
                  <Image
                    src="/consultation.png"
                    alt="Free Consultations"
                    width={250}
                    height={250}
                  />
                </div>

                {/* Content container */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      Free Consultations
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Et purus duis sollicitudin dignissim habitant. Egestas
                      nulla quis the venenatis cras sed eu.
                    </p>
                  </div>

                  {/* Button and icon row */}
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>

                    {/* Service icon */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10">
                      <svg
                        className="w-full h-full text-green-700 opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Visa Applications */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row">
                {/* Image container */}
                <div className="w-full sm:w-2/5 h-48 sm:h-auto p-5 mb-20 sm:mb-0">
                  <Image
                    src="/visaApplications.png"
                    alt="Visa Applications"
                    width={250}
                    height={250}
                  />
                </div>

                {/* Content container */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      Visa Applications
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Et purus duis sollicitudin dignissim habitant. Egestas
                      nulla quis the venenatis cras sed eu.
                    </p>
                  </div>

                  {/* Button and icon row */}
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>

                    {/* Service icon */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10">
                      <svg
                        className="w-full h-full text-green-700 opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Migration */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row">
                {/* Image container */}
                <div className="w-full sm:w-2/5 h-48 sm:h-auto p-5 mb-20 sm:mb-0 ">
                  <Image
                    src="/migration.png"
                    alt="migration"
                    width={250}
                    height={250}
                  />
                </div>

                {/* Content container */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      Migration
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Et purus duis sollicitudin dignissim habitant. Egestas
                      nulla quis the venenatis cras sed eu.
                    </p>
                  </div>

                  {/* Button and icon row */}
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>

                    {/* Service icon */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10">
                      <svg
                        className="w-full h-full text-green-700 opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Sponsor Connections */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02]">
              <div className="flex flex-col sm:flex-row ">
                {/* Image container */}
                <div className="w-full sm:w-2/5 h-48 sm:h-auto p-5 mb-20 sm:mb-0">
                  <Image
                    src="/sponsorConnection.png"
                    alt="Sponsored connections"
                    width={250}
                    height={250}
                  />
                </div>

                {/* Content container */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      Sponsor Connections
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Et purus duis sollicitudin dignissim habitant. Egestas
                      nulla quis the venenatis cras sed eu.
                    </p>
                  </div>

                  {/* Button and icon row */}
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>

                    {/* Service icon */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10">
                      <svg
                        className="w-full h-full text-green-700 opacity-80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
