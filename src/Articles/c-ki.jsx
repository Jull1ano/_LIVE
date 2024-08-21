import { Link } from "react-router-dom";
import thki from '/th/sc2.jpg'

export function KiItem() {

    return (
        <>
            <Link className="fl" to="/Ki">
                <picture>
                    <img src={thki} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Scandinavian Kitchen</div>
                    <Link className="ba" to="/Ki">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ki() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Scandinavian Kitchen</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/kit-01.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/kit-02.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/b6.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/kit-01x.jpg" alt="" loading="lazy" width="800" />
                    </div>

                </div>


            </div>
        </>
    )
}

