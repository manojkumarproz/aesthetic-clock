export default function TopBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-6 w-full flex flex-wrap justify-center items-center gap-4 z-10 px-6">
      {children}
    </div>
  );
}
