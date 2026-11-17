"use client";
import {createContext,useContext,useEffect,useState,type ReactNode} from "react";
type Language="de"|"en";
const LanguageContext=createContext<{language:Language;setLanguage:(language:Language)=>void}>({language:"de",setLanguage:()=>{}});
export function LanguageProvider({children}:{children:ReactNode}){const [language,setLanguage]=useState<Language>("de");const [ready,setReady]=useState(false);useEffect(()=>{const saved=window.localStorage.getItem("delivio-language");if(saved==="de"||saved==="en")setLanguage(saved);setReady(true)},[]);useEffect(()=>{document.documentElement.lang=language;if(ready)window.localStorage.setItem("delivio-language",language)},[language,ready]);return <LanguageContext.Provider value={{language,setLanguage}}>{children}</LanguageContext.Provider>}
export function useLanguage(){return useContext(LanguageContext)}
export function LanguageSwitch(){const {language,setLanguage}=useLanguage();return <div className="language-switch" role="group" aria-label="Language / Sprache"><button type="button" onClick={()=>setLanguage("de")} aria-pressed={language==="de"}>DE</button><span>/</span><button type="button" onClick={()=>setLanguage("en")} aria-pressed={language==="en"}>EN</button></div>}
