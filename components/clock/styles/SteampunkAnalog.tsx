"use client";

interface SteampunkAnalogProps {
    hour: number;
    minute: number;
    second: number;
}

const romanNumerals = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

export default function SteampunkAnalog({ hour, minute, second }: SteampunkAnalogProps) {
    return (
        <>
            <div className="absolute inset-0 rounded-full border-[10px] border-[#78350f] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] opacity-80" />
            <div className="absolute inset-[15px] rounded-full border-[2px] border-[#b45309]/30" />

            {/* Gears Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-full">
                <div className="absolute inset-0 scale-110 flex flex-wrap gap-4 justify-center items-center">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="w-16 h-16 border-2 border-amber-500/40 rounded-full rotate-45 flex items-center justify-center">
                            <div className="w-8 h-8 border border-amber-500/20 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Numerals */}
            {romanNumerals.map((num, i) => (
                <div key={num}
                    className="absolute inset-[12%] text-amber-200/90 font-serif text-[clamp(14px,5vw,26px)] text-center font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    style={{ transform: `rotate(${i * 30}deg)` }}
                >
                    <span className="inline-block" style={{ transform: `rotate(${-i * 30}deg)` }}>{num}</span>
                </div>
            ))}

            {/* Ticks */}
            {Array.from({ length: 60 }).map((_, i) => (
                <div key={i}
                    className={`absolute left-1/2 top-[5%] -translate-x-1/2 origin-[center_min(35vw,35vh,166px)]
            ${i % 5 === 0 ? "w-1.5 h-4 bg-amber-400/80 shadow-[0_0_5px_rgba(251,191,36,0.3)]" : "w-0.5 h-2 bg-amber-600/40"}`}
                    style={{
                        transform: `rotate(${i * 6}deg)`,
                        height: i % 5 === 0 ? "4%" : "1.5%",
                        top: "3%"
                    }}
                />
            ))}

            {/* Hands */}
            <div style={{ transform: `rotate(${hour * 30}deg)` }}
                className="absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear h-[25%] w-[3%] bg-gradient-to-t from-amber-900 to-amber-200 border border-amber-950 shadow-md"
            />
            <div style={{ transform: `rotate(${minute * 6}deg)` }}
                className="absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear h-[35%] w-[2.5%] bg-gradient-to-t from-amber-800 to-amber-100 border border-amber-950"
            />
            <div style={{ transform: `rotate(${second * 6}deg)` }}
                className="absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear h-[40%] w-[1.5%] bg-red-700 shadow-sm"
            />
            <div className="absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 w-[6%] h-[6%] bg-amber-950 border-2 border-amber-600 shadow-lg" />
        </>
    );
}
