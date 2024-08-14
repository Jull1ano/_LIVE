import { Link } from "react-router-dom";
import theas from '/th/cov.jpg'

export function EasItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={theas} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">We have you covered</div>
                <section class="infojos">
                    <div class="info">SaaS Product Page Design</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Eas() {
    return (
        <>
            <h1>eas</h1>
        </>
    )
}

