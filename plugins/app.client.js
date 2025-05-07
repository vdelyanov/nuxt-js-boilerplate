import Lenis from 'lenis'
import { gsap } from "gsap";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin(() => {
  
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, SplitText);


});