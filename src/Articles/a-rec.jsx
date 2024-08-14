import { Link } from "react-router-dom";
import threc from '/th/rec.jpg'

export function RecItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={threc} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Product Page for Data Platform</div>
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

export function Rec() {
    return (
        <>
            <h1>rec</h1>
        </>
    )
}

