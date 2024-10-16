import { Poppins } from "next/font/google";
import DashboardSideBar from "../app/templates/layout/DashboardSideBar";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <main className="flex">
        <DashboardSideBar/>
        {children}
        </main>
      </body>
    </html>
  );
}
