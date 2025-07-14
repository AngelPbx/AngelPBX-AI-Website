"use client";
import { createContext, useContext, useRef } from "react";

const SwiperContext = createContext();

export const useSwiper = () => useContext(SwiperContext);

export const SwiperProvider = ({ children }) => {
    const swiperRef = useRef(null);

    return (
        <SwiperContext.Provider value={{ swiperRef }}>
            {children}
        </SwiperContext.Provider>
    );
};
