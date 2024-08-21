import { Link } from "react-router-dom";
import thin from '/th/tr.jpg'

export function InItem() {

    return (
        <>
            <Link className="fl" to="/Ing">
                <picture>
                    <img src={thin} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Green Interior Design</div>
                    <Link className="ba" to="/Ing">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ing() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Green Interior Design</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/ss-01.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/ss-03.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/ss-02.jpg" alt="" loading="lazy" width="1117" />
                    </div>

                </div>


            </div>
        </>
    )
}

