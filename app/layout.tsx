import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

<head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXX"
    crossOrigin="anonymous"
  ></script>
</head>


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
