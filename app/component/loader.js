"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Preloader({ onComplete }) {
  const leftPanelRef = useRef();
  const rightPanelRef = useRef();
  const logoWrapperRef = useRef(); // Animate wrapper instead of <Image>

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.to(logoWrapperRef.current, { opacity: 0, duration: 0.5 })
      .to(
        leftPanelRef.current,
        {
          x: "-100%",
          y: "-100%",
          duration: 1.5,
          ease: "power3.inOut",
        },
        "-=0.5"
      )
      .to(
        rightPanelRef.current,
        {
          x: "100%",
          y: "100%",
          duration: 1.5,
          ease: "power3.inOut",
        },
        "-=1.5"
      );
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        ref={leftPanelRef}
        className="fixed inset-0 bg-[#1b1b1b] origin-top-left"
      />
      <div
        ref={rightPanelRef}
        className="fixed inset-0 bg-[#1b1b1b] origin-bottom-right"
      />
      <div ref={logoWrapperRef}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={144}
          height={144}
          className="z-50 pointer-events-auto"
        />
      </div>
    </div>
  );
}
