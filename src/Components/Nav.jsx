import { Link } from "react-router-dom"

export function Nav() {

    return (
        <>
            <nav>
                <ul className="longmenu">
                    <li><Link to="/" className="a1" title="Display all portfolio items in one page">All Work</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/UIUX" className="a2" title="Display only Web Design item">UI<span className="uispan"> / </span>UX Design</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/Graphic" className="a3" title="Display only Graphics">Graphic Design</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/Motion" className="a4" title="Display only Motion Graphics items">Motion Graphics</Link></li>
                    <li class="bltes">·</li>
                    <li><Link to="/Render" className="a5" title="Display only 3D Rendering">3D Rendering</Link></li>
                </ul>
            </nav>
        </>
    )
}