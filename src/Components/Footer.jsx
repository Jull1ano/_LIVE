import { LogoBig } from "./LogoBig"
import { LogoSmall } from "./LogoSmall"

export function Footer() {

    return (
        <>
        <div className="btline"></div>
            <div className="footext">The {' '}{'< '}<strong>CODE</strong>{' />'}{' '} of this portfolio itself is also a showcase of my front-end development expertise, <br/>
            because it's created entirely by me using the latest technologies (REACT + Vite, HTML, CSS, JavaScript etc). I hope you like it! :)</div>
            <div className="copy">©2024 lulian losub. All rights reserved.</div>
            <LogoBig/>
        </>
    )
}