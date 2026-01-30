export default function TopBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-6 w-full flex justify-center gap-3 z-10">
      {children}
    </div>
  );
}
