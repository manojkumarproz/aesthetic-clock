"use client";

interface ModernAnalogProps {
    hour: number;
    minute: number;
    second: number;
}

export default function ModernAnalog({ hour, minute, second }: ModernAnalogProps) {
    return (
        <>
            <div
                style={{ transform: `rotate(${hour * 30}deg)` }}
                className="absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear h-[25%] w-[1.8%] bg-white"
            />
            <div
                style={{ transform: `rotate(${minute * 6}deg)` }}
                className="absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear h-[35%] w-[1.5%] bg-white/80"
            />
            <div
                style={{ transform: `rotate(${second * 6}deg)`, backgroundColor: "var(--accent)" }}
                className="absolute left-1/2 bottom-1/2 rounded-full origin-bottom transition-transform duration-100 ease-linear h-[40%] w-[1.2%]"
            />
            <div className="absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 w-[4%] h-[4%] bg-white" />
        </>
    );
}
