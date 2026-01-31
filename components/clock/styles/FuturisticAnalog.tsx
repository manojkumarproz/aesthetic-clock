"use client";

interface FuturisticAnalogProps {
    hour: number;
    minute: number;
    second: number;
}

export default function FuturisticAnalog({ hour, minute, second }: FuturisticAnalogProps) {
    return (
        <>
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i}
                    className="absolute left-1/2 top-4 w-1 h-3 bg-cyan-400/40 origin-[center_min(36vw,36vh,154px)] -translate-x-1/2"
                    style={{ transform: `rotate(${i * 30}deg)` }}
                />
            ))}

            {/* Hands */}
            <div style={{ transform: `rotate(${hour * 30}deg)` }}
                className="absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear h-[22%] w-[1.5%] bg-cyan-300 shadow-[0_0_10px_cyan]"
            />
            <div style={{ transform: `rotate(${minute * 6}deg)` }}
                className="absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear h-[32%] w-[1.2%] bg-cyan-200 shadow-[0_0_10px_cyan]"
            />
            <div style={{ transform: `rotate(${second * 6}deg)` }}
                className="absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear h-[42%] w-[1%] bg-pink-500 shadow-[0_0_15px_pink]"
            />
            <div className="absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 w-[3%] h-[3%] bg-white shadow-[0_0_15px_white]" />
        </>
    );
}
