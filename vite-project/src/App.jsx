import React from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import About from './components/About.jsx';
import Art from './components/Art.jsx';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>

  )
}

export default App