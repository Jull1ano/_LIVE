import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { HeaderSmall } from "./Components/HeaderSmall";

export function LayoutArt() {

    return (
        <>
            <header className="header blur"><HeaderSmall /></header>
            <main  className="article container"><Outlet /></main>
            <footer  className="footer container"><Footer /></footer>
        </>
    )
}

