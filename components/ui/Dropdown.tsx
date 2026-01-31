"use client";

import { useState, useRef, useEffect } from "react";

type Option = {
    label: string;
    value: string;
};

type DropdownProps = {
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
};

export default function Dropdown({ label, options, value, onChange }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find((opt) => opt.value === value);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-sm text-white/80 flex items-center gap-2 whitespace-nowrap"
            >
                <span className="opacity-60">{label}:</span>
                <span className="text-white font-medium">{selectedOption?.label}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 left-0 w-48 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden z-[100] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left text-sm transition-colors
              ${value === option.value ? "bg-white/20 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"}`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
