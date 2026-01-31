type Props = {
  active?: boolean;
  label: string;
  onClick: () => void;
};

export default function ToggleButton({ active, label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full border transition-all backdrop-blur-md text-[12px] md:text-sm whitespace-nowrap min-w-fit
      ${active
          ? "bg-gradient-to-r from-sky-400 to-indigo-400 text-black border-sky-400 shadow-lg scale-105"
          : "bg-white/10 border-white/10 text-white/80 hover:bg-white/20 hover:text-white"
        }`}
    >
      {label}
    </button>
  );
}
