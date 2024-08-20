import { Link } from "react-router-dom";
import thcus from '/th/spk.jpg'

export function CusItem() {

    return (
        <>
            <Link className="fl" to="/Cus">
                <picture>
                    <img src={thcus} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Addressing Customer Needs</div>
                <section class="infojos">
                    <div class="info">Product Platform, Landing Page, Marketing</div>
                    <Link className="ba" to="/Cus">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Cus() {
    return (
        <>
            <h1>cus</h1>
        </>
    )
}

