import { Link } from "react-router-dom";
import thvds from '/th/vds.jpg'

export function VdsItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thvds} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">New Design System Released</div>
                <section class="infojos">
                    <div class="info">UI Kit and Visual Principles - Design System</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vds() {
    return (
        <>
            <h1>vds</h1>
        </>
    )
}

