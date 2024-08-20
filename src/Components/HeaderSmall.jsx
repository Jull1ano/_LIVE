import { LogoBig } from "./LogoBig"
import { LogoSmall } from "./LogoSmall"
import { Nav } from "./Nav"

export function HeaderSmall() {

    return (
        <>
            <ul className="forceback">
                <li>
                <a class="back" href="javascript:history.back()"><i class="fa-solid fa-chevron-left"></i><span>Back to Portfolio</span></a>
                </li>
                <li>
                    <LogoSmall/>
                </li>
            </ul>


        </>
    )
}