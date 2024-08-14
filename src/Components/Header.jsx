import { LogoBig } from "./LogoBig"
import { Nav } from "./Nav"

export function Header() {

    return (
        <>
            <ul className="header-controls">
                <li>
                    <LogoBig />
                </li>
                <li>
                    <Nav />
                </li>
            </ul>


        </>
    )
}