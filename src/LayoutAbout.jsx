import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

export function LayoutAbout() {

    return (
        <>
            <header className="header blur"><Header /></header>
            <main  className="article-2 container"><Outlet /></main>
            <footer  className="footer container"><Footer /></footer>
        </>
    )
}

