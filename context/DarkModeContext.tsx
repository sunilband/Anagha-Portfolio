"use client"
import { createContext, useContext, useState } from "react";

interface ModeProps {
  darkMode: boolean;
}

interface Mode {
  mode: ModeProps;
  setMode: (mode: ModeProps) => void;
}

const ModeContext = createContext<Mode>({
  mode: { darkMode: false },
  setMode: () => {},
});

export const ModeProvider = ({ children }: any) => {
  const [mode, setMode] = useState<ModeProps>({
    darkMode: false,
  });

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useModeContext = () => useContext(ModeContext);