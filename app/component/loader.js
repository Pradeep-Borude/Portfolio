"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Preloader({ onComplete }) {
  const leftPanelRef = useRef();
  const rightPanelRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.to(logoRef.current, { opacity: 0, duration: 0.5 })
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
      <img
        ref={logoRef}
        src="/images/logo.png"
        alt="Logo"
        className="w-36 h-36 z-50 pointer-events-auto"
      />
    </div>
  );
}
