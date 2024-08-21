import { Link } from "react-router-dom";
import thow from '/th/g12.jpg'

export function OwItem() {

    return (
        <>
            <Link className="fl" to="/Ow">
                <picture>
                    <img src={thow} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Own your Data</div>
                    <Link className="ba" to="/Ow">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ow() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Own your Data</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/g1.jpg" alt="" loading="lazy" width="800" />
                        <img src="/some1.png" alt="" loading="lazy" width="800" />
                        <img src="/g2.jpg" alt="" loading="lazy" width="800" />

                    </div>
                </div>

            </div>
        </>
    )
}

