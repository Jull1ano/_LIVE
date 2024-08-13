import { Link } from "react-router-dom";
import thfeb from '/th/feb.jpg'

export function FebItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thfeb} alt="" />
                </picture>
            </Link>
            <div class="ths">V12 Product Launch Event</div>
            <section class="infojos">
                <div class="info">SaaS Product Page Design - Marketing</div>
                <Link className="ba" to="/">
                    <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                </Link>
            </section>
        </>
    )
}

export function Feb() {
    return (
        <>
            <h1>Feb</h1>
        </>
    )
}

