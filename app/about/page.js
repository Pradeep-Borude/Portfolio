"use client";
import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb,
} from "react-icons/si";

import Loader from "../component/loader.js";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef();

  // Smooth scroll using Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const container = containerRef.current;

    // Animate sections with fade in
    const sections = container.querySelectorAll(".animated-section");
    gsap.fromTo(
      sections,
      (index) => ({
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
      }),
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.4,
      }
    );

    // Animate <li> logos with bounce
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

    // Animate each <h1> with letter drop down 
    const h1Elements = container.querySelectorAll("h1");
    h1Elements.forEach((h1) => {
      const originalText = h1.textContent;
      h1.innerHTML = ""; // Clear current text

      originalText.split("").forEach((char, i) => {
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

  }, [loaded]);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <div ref={containerRef} className="sm:px-32">
          <div className="opacity-0 transition-all animated-section">
            <h1 className="font-azonix text-center text-[#fda228] px-5 py-24" style={{ letterSpacing: "8px" }}>
              Let's get to know each other
            </h1>
            <h1 className="sm:text-6xl text-3xl font-bold font-azonix text-center">About</h1>
            <p className="p-5 text-center sm:text-3xl">
              Hi, my name is Pradeep Borude. I am 19 years old and currently pursuing a BCA degree from Deogiri College, Chhatrapati Sambhajinagar.
            </p>
          </div>

          <div className="opacity-0 transition-all animated-section">
            <h1 className="text-3xl font-bold font-azonix text-center p-6">
              I make Websites and I do it well
            </h1>
            <p className="p-5 text-center sm:text-3xl">
              By keeping your identity at the heart of my approach, my goal is to find the simplest solution to meet your needs.
            </p>
          </div>

          <div className="flex flex-col p-6 opacity-0 transition-all animated-section">
            <h1 className="font-bold font-azonix py-5 text-xl italic text-center sm:text-3xl">
              What I use for development
            </h1>
            <ul className=" flex flex-wrap gap-6 sm:gap-20 justify-center items-center py-8">
              <li><FaHtml5 className="text-orange-600 w-16 h-16" /><p className="font-azonix text-center">HTML</p></li>
              <li><FaCss3Alt className="text-blue-600 w-16 h-16" /><p className="font-azonix text-center">CSS</p></li>
              <li><FaJs className="text-yellow-400 w-16 h-16" /><p className="font-azonix text-center">JS</p></li>
              <li><SiTailwindcss className="text-teal-400 w-16 h-16" /><p className="font-azonix text-center">Tailwind</p></li>
              <li><FaReact className="text-cyan-400 w-16 h-16" /><p className="font-azonix text-center">React</p></li>
              <li><SiNextdotjs className="text-black w-16 h-16" /><p className="font-azonix text-center">NextJS</p></li>
              <li><FaNodeJs className="text-green-500 w-16 h-16" /><p className="font-azonix text-center">NodeJS</p></li>
              <li><SiMongodb className="text-green-600 w-16 h-16" /><p className="font-azonix text-center">MongoDB</p></li>
              <li><FaGitAlt className="text-orange-500 w-16 h-16" /><p className="font-azonix text-center">Git</p></li>
              <li><FaGithub className="text-white w-16 h-16 bg-black rounded-full p-2" /><p className="font-azonix text-center">GitHub</p></li>
            </ul>
          </div>
          <h1 className="font-bold font-azonix py-5 text-xl italic text-center sm:text-3xl">
              projects
            </h1>
            <ul className=" flex flex-wrap gap-6 sm:gap-20 justify-center items-center py-8">              <li>project 1</li>
              <li>project2</li>
              <li>project 3</li>
              <li>project 4</li>
            </ul>
        </div>
      )}
    </>
  );
};

export default Page;
