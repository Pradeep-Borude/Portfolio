"use client";
import React, { useState, useEffect, useRef } from "react";
import { Projectvideos } from "../paths.js";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';


import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, 
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

import Loader from "../component/loader.js";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef();

  const heroHeading = useRef(null);
  const lineRef = useRef(null);
  const lineRef2 = useRef(null);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 0.5, smooth: true, smoothTouch: false });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Loader delay simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animations after load
  useEffect(() => {
    if (!loaded) return;
    const container = containerRef.current;

    // Section fade-in
    const sections = container.querySelectorAll(".animated-section");
    gsap.fromTo(
      sections,
      { opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4,
      }
    );

    // Logo bounce
    const ul = container.querySelector("ul");
    const liElements = ul.querySelectorAll("li");
    ScrollTrigger.create({
      trigger: ul,
      start: "top 75%",
      once: true,
      onEnter: () => {
        liElements.forEach((li) => {
          gsap.to(li, {
            y: -10,
            duration: 0.6,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
            delay: Math.random(),
          });
        });
      },
    });

    // H1 letter drop
    const h1Elements = container.querySelectorAll("h1");
    h1Elements.forEach((h1) => {
      const originalText = h1.textContent;
      h1.innerHTML = "";
      originalText.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        h1.appendChild(span);
      });
      const spans = h1.querySelectorAll("span");
      gsap.fromTo(
        spans,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: h1,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Line animation on scroll
    if ( heroHeading.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroHeading.current,
          start: "top 50%",
          end: "top 10%",
          scrub: true,
        },
      });
    
      // Line width animation
      tl.fromTo(
        lineRef.current,
        { width: "0%" },
        { width: "107%", ease: "power3.out" }
      );
    
      // Opacity animation for lineRef2
      tl.fromTo(
        lineRef2.current,
        { opacity: 0 },
        { opacity: 1, ease: "power3.out" },
        ">" // "<" means start at the same time as previous animation
      );
    }
    

    ScrollTrigger.refresh();
  }, [loaded]);
  const currentYear = new Date().getFullYear();
  
  
  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <div ref={containerRef}>
          {/* Section 1 */}
          <div className="opacity-0 transition-all animated-section sm:px-32">
            <h1 className="font-azonix text-center text-[#fda228] px-3 py-24" style={{ letterSpacing: "8px" }}>
              Let's get to know each other
            </h1>
            <h1 className="sm:text-6xl text-3xl font-bold font-azonix text-center">About</h1>
            <p className="p-5 text-center sm:text-3xl">
              Hi, my name is Pradeep Borude. I am 19 years old and currently pursuing a BCA degree from Deogiri College, Chhatrapati Sambhajinagar.
            </p>
          </div>

          {/* Section 2 */}
          <div className="opacity-0 transition-all animated-section sm:px-32">
            <h1 className="text-3xl font-bold font-azonix text-center p-5">
              I make Websites & I do it well
            </h1>
            <p className="p-5 text-center sm:text-3xl">
              By keeping your identity at the heart of my approach, my goal is to find the simplest solution to meet your needs.
            </p>
          </div>
          {/* Tech Icons */}
          <div className="flex flex-col p-6 opacity-0 transition-all animated-section sm:px-32">
            <h1 className="font-bold font-azonix py-5 text-3xl italic text-center sm:text-3xl">
              What I use for development
            </h1>
            <ul className="flex flex-wrap gap-6 sm:gap-20 justify-center items-center py-8">
              <li><FaHtml5 className="text-orange-600 w-16 h-16" /><span className="font-azonix text-center">HTML</span></li>
              <li><FaCss3Alt className="text-blue-600 w-16 h-16" /><span className="font-azonix text-center">CSS</span></li>
              <li><FaJs className="text-yellow-400 w-16 h-16" /><span className="font-azonix text-center">JS</span></li>
              <li><SiTailwindcss className="text-teal-400 w-16 h-16" /><span className="font-azonix text-center">Tailwind</span></li>
              <li><FaReact className="text-cyan-400 w-16 h-16" /><span className="font-azonix text-center">React</span></li>
              <li><SiNextdotjs className="text-black w-16 h-16" /><span className="font-azonix text-center">NextJS</span></li>
              <li><FaNodeJs className="text-green-500 w-16 h-16" /><span className="font-azonix text-center">NodeJS</span></li>
              <li><SiMongodb className="text-green-600 w-16 h-16" /><span className="font-azonix text-center">MongoDB</span></li>
              <li><FaGitAlt className="text-orange-500 w-16 h-16" /><span className="font-azonix text-center">Git</span></li>
              <li><FaGithub className="text-white w-16 h-16 bg-black rounded-full p-2" /><span className="font-azonix text-center">GitHub</span></li>
            </ul>
          </div>
          {/* Projects */}
          <div className="bg-[#1b1b1b] text-white flex flex-col items-center text-center py-12">
            <h1 className="font-bold font-azonix text-2xl italic text-center sm:text-3xl">
              - Latest projects
            </h1>
            <ul className="flex-col flex-wrap justify-center items-center py-8">
              {Projectvideos.map((project, index) => (
                <li
                  key={index}
                  className="relative h-[425px] w-[300px] z-10 py-5 px-3 mx-6 my-6 rounded-xl overflow-hidden border border-white/20 sm:mx-0 sm:w-[98vw] sm:flex sm:justify-center"
                >
                  <Image
                    className="absolute blur-[2px] opacity-30 -z-10 top-0 left-0 w-full h-full object-cover rounded-xl"
                    src={project.bgsrc}
                    alt=""
                  />
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="sm:flex sm:items-center sm:justify-around sm:w-full">
                    <video
                      src={project.src}
                      autoPlay
                      loop
                      muted
                      className="w-64 h-40 object-cover rounded-xl sm:w-[33rem] sm:h-72"
                    />
                    <span className="py-5 flex flex-col justify-between sm:h-[200px] sm:w-[400px]">
                      <h1 className="font-azonix text-[1.4rem] sm:text-3xl">{project.title}</h1>
                      <br />
                      <span className="sm:text-xl">{project.desc}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Line animation section */}
          <div className="flex flex-col items-center pt-28" ref={heroHeading}>
            <div className="relative inline-block">
              <span className="relative text-2xl sm:text-4xl font-azonix">
                You need a Website
                <span 
                  ref={lineRef}
                  className="absolute -left-4 top-1/2 h-1 bg-[#fda228] rounded-full -rotate-1"
                  style={{ width: "0%" }}
                ></span>
              </span>
            </div>
           <h2 ref={lineRef2} className="text-2xl sm:text-4xl font-azonix text-center ">You need a high performing website</h2>
           <p className=" sm:text-2xl pt-5 pb-36 px-2">Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch.
            <br />
            <br />
            <br />
            <br />email :
            <a href="mailto:pradeepborude406@gmail.com" className="hover:line-through underline"> pradeepborude406@gmail.com</a>
            <br />
            on the internet: 
            <a href="www.linkedin.com/in/pradeep-borude-7854422b3" className="hover:line-through underline hover:font-medium">LinkedIn </a>/
            <a href="https://x.com/pradeepBorude01" className="hover:line-through underline hover:font-medium">Twitter </a>/
            <a href="https://www.instagram.com/pradeep_borude/profilecard/?igsh=YXc4NzhiZXh5aTNl" className="hover:line-through underline hover:font-medium ">Instagram </a>/
           </p>
          </div>
    <footer className="border-t border-[#1b1b1b] mx-9 py-4">
    <p className="italic opacity-85 text-center font-azonix text-xs flex items-center justify-center">&copy;  {currentYear}. created by 
    <Image
          className="hidden sm:block h-10 w-10 object-contain"
          src="/images/logo.png"
          alt="Logo"
        />
        - Mr. pradeep with ❤️ & 🍵 in India.</p>

    </footer>
        </div>
      )}
    </>
  );
};

export default Page;
