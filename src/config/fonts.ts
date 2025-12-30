import {
  Fira_Code as FontMono,
  Cherry_Bomb_One as FontSans,
} from "next/font/google";
import localFont from "next/font/local";

export const Ponlponl123_Article = localFont({
  src: [
    {
      path: "../fonts/Ponlponl123_Article-Regular.woff",
    },
  ],
  variable: "--font-sans",
});

export const fontSans = FontSans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
