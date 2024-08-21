import { Link } from "react-router-dom";
import thop from '/th/op.jpg'

export function OpItem() {

    return (
        <>
            <Link className="fl" to="/Op">
                <picture>
                    <img src={thop} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Open-Plan Kitchen</div>
                    <Link className="ba" to="/Op">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Op() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Open-Plan Kitchen</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/test-18.jpg" alt="" loading="lazy" />
                        <img src="/3d/test-22.jpg" alt="" loading="lazy" />
                        <img src="/3d/test-25.jpg" alt="" loading="lazy" />
                        <img src="/3d/test-26.jpg" alt="" loading="lazy" />
                        <img src="/3d/test-29.jpg" alt="" loading="lazy" />
                    </div>

                </div>

            </div>

        </>
    )
}

