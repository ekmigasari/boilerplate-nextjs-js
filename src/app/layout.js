import { Inter } from "next/font/google";
import "../styles/globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Boilerplate Nextjs",
  description: "Build your next product faster",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
