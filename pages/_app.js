import { ThemeProvider } from "next-themes";
import { fuchsia } from "tailwindcss/colors";
import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color={fuchsia[500]} height={4} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
