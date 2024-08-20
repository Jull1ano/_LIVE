import { Link } from "react-router-dom";
import thenv from '/th/vgs.jpg'

export function EnvItem() {

    return (
        <>
            <Link className="fl" to="/Env">
                <picture>
                    <img src={thenv} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Expertise in the Public Sector</div>
                <section class="infojos">
                    <div class="info">SaaS Product Page Design, Design System</div>
                    <Link className="ba" to="/Env">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Env() {
    return (
        <>
            <h1>env</h1>
        </>
    )
}

