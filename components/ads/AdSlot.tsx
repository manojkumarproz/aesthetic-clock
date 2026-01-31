"use client";

import { useEffect } from "react";

type AdType = "vertical" | "horizontal" | "auto";

interface AdSlotProps {
    type: AdType;
    client?: string;
    slot?: string;
    className?: string;
    label?: string;
}

export default function AdSlot({
    type,
    client = "ca-pub-XXXXXXXXXXXX",
    slot = "XXXXXXXXXX",
    className = "",
    label = "ADVERTISEMENT"
}: AdSlotProps) {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    const dimensions = {
        vertical: "w-[160px] h-[600px]",
        horizontal: "w-[min(90vw,728px)] h-[90px]",
        auto: "w-full"
    };

    return (
        <div className={`bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-white/20 text-[10px] backdrop-blur-md overflow-hidden ${dimensions[type]} ${className}`}>
            {label && <span className={`mb-2 opacity-50 uppercase tracking-widest ${type === "vertical" ? "rotate-90 pb-8" : ""}`}>{label}</span>}
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client={client}
                data-ad-slot={slot}
                data-ad-format={type === "auto" ? "auto" : type}
                data-full-width-responsive="true"
            />
        </div>
    );
}
