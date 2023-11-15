import { DM_Sans } from "next/font/google";
import "./Styles/globals.css";

const DMsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Slobinski.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DMsans.className}>{children}</body>
    </html>
  );
}