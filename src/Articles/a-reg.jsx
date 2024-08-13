import { Link } from "react-router-dom";
import threg from '/th/reg2.jpg'

export function RegItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={threg} alt="" />
                </picture>
            </Link>
            <div class="ths">UX Register Flow</div>
            <section class="infojos">
                <div class="info">Mobile Design of User Flow for Sign-Up Pages, UX Research and User Journey.</div>
                <Link className="ba" to="/">
                    <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                </Link>
            </section>
        </>
    )
}

export function Reg() {
    return (
        <>
            <h1>reg</h1>
        </>
    )
}

