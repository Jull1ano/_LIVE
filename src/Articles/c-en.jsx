import { Link } from "react-router-dom";
import then from '/th/st.jpg'

export function EnItem() {

    return (
        <>
            <Link className="fl" to="/En">
                <picture>
                    <img src={then} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Entrance Hall</div>
                    <Link className="ba" to="/En">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function En() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Entrance Hall</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/05-les-13x-8K.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/shoes.jpg" alt="" loading="lazy" width="1117" />

                        <img src="/3d/05-les-14.jpg" alt="" loading="lazy" width="1117" />
                    </div>

                </div>


            </div>
        </>
    )
}

