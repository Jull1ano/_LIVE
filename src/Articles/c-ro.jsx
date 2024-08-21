import { Link } from "react-router-dom";
import thro from '/th/mo2.jpg'

export function RoItem() {

    return (
        <>
            <Link className="fl" to="/Ro">
                <picture>
                    <img src={thro} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Room of May</div>
                    <Link className="ba" to="/Ro">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ro() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Moody Room</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/may-03.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/may-02.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/ime-03.jpg" alt="" loading="lazy" width="800" />
                    </div>

                </div>


            </div>
        </>
    )
}

