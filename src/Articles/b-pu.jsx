import { Link } from "react-router-dom";
import thpu from '/th/deer.jpg'

export function PuItem() {

    return (
        <>
            <Link className="fl" to="/Pu">
                <picture>
                    <img src={thpu} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Pushing the Boundaries</div>
                    <Link className="ba" to="/Pu">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Pu() {
    return (
        <>


            <div class="item2-gap">

                <div class="item2">
                    <h1>Pushing the Boundaries</h1>
                    <h2>Poster design</h2>

                    <div class="mb">
                        <img src="/deer-poster.jpg" alt="" loading="lazy" width="800" />
                        <img src="/deer-flyer.jpg" alt="" loading="lazy" width="800" />

                    </div>
                </div>

            </div>
        </>
    )
}

