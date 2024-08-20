import { Link } from "react-router-dom";
import thpan from '/th/m36.jpg'

export function PanItem() {

    return (
        <>
            <Link className="fl" to="/Pan">
                <picture>
                    <img src={thpan} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Data Resiliency Pillars</div>
                <section class="infojos">
                    <div class="info">Product Landing Page - Marketing.</div>
                    <Link className="ba" to="/Pan">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Pan() {
    return (
        <>
            <h1>pan</h1>
        </>
    )
}

