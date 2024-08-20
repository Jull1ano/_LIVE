import { Link } from "react-router-dom";
import thcub from '/th/cub.jpg'

export function CubItem() {

    return (
        <>
            <Link className="fl" to="/Cub">
                <picture>
                    <img src={thcub} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Data Management Solution</div>
                <section class="infojos">
                    <div class="info">SaaS Product Page Design, Platform</div>
                    <Link className="ba" to="/Cub">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Cub() {
    return (
        <>
            <h1>cub</h1>
        </>
    )
}

