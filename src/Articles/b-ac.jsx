import { Link } from "react-router-dom";
import thac from '/th/rlc.jpg'

export function AcItem() {

    return (
        <>
            <Link className="fl" to="/Ac">
                <picture>
                    <img src={thac} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Achieve Your Potential</div>
                    <Link className="ba" to="/Ac">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ac() {
    return (
        <>


            <div class="item2-gap">


                <div class="item2">
                    <h1>Achieve Your Potential</h1>
                    <h2>Flyer design</h2>

                    <div class="mb">
                        <img src="/flyer-a-rlc.jpg" alt="" loading="lazy" width="800" />
                        <img src="/flyer-b2-rlc.jpg" alt="" loading="lazy" width="800" />

                    </div>
                </div>

                <div class="item2 suta">
                    <h2>Rollup design</h2>
                    <div class="mb">
                        <img src="/rollup-rlc-1.jpg" alt="" loading="lazy" width="480" />
                    </div>
                </div>

            </div>
        </>
    )
}

