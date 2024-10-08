import { Link } from "react-router-dom"

export function Nav() {

    return (
        <>
            <nav className="nav">
                <ul className="longmenu">
                    <li><Link to="/" className="a1" title="Display all portfolio items in one page">Home</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/UIUX" className="a2" title="Display only Web Design item">UI<span className="uispan"> / </span>UX Design</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/Graphic" className="a3" title="Display only Graphics">Graphics</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/Motion" className="a4" title="Display only Motion Graphics items">Motion</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/Render" className="a5" title="Display only 3D Rendering">3D</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/About" className="a6" title="About me">My Story</Link></li>
                </ul>
                <ul className="shortmenu">
                    <li><Link to="/" className="a1" title="Display all portfolio items in one page">All</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/UIUX" className="a2" title="Display only Web Design item">UI<span className="uispan"> / </span>UX</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/Graphic" className="a3" title="Display only Graphics">Graphics</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/Motion" className="a4" title="Display only Motion Graphics items">Motion</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/Render" className="a5" title="Display only 3D Rendering">3D</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/About" className="a6" title="About me">About</Link></li>
                </ul>

            </nav>
        </>
    )
}