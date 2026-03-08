"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import en from "./en.json";
import ru from "./ru.json";
import uz from "./uz.json";

export type Locale = "en" | "ru" | "uz";

const dictionaries: Record<Locale, typeof en> = { en, ru, uz };

type LanguageContextType = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (path: string) => string | string[] | Record<string, unknown>[];
    dict: typeof en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("en");

    const dict = dictionaries[locale];

    const t = useCallback(
        (path: string): string | string[] | Record<string, unknown>[] => {
            const keys = path.split(".");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let result: any = dict;
            for (const key of keys) {
                result = result?.[key];
            }
            return result ?? path;
        },
        [dict]
    );

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t, dict }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
