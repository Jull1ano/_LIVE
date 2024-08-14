import { Link } from "react-router-dom";
import thent from '/th/ft.jpg'

export function EntItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thent} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Integrated Marketing Effort</div>
                <section class="infojos">
                    <div class="info">Landing Page for SaaS Cloud Summit</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ent() {
    return (
        <>
            <h1>ent</h1>
        </>
    )
}

