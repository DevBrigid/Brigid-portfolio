import { useEffect, useRef, useState } from "react";

const INTRO_TEXT =
  "Hi, I'm Brigid — a software engineering graduate who loves turning complex problems " +
  "into clean, working solutions. I build full-stack web applications with React, " +
  "Node.js, and Python, backed by a growing foundation in databases, APIs, and system " +
  "design. When I'm not coding, I'm probably learning something new — I'm currently " +
  "expanding into Flutter and cloud technologies.";

const TYPE_SPEED_MS = 18;
const STAMP_TO_TYPE_DELAY_MS = 500;

export default function Intro() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typeTimerRef = useRef(null);
  const stampTimerRef = useRef(null);

  useEffect(() => {
    stampTimerRef.current = setTimeout(() => {
      let i = 0;
      setIsTyping(true);

      typeTimerRef.current = setInterval(() => {
        i += 1;
        setTypedText(INTRO_TEXT.slice(0, i));

        if (i >= INTRO_TEXT.length) {
          clearInterval(typeTimerRef.current);
          setIsTyping(false);
        }
      }, TYPE_SPEED_MS);
    }, STAMP_TO_TYPE_DELAY_MS);

    return () => {
      clearTimeout(stampTimerRef.current);
      clearInterval(typeTimerRef.current);
    };
  }, []);

  const isDoneTyping = typedText.length === INTRO_TEXT.length && !isTyping;

  return (
    <section className="relative min-h-[640px] flex items-center overflow-hidden border-b-4 border-ink bg-ink">
      {/* Background Image with Fallback and Direct <img> Element */}
      <img
        src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1920&q=80"
        alt="Tokyo urban architecture backdrop"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 brightness-[0.45]"
      />

      {/* Editorial Halftone / Grain Wash */}
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-[0.5px]" />

      {/* Content Container (Expanded Vertical Space) */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-28 sm:py-36">
        {/* Asymmetric Split Card: Red Left | Black Right */}
        <div className="grid grid-cols-1 border-2 border-paper shadow-[8px_8px_0px_0px_var(--color-ink)] md:grid-cols-12">
          
          {/* Red Left Panel */}
          <div className="flex flex-col justify-between border-b-2 border-paper bg-signal p-6 text-paper md:col-span-3 md:border-b-0 md:border-r-2 sm:p-8">
            <div>
              <div className="mb-6 inline-block bg-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-paper">
                DISPATCH // 01
              </div>
              <div
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center border-2 border-paper bg-flag font-mono text-2xl font-black text-ink shadow-[3px_3px_0px_0px_var(--color-ink)] animate-stamp-in"
              >
                開発
              </div>
            </div>

            <div className="mt-8 font-mono text-[11px] uppercase tracking-wider text-paper/85">
              PERSPECTIVE // 2026
            </div>
          </div>

          {/* Black Right Panel */}
          <div className="flex flex-col justify-center bg-ink p-6 sm:p-10 md:col-span-9">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-flag">
              // STATEMENT OF PURPOSE
            </div>
            <p className="min-h-[120px] font-body text-base leading-relaxed text-paper/95 sm:text-lg">
              {typedText}
              <span
                className={`ml-1 border-r-2 border-flag ${
                  isDoneTyping ? "animate-cursor-blink" : ""
                }`}
              >
                &nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}