import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="lofi">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
