type Props = {
  active?: boolean;
  label: string;
  onClick: () => void;
};

export default function ToggleButton({ active, label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full border transition backdrop-blur-md 
      ${active 
        ? "bg-gradient-to-r from-sky-400 to-indigo-400 text-black" 
        : "bg-white/10 border-white/20 hover:bg-white/20"
      }`}
    >
      {label}
    </button>
  );
}
