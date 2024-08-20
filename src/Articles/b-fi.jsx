import { Link } from "react-router-dom";
import thfi from '/th/wolf1.jpg'

export function FiItem() {

    return (
        <>
            <Link className="fl" to="/Fi">
                <picture>
                    <img src={thfi} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Fierce creativity</div>
                    <Link className="ba" to="/Fi">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Fi() {
    return (
        <>
            <h1>fi</h1>
        </>
    )
}

