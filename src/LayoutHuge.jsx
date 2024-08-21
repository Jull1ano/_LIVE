import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { HeaderSmall } from "./Components/HeaderSmall";

export function LayoutHuge() {

    return (
        <>
            <header className="header blur"><HeaderSmall /></header>
            <main  className="article con"><Outlet /></main>
            <footer  className="footer container"><Footer /></footer>
        </>
    )
}

