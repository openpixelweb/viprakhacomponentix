import "./globals.css";
import "/public/assets/css/custom.css";
import "/public/assets/css/quill.css";
import "react-toastify/dist/ReactToastify.css";


import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Maathrey Wellness Admin",
  description: "Admin dashboard for Maathrey Wellness",
};

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
