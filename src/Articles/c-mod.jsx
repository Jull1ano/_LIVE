import { Link } from "react-router-dom";
import thmod from '/th/do.jpg'

export function ModItem() {

    return (
        <>
            <Link className="fl" to="/Mod">
                <picture>
                    <img src={thmod} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Modern Apartment</div>
                    <Link className="ba" to="/Mod">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Mod() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Modern apartment</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/rm-03.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/rm-02.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/rm-01.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/ime-01.jpg" alt="" loading="lazy" width="800" />
                    </div>

                </div>



            </div>
        </>
    )
}

