export default function TopBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-4 md:top-8 left-0 w-full flex justify-center z-50 px-4 overflow-visible">
      <div className="w-full max-w-6xl h-16 px-4 md:px-6 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-2xl overflow-visible">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold tracking-widest text-white/90 hidden lg:block text-xs md:text-sm">AESTHETIC CLOCK</span>
        </div>

        {/* Center: Main Controls & Links */}
        <div className="flex items-center gap-2 md:gap-6 px-2 overflow-visible">
          {children}
        </div>

        {/* Right Side: CTA Button */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button className="hidden sm:flex px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-bold text-[10px] md:text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-500/20">
            ZEN MODE
          </button>

          <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
