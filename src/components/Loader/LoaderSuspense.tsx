export default function LoaderSuspense() {
  return (
    <>
      <style>{`
        :root {
          --ut-verde: #009681;
          --ut-laranja: #F37021;
          --ut-gris: #e5e7eb;
        }

        .ldr-char {
          display: inline-block;
          color: var(--ut-gris);
          animation: ldrColorFill 4s infinite ease-in-out;
        }
        .ldr-verde   { --target-color: var(--ut-verde); }
        .ldr-laranja { --target-color: var(--ut-laranja); }

        @keyframes ldrColorFill {
          0%, 5%    { color: var(--ut-gris); }
          25%, 75%  { color: var(--target-color); }
          95%, 100% { color: var(--ut-gris); }
        }

        /* Delays por hijo — aplica a ambos grupos */
        .ldr-ut   .ldr-char:nth-child(1) { animation-delay: 0.0s; }
        .ldr-ut   .ldr-char:nth-child(2) { animation-delay: 0.2s; }
        .ldr-tecam .ldr-char:nth-child(1) { animation-delay: 0.4s; }
        .ldr-tecam .ldr-char:nth-child(2) { animation-delay: 0.6s; }
        .ldr-tecam .ldr-char:nth-child(3) { animation-delay: 0.8s; }
        .ldr-tecam .ldr-char:nth-child(4) { animation-delay: 1.0s; }
        .ldr-tecam .ldr-char:nth-child(5) { animation-delay: 1.2s; }

        .ldr-shimmer {
          position: absolute;
          top: 0; left: -150%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
          animation: ldrShimmer 4s infinite linear;
          pointer-events: none;
        }
        @keyframes ldrShimmer {
          0%   { left: -150%; }
          40%  { left: 150%; }
          100% { left: 150%; }
        }

        .ldr-bar {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, var(--ut-verde), var(--ut-laranja));
          animation: ldrBarLoad 4s infinite ease-in-out;
          border-radius: 3px;
        }
        @keyframes ldrBarLoad {
          0%   { width: 0%;   margin-left: 0; }
          50%  { width: 100%; margin-left: 0; }
          100% { width: 0%;   margin-left: 100%; }
        }

        .ldr-status {
          animation: ldrPulse 2s infinite;
        }
        @keyframes ldrPulse {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>

      <div className="flex flex-col items-center justify-center h-screen bg-white px-4 text-center overflow-hidden">

        {/* Logo animado UTTECAM */}
        <div
          className="mb-8 sm:mb-10"
          style={{ transform: "skewX(-20deg)", filter: "drop-shadow(1px 1px 0px rgba(0,0,0,0.05))" }}
        >
          <div
            className="relative flex items-flex-end select-none"
            style={{ fontWeight: 900, lineHeight: 0.8, fontStyle: "italic", fontFamily: '"Arial Black", "Arial Bold", sans-serif' }}
          >
            {/* UT — más grande */}
            <div className="ldr-ut flex items-end" style={{ fontSize: "clamp(36px, 7vw, 60px)", letterSpacing: "-0.09em", marginRight: "4px" }}>
              <span className="ldr-char ldr-verde">U</span>
              <span className="ldr-char ldr-verde">T</span>
            </div>
            {/* TECAM — más chico */}
            <div className="ldr-tecam flex items-end" style={{ fontSize: "clamp(28px, 5.5vw, 46px)", letterSpacing: "-0.09em" }}>
              <span className="ldr-char ldr-laranja">T</span>
              <span className="ldr-char ldr-laranja">E</span>
              <span className="ldr-char ldr-laranja">C</span>
              <span className="ldr-char ldr-laranja">A</span>
              <span className="ldr-char ldr-laranja">M</span>
            </div>
            <div className="ldr-shimmer" />
          </div>

         

         
        </div>

        {/* Puntos animados */}
        <div className="flex items-center justify-center space-x-2">
          <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#F15A22] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#00724E] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#F15A22] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>

        {/* Texto secundario */}
        <p className="mt-10 sm:mt-10 text-gray-400  text-sm md:text-md uppercase tracking-wider font-medium">
          Universidad Tecnológica de Tecamachalco
        </p>
      </div>
    </>
  );
}
