import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const pathName = useLocation();

  // This effect runs whenever the path name changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathName]);

  return null;
}


export function Layout() {

    return (
        <>
            <header className="header"><Header /></header>
            <main  className="main container"><Outlet /></main>
            <footer  className="footer container"><Footer /></footer>
        </>
    )
}

