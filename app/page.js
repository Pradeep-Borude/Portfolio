"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Loader from "./component/loader.js";

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

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {loaded && (
        <>
          <div className="font-light sm:hidden w-screen flex justify-center items-center text-xl text-center mt-9 mb-5">
            <h1>👋 , My name is pradeep i am</h1>
          </div>

          <div className="overflow-hidden font-azonix text-[#1b1b1b] leading-[3rem] sm:leading-[8.5rem] flex flex-col items-center justify-center relative sm:py-[2%] select-none">
            <h1
              ref={textRef1}
              onMouseEnter={() => handleMouseEnter(textRef1, textRef2)}
              onMouseLeave={handleMouseLeave}
              className="text-[3rem] sm:text-[10.4rem] font-medium relative"
              style={{
                color: "#1b1b1b",
                WebkitTextStroke: "0px #1b1b1b",
                left: "-100%",
              }}
            >
              Fullstack
              <span
                ref={textRef11}
                className="absolute text-[3rem] sm:text-[10.4rem] font-medium text-transparent z-10 top-0 left-0"
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
              className="text-[3rem] sm:text-[10.4rem] font-medium relative"
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
                className="absolute text-[3rem] sm:text-[10.4rem] font-medium text-transparent z-10 top-0 left-0 opacity-0 hover:opacity-100"
                style={{
                  WebkitTextStroke: "2px white",
                }}
              >
                Developer
              </span>
            </h1>
          </div>
          <img
            ref={imageRef}
            className="sm:h-[590px] sm:top-10 justify-self-center sm:absolute z-0 opacity-0 select-none"
            src="/images/myimage.png"
            alt=""
          />
          <h1 className="text-[#1b1b1b] font-medium opacity-65 select-none z-10 absolute top-64 sm:top-[63%] left-6 sm:left-32">
            based in <br />
            Chh. Sambhajinagar, Maharashtra
          </h1>
          <div className="fixed left-1/2 transform -translate-y-1/2 -translate-x-1/2 bottom-0">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1b1b1b] px-6 font-medium text-neutral-200 transition hover:scale-110">
              <span>Resume</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </div>
        </>
      )}
    </>
  );
}
