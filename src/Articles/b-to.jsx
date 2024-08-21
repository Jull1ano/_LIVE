import { Link } from "react-router-dom";
import thto from '/th/tools1.jpg'

export function ToItem() {

    return (
        <>
            <Link className="fl" to="/To">
                <picture>
                    <img src={thto} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Tools for Training</div>
                    <Link className="ba" to="/To">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function To() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Tools for Training</h1>
                    <h2>Poster design</h2>

                    <div class="mb">

                        <img src="/blocknotes-irt-3-1x.jpg" alt="" loading="lazy" width="533" />
                        <img src="/blocknotes-irt-2.jpg" alt="" loading="lazy" width="533" />

                        <img src="/irt-cover-2.jpg" alt="" loading="lazy" width="533" />

                    </div>
                </div>

                <div class="item2">
                    <h2>Folder design</h2>
                    <div class="mb">
                        <img src="/mapa-rlc31.jpg" alt="" loading="lazy" width="533" />
                        <img src="/mapa-rlc1-1.jpg" alt="" loading="lazy" width="533" />
                    </div>
                </div>

            </div>
        </>
    )
}

