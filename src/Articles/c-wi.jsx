import { Link } from "react-router-dom";
import thwi from '/th/cel3.jpg'

export function WiItem() {

    return (
        <>
            <Link className="fl" to="/Wi">
                <picture>
                    <img src={thwi} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Wine Cellar</div>
                    <Link className="ba" to="/Wi">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Wi() {
    return (
        <>
            <div class="item2-gap">

                <div class="item2">
                    <h1>Wine Cellar</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/cellar-06.jpg" alt="" loading="lazy" />
                        <img src="/3d/cellar-09.jpg" alt="" loading="lazy" />
                    </div>

                </div>

            </div>
        </>
    )
}

