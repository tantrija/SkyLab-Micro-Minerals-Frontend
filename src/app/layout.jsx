import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Royal Micrins",
  description: "RoyalMicrins - Best Quality Spices",
  generator: "v0.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="@/public/logo/RoyalMicrins.png" />
      </head>
      <body className="font-[Zalando Sans]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
