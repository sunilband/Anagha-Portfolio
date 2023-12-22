import Background from "@/components/Background/Background";
import "./globals.css";
import type { Metadata } from "next";
import CursorWrapper from "../components/CursorWrapper/CursorWrapper";
import { ModeProvider } from "../context/DarkModeContext";
import { DataProvider } from "../context/DataContext";
import { AnimationProvider } from "../context/BgAnimationTrigger";
import PageAnimatePresence from "../components/PageAnimations/PageAnimatePresence";
import AnimatedCursor from "react-animated-cursor";

export const metadata: Metadata = {
  title: "Anagha Yawale",
  description: "Anagha Yawale's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen select-none overflow-hidden">
        <DataProvider>
          <ModeProvider>
            <AnimationProvider>
              <Background />
              <CursorWrapper />
              <PageAnimatePresence>
                {children}
                <AnimatedCursor
                  trailingSpeed={10}
                  innerSize={25}
                  outerSize={35}
                  innerScale={2}
                  outerScale={2}
                  outerAlpha={0}
                  outerStyle={{
                    border: "3px solid #000",
                  }}
                  innerStyle={{
                    backgroundColor: "#fff",
                    mixBlendMode: "exclusion",
                  }}
                  clickables={["a", "button", ".link", "span", "hoversection"]}
                />
              </PageAnimatePresence>
            </AnimationProvider>
          </ModeProvider>
        </DataProvider>
      </body>
    </html>
  );
}
