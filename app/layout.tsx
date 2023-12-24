import Background from "@/components/Background/Background";
import "./globals.css";
import type { Metadata } from "next";
import CursorWrapper from "../components/CursorWrapper/CursorWrapper";
import { ModeProvider } from "../context/DarkModeContext";
import { DataProvider } from "../context/DataContext";
import { AnimationProvider } from "../context/BgAnimationTrigger";
import PageAnimatePresence from "../components/PageAnimations/PageAnimatePresence";
import Cursor from "@/components/Cursor/Cursor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                <ToastContainer />
                <Cursor />
              </PageAnimatePresence>
            </AnimationProvider>
          </ModeProvider>
        </DataProvider>
      </body>
    </html>
  );
}
