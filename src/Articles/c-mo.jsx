import { Link } from "react-router-dom";
import thmo from '/th/mo.jpg'

export function MoItem() {

    return (
        <>
            <Link className="fl" to="/Mo">
                <picture>
                    <img src={thmo} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Moody Room</div>
                    <Link className="ba" to="/Mo">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Mo() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Moody Room</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/may-01.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/may-04.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/ime-03.jpg" alt="" loading="lazy" width="800" />
                    </div>

                </div>


            </div>
        </>
    )
}

