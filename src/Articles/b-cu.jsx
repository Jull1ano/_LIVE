import { Link } from "react-router-dom";
import thcu from '/th/47.jpg'

export function CuItem() {

    return (
        <>
            <Link className="fl" to="/Cu">
                <picture>
                    <img src={thcu} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Customers Choice</div>
                    <Link className="ba" to="/Cu">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Cu() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Customers Choice</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/cu.jpg" alt="" loading="lazy" width="800" />
                        <img src="/cisclive.jpg" alt="" loading="lazy" width="800" />
                        <img src="/2234-vr.jpg" alt="" loading="lazy" width="800" />
                        <img src="/coms.jpg" alt="" loading="lazy" width="800" />
                        <img src="/freets.jpg" alt="" loading="lazy" width="800" />


                    </div>
                </div>

            </div>
        </>
    )
}

