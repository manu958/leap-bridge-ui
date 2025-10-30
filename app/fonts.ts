import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    { path: "/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
});

export const zodiak = localFont({
  src: [
    { path: "/fonts/Zodiak-Bold.woff2", weight: "700", style: "normal" },
    { path: "/fonts/Zodiak-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-zodiak",
});
export const poppins = localFont({
  src: [
    { path: "/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
});
