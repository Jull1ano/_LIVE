import { Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

export function Layout() {

    return (
        <>
            <header className="header"><Header /></header>
            <main  className="main container"><Outlet /></main>
            <footer  className="footer container"><Footer /></footer>
        </>
    )
}

