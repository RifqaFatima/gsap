import React from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar.jsx';
// import { ScrollTrigger, SplitText } from "gsap/all";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
    </main>

  )
}

export default App