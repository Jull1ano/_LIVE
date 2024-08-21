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

            <div class="item2-gap">

                <div class="item2">
                    <h1>Fierce creativity</h1>
                    <h2>Flyer design</h2>

                    <div class="mb">

                        <img src="/wolf-flyer.jpg" alt="" loading="lazy" width="800" />
                        <img src="/wolf-poster.jpg" alt="" loading="lazy" width="800" />


                    </div>
                </div>

            </div>
        </>
    )
}

