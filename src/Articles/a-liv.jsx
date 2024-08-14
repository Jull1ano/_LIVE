import { Link } from "react-router-dom";
import thliv from '/th/cdm.jpg'

export function LivItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thliv} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Live Data Conference</div>
                <section class="infojos">
                    <div class="info">Mini Website for SaaS Conference</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Liv() {
    return (
        <>
            <h1>liv</h1>
        </>
    )
}

