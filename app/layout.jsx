import { Inter } from "next/font/google";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PROMPT - AI",
  description: "Applicaton for sharing and discovering AI prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}
