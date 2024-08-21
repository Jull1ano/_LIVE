import { Link } from "react-router-dom";
import thvo from '/th/vv.jpg'

export function VoItem() {

    return (
        <>
            <Link className="fl" to="/Vo">
                <picture>
                    <img src={thvo} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Digital Transformation</div>
                    <Link className="ba" to="/Vo">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vo() {
    return (
        <>


            <div class="item2-gap">

                <div class="item2">
                    <h1>Digital Transformation</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/volvobig.jpg" alt="" loading="lazy" width="800" />
                        <img src="/fortbig.jpg" alt="" loading="lazy" width="800" />
                        <img src="/greenfl.png" alt="" loading="lazy" width="533" />
                        <img src="/success-creative-2.jpg" alt="" loading="lazy" width="533" />
                        <img src="/1600x800-port.jpg" alt="" loading="lazy" width="800" />
                        <img src="/1200-telefonica.jpg" alt="" loading="lazy" width="800" />





                    </div>
                </div>

            </div>
        </>
    )
}

