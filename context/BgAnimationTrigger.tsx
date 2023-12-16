"use client"
import { createContext, useContext, useState } from "react";


interface startAnimationProps {
  restart: boolean;
  setRestart: (mode: boolean) => void;
}

const AnimationContext = createContext<startAnimationProps>({
  restart: false,
  setRestart: () => {},
});

export const AnimationProvider = ({ children }: any) => {
    const [restart, setRestart] = useState<startAnimationProps>({
        restart: false,
        setRestart: () => {},
    });

    return (
        <AnimationContext.Provider value={{ 
            restart: restart.restart, 
            setRestart: (mode: boolean) => setRestart({restart: mode, setRestart: () => {}})
         }}>
        
            {children}
        </AnimationContext.Provider>
    );
}

export const useAnimationContext = () => useContext(AnimationContext);