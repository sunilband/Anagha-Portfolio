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
  description:
    "Anagha Yawale is a flutter developer and a UI/UX designer. She is based in India and currently in Pune city. She is a tech enthusiast and loves to explore new technologies.Check out her portfolio website to know more about her.",
  keywords:
    "Anagha Yawale, Anagha, Yawale, Anagha Yawale portfolio, Anagha Yawale website, Anagha Yawale flutter developer, Anagha Yawale UI/UX designer, Anagha Yawale Pune, Anagha Yawale India, Anagha Yawale portfolio website, Anagha Yawale portfolio website flutter, Anagha Yawale portfolio website UI/UX, Anagha Yawale portfolio website flutter developer, Anagha Yawale portfolio website UI/UX designer, Anagha Yawale portfolio website Pune, Anagha Yawale portfolio website India, Anagha Yawale portfolio website flutter developer Pune, Anagha Yawale portfolio website UI/UX designer Pune, Anagha Yawale portfolio website flutter developer India, Anagha Yawale portfolio website UI/UX designer India , Pune , Raisoni , Raisoni Pune , Raisoni University , Raisoni University Pune , Raisoni Pune University , Raisoni Pune University Pune , Flutter , Flutter developer , UI/UX , UI/UX designer , UI/UX designer Pune , UI/UX designer India , Flutter developer Pune , Flutter developer India , Flutter developer Pune India , UI/UX designer Pune India , UI/UX designer Pune India , Flutter developer UI/UX designer , Flutter developer UI/UX designer Pune , Flutter developer UI/UX designer India",
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
