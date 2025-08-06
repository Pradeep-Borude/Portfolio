"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Loader from "./component/loader.js";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home() {
  const textRef1 = useRef();
  const textRef11 = useRef();
  const textRef2 = useRef();
  const imageRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      gsap.to(textRef1.current, {
        left: "0",
        duration: 1.5,
        ease: "power3.out",
      });
      gsap.to(textRef2.current, {
        right: "0",
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 2.5,
        ease: "power3.out",
      });
    }
  }, [loaded]);

  const handleMouseEnter = (hoveredRef, otherRef) => {
    gsap.to(hoveredRef.current, {
      color: "#1b1b1b",
      WebkitTextStroke: "0px #1b1b1b",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(otherRef.current, {
      color: "white",
      WebkitTextStroke: "2px #1b1b1b",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef1.current, {
      color: "#1b1b1b",
      WebkitTextStroke: "0px #1b1b1b",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(textRef2.current, {
      color: "white",
      WebkitTextStroke: "2px #1b1b1b",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const outlineYes = (lineTrue) => {
    gsap.to(lineTrue.current, {
      duration: 0.2,
      ease: "power2.out",
      WebkitTextStroke: "2px white",
    });
  };

  const outlineNo = (lineFalse) => {
    gsap.to(lineFalse.current, {
      duration: 0.2,
      ease: "power2.out",
      WebkitTextStroke: "0px white",
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xmove = (e.clientX / window.innerWidth - 0.5) * 30;
      const ymove = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(imageRef.current, {
        x: xmove,
        y: ymove,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    if (loaded) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [loaded]);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {loaded && (
        <>
          <div className="font-azonix font-light sm:hidden w-screen flex justify-center items-center text-center mt-9 mb-5">
            <h1>👋 , My name is Pradeep. I&apos;m a</h1>
          </div>

          <div className="overflow-hidden font-azonix text-[#1b1b1b] leading-[3rem] sm:leading-[12vw] flex flex-col items-center justify-center relative sm:py-[5%] select-none">
            <h1
              ref={textRef1}
              onMouseEnter={() => handleMouseEnter(textRef1, textRef2)}
              onMouseLeave={handleMouseLeave}
              className="text-[3rem] sm:text-[13vw] font-medium relative"
              style={{
                color: "#1b1b1b",
                WebkitTextStroke: "0px #1b1b1b",
                left: "-100%",
              }}
            >
              Fullstack
              <span
                ref={textRef11}
                className="absolute text-[3rem] sm:text-[13vw] font-medium text-transparent z-10 top-0 left-0"
                style={{
                  WebkitTextStroke: "2px white",
                }}
              >
                Fullstack
              </span>
            </h1>

            <h1
              ref={textRef2}
              onMouseEnter={() => handleMouseEnter(textRef2, textRef1)}
              onMouseLeave={handleMouseLeave}
              className="text-[3rem] sm:text-[13vw] font-medium relative"
              style={{
                color: "white",
                WebkitTextStroke: "2px #1b1b1b",
                right: "-100%",
              }}
            >
              Developer
              <span
                onMouseEnter={() => outlineNo(textRef11)}
                onMouseLeave={() => outlineYes(textRef11)}
                className="absolute text-[3rem] sm:text-[13vw] font-medium text-transparent z-10 top-0 left-0 opacity-0 hover:opacity-100"
                style={{
                  WebkitTextStroke: "2px white",
                }}
              >
                Developer
              </span>
            </h1>
          </div>

          <div className="relative h-screen sm:fixed sm:inset-0 pointer-events-none">
  <Image
    ref={imageRef}
    className="image z-0 opacity-0 select-none
               absolute top-[0%] left-1/2 -translate-x-1/2
               w-full max-h-[80vh] h-auto
               sm:h-[70vh] lg:h-[90vh] sm:w-auto" 
    src="/images/myimage.png"
    alt="moving-image"
    width={800}
    height={1200}
  />
</div>








          <h1 className="font-azonix text-[#1b1b1b] font-medium opacity-65 select-none z-10 absolute top-64 sm:top-[65%] left-6 sm:left-32">
            based in <br />
            Chh. Sambhajinagar,
            <br /> Maharashtra.
          </h1>

          {/* Resume Button */}
          <div className="fixed left-1/2 transform -translate-y-1/2 -translate-x-1/2 bottom-0">
            <button className="gap-1 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1b1b1b] px-6 font-medium text-neutral-200 transition hover:scale-110">
              <a href="/images/PradeepBorude-RESUME.pdf" download>Resume</a>
              <Image
                src="/svgs/download.svg"
                alt="Download Resume"
                width={28}
                height={28}
              />
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </div>

       {/* Social Links (LinkedIn, GitHub, Twitter) */}
<div className="hidden absolute bottom-6 left-6 sm:flex gap-5 text-white text-2xl">
  <a
    href="https://www.linkedin.com/in/pradeep-borude-7854422b3/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black hover:scale-110 transition-colors duration-300"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/Pradeep-Borude"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black hover:scale-110 transition-colors duration-300"
  >
    <FaGithub />
  </a>
  <a
    href="https://twitter.com/pradeepborude"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black hover:scale-110 transition-colors duration-300"
  >
    <FaTwitter />
  </a>
</div>
        </>
      )}
    </>
  );
}
