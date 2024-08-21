import { Link } from "react-router-dom";
import thsm from '/th/trv.jpg'

export function SmItem() {

    return (
        <>
            <Link className="fl" to="/Sm">
                <picture>
                    <img src={thsm} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Smart Investors</div>
                    <Link className="ba" to="/Sm">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Sm() {
    return (
        <>


            <div class="item2-gap">

                <div class="item2">
                    <h1>Smart Investors</h1>
                    <h2>Flyer design</h2>

                    <div class="mb">

                        <img src="/flyer-trv-a.jpg" alt="" loading="lazy" width="800" />
                        <img src="/flyer-trv-b1.jpg" alt="" loading="lazy" width="800" />




                        <img src="/fly.jpg" alt="" loading="lazy" width="800" />
                        <img src="/trv.jpg" alt="" loading="lazy" width="800" />

                        <img src="/pliant-forex-a.jpg" alt="" loading="lazy" width="800" />

                        <img src="/pliant-verde-b.jpg" alt="" loading="lazy" width="800" />
                        <img src="/pliant-inter-a.jpg" alt="" loading="lazy" width="800" />


                    </div>
                </div>

            </div>
        </>
    )
}

