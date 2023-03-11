import React from 'react';
import img from '../../../mike-wave.png';

const Overview = () => {
  return (
    <div className="container mx-auto px-10  py-12 lg:py-32">
      <h2 className="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-blue-400  mb-10">
        From Bartender to Web Developer
      </h2>
      <div className="lg:grid grid-rows-3 grid-flow-col space-x-8  rounded-lg">
        <div className="row-span-3 mb-10 lg:mb-0">
          <img src={img} alt="" className="rounded-t-lg rounded " />
        </div>
        <div className="col-span-2">
          <p className="text-xl text-gray-600 text-center mb-4 lg:mb-0">
            Why hello there! My name is Mike Fox and I am a full stack developer
            with a background in hospitality. Checkout my portfolio, its still a
            work in progress. This site is built with react, tailwind, vite, and
            sanity. I'm using netlify to host this project! I left the
            restaurant industry and decided to pursue the world of technology.
            So I completed a fullstack coding bootcamp at George Washington
            University. I recently started creating youtube tutorials to help
            document my coding journey
          </p>
        </div>
        <div className="p-4 row-span-2 col-span-2 flex-col">
          <h3 className="text-2xl text-center font-semibold italic text-gray-700">
            Tech Used
          </h3>
          <div className="flex justify-center">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg my-2 w-1/2 block "></div>
          </div>
          <ul>
            <li className="font-bold text-blue-500 text-center">
              🔥 JavaScript
            </li>
            <li className="font-bold text-blue-500 text-center">🔥 React</li>
            <li className="font-bold text-blue-500 text-center">
              🔥 TailwindCSS
            </li>
            <li className="font-bold text-blue-500 text-center">🔥 Node</li>
            <li className="font-bold text-blue-500 text-center">🔥 HTML</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
