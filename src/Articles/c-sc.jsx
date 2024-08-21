import { Link } from "react-router-dom";
import thsc from '/th/buc.jpg'

export function ScItem() {

    return (
        <>
            <Link className="fl" to="/Sc">
                <picture>
                    <img src={thsc} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Scandinavian Interior Design</div>
                    <Link className="ba" to="/Sc">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Sc() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Scandinavian Interior Design</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/st-01.jpg" alt="" loading="lazy" />
                        <img src="/3d/st-02.jpg" alt="" loading="lazy" />
                        <img src="/3d/st-03.jpg" alt="" loading="lazy" />
                        <img src="/3d/ime-02.jpg" alt="" loading="lazy" width="800" />
                    </div>

                </div>


            </div>
        </>
    )
}

