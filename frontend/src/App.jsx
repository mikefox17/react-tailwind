import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SinglePost from './components/SinglePost';
import Home from './components/Home';
import Footer from './components/Footer';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import img from '../../frontend/mike-wave.png';
import design from '../../frontend/design.png';
import code from '../../frontend/code.png';
import consulting from '../../frontend/consulting.png';

const App = () => {
  return (
    <>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Mike Fox</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-lime-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10" d>
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Mike Fox
            </h2>
            <h3 className="text-2xl py-2">Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Why hello there! My name is Mike Fox and I am a full stack
              developer with a background in hospitality. Checkout my portfolio,
              its still a work in progress. This site is built with react,
              tailwind, vite, and sanity. I'm using netlify to host this
              project! I left the restaurant industry and decided to pursue the
              world of technology. So I completed a fullstack coding bootcamp at
              George Washington University. I recently started creating youtube
              tutorials to help document my coding journey
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="text-center bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto">
            <img src={img} />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-medium py-2 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae dicta quis distinctio sapiente molestias reiciendis.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg">
              <img
                src={design}
                alt="design"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8" pb-2>
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Photoshop</p>
            </div>
          </div>
        </section>
      </main>
    </>

    // <>
    //     <BrowserRouter>
    //         <Navigation />
    //         <Switch>
    //             <Route component={Home} path='/' exact />
    //             <Route component={SinglePost} path='/post/:slug' />
    //         </Switch>
    //         <Footer />
    //     </BrowserRouter>
    // </>
  );
};

export default App;
