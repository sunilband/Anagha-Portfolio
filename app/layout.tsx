import Background from "@/components/Background/Background";
import "./globals.css";
import type { Metadata } from "next";
import CursorWrapper from "../components/CursorWrapper/CursorWrapper";

import { ModeProvider } from "../context/DarkModeContext";
import { AnimationProvider } from "../context/BgAnimationTrigger";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ModeProvider>
          <AnimationProvider>
            <Background />
            <CursorWrapper />
            {children}
          </AnimationProvider>
        </ModeProvider>
      </body>
    </html>
  );
}
