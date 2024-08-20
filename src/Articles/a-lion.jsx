import { Link } from "react-router-dom";
import thlion from '/th/lion.jpg'

export function LionItem() {

    return (
        <>
            <Link className="fl" to="/Lion">
                <picture>
                    <img src={thlion} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Key Visual and Casino LP design</div>
                <section class="infojos">
                    <div class="info">Created a Desktop and Mobile Landing Page for the Casino Founding Members Campaign.</div>
                    <Link className="ba" to="/Lion">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Lion() {
    return (
        <>
            <h1>lion</h1>
        </>
    )
}

