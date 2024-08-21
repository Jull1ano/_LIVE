import { Link } from "react-router-dom";
import thma from '/th/th-01.jpg'

export function MaItem() {

    return (
        <>
            <Link className="fl" to="/Ma">
                <picture>
                    <img src={thma} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Tech Summit 2024</div>
                    <Link className="ba" to="/Ma">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ma() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Tech Summit 2024</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/t-1600x800-SM.jpg" alt="" loading="lazy" width="1600" />
                        <img src="/t-970x250.jpg" alt="" loading="lazy" width="970" />
                        <img src="/t-300x250.jpg" alt="" loading="lazy" width="300" />
                        <img src="/t-468x60.jpg" alt="" loading="lazy" width="468" />
                        <img src="/t-728x90.jpg" alt="" loading="lazy" width="728" />
                        <img src="/t-600x250.jpg" alt="" loading="lazy" width="600" />
                        <img src="/t-250x250.jpg" alt="" loading="lazy" width="250" />
                        <img src="/t-300x600.jpg" alt="" loading="lazy" width="300" />
                        <img src="/t-160x600.jpg" alt="" loading="lazy" width="160" />

                    </div>
                </div>

            </div>

        </>
    )
}

