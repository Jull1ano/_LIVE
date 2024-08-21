import { Link } from "react-router-dom";
import thco from '/th/pu1.jpg'

export function CoItem() {

    return (
        <>
            <Link className="fl" to="/Co">
                <picture>
                    <img src={thco} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Cozy place</div>
                    <Link className="ba" to="/Co">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Co() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Cozy place</h1>
                    <h2>Interior Design and Architecture Visualization</h2>
                    <div class="mb">

                        <img src="/3d/cp-01.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/cp-02.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/sce-01.jpg" alt="" loading="lazy" width="800" />

                    </div>

                </div>



            </div>
        </>
    )
}

