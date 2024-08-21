import { Link } from "react-router-dom";
import thdo from '/th/go.jpg'

export function DoItem() {

    return (
        <>
            <Link className="fl" to="/Do">
                <picture>
                    <img src={thdo} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">A Plate of Donuts</div>
                    <Link className="ba" to="/Do">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Do() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>A Plate of Donuts</h1>
                    <h2>Product Visualization</h2>

                    <div class="mb">

                        <img src="/3d/don-30.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/don-31.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/3d/don-01.jpg" alt="" loading="lazy" width="800" />
                    </div>

                </div>


            </div>
        </>
    )
}

