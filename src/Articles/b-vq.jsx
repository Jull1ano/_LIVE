import { Link } from "react-router-dom";
import thvq from '/th/tk.jpg'

export function VqItem() {

    return (
        <>
            <Link className="fl" to="/Vq">
                <picture>
                    <img src={thvq} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">VQ Istanbul</div>
                    <Link className="ba" to="/Vq">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vq() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>VQ Istanbul</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/th/tk.jpg" alt="" loading="lazy" width="600" />
                        <img src="/1920x500-02.jpg" alt="" loading="lazy" width="600" />
                        <img src="/vgs-bnr.png" alt="" loading="lazy" width="600" />
                        <img src="/1920x500-01.jpg" alt="" loading="lazy" width="600" />
                        <img src="/1920x500-03.jpg" alt="" loading="lazy" width="600" />

                    </div>
                </div>

            </div>
        </>
    )
}

