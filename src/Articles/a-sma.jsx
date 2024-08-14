import { Link } from "react-router-dom";
import thsma from '/th/sma.jpg'

export function SmaItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thsma} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">UX User Flow - Gamification</div>
                <section class="infojos">
                    <div class="info">Mobile Design of User Flow for Smartico Integration, Widgets, Cards, Menus, Casino Offers & Bonuses etc</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Sma() {
    return (
        <>
            <h1>Sma</h1>
        </>
    )
}

