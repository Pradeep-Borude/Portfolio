"use client";
import { useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedText() {
  const textRef1 = useRef();
  const textRef11 = useRef();
  const textRef2 = useRef();

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
      WebkitTextStroke: "0px black",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(textRef2.current, {
      color: "white",
      WebkitTextStroke: "2px black",
      duration: 0.5,
      ease: "power2.out",
    });
  };
    const outlineYes= (lineTrue,)=>{
    gsap.to(lineTrue.current,{
       duration: 0.2,
      ease: "power2.out",
        WebkitTextStroke: "2px white",
    });
  }
  const outlineNo = (linefalse)=>{
    gsap.to(linefalse.current,{
       duration: 0.2,
      ease: "power2.out",
        WebkitTextStroke: "0px white",
    });
  }
  

  return (
    <>
      <div className="sm:hidden w-screen flex justify-center items-center text-2xl text-center mt-9 mb-5">
        <h1>
          👋 , My name is pradeep i am fullstack developer !
        </h1>
      </div>


      <div className=" leading-[3rem] sm:leading-[8.5rem] flex flex-col items-center justify-center relative sm:py-[2%] select-none">
        <h1
          ref={textRef1}
          onMouseEnter={() => handleMouseEnter(textRef1, textRef2)}
          onMouseLeave={handleMouseLeave}
          className="text-[3.5rem] sm:text-[10.4rem] font-bold relative"
          style={{
            color: "#1b1b1b",
            WebkitTextStroke: "0px #1b1b1b",

          }}
        >
          Fullstack
          <span
             ref={textRef11}
            className="absolute text-[3.5rem] sm:text-[10.4rem] font-bold text-transparent z-10 top-0 left-0 "
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
          className="text-[3.5rem] sm:text-[10.4rem] font-bold relative"
          style={{
            color: "white",
            WebkitTextStroke: "2px #1b1b1b",
          }}
        >
          Developer
          <span
           onMouseEnter={() => outlineNo(textRef11)}
            onMouseLeave={()=>outlineYes(textRef11)}
            className="absolute text-[3.5rem] sm:text-[10.4rem] font-bold text-transparent z-10 top-0 left-0 opacity-0 hover:opacity-100"
            style={{
              WebkitTextStroke: "2px white",

            }}
          >
            Developer
          </span>
        </h1>

        <img
          className="sm:h-[450px]  sm:absolute z-0 top-40 sm:top-0 "
          src="https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/627a6ebf32659497910541fb_Photo_profil2.webp"
          alt=""
        />

      </div>
<h1 className="sm:block hidden text-[#1b1b1b] font-bold opacity-65 select-none z-10 absolute left-[20%] bottom-1/4">based in <br />Chh. Sambhajinagar, Maharashtra</h1>
<div className="fixed left-1/2 transform -translate-y-1/2 -translate-x-1/2 bottom-0">
                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1b1b1b] px-6 font-medium text-neutral-200 transition hover:scale-110"><span>Resume </span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-white/20"></div></div></button>

</div>
    </>
  );
}

