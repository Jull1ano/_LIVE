import { Link } from "react-router-dom";
import thte from '/th/ln2.jpg'

export function TeItem() {

    return (
        <>
            <Link className="fl" to="/Te">
                <picture>
                    <img src={thte} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Technical Support</div>
                    <Link className="ba" to="/Te">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Te() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Amazing Support</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/lnh-03.jpg" alt="" loading="lazy" width="800" />
                        <img src="/lnh-05.jpg" alt="" loading="lazy" width="800" />
                        <img src="/lnh-01.jpg" alt="" loading="lazy" width="800" />
                        <img src="/lnh-06.jpg" alt="" loading="lazy" width="800" />

                    </div>
                </div>

            </div>
        </>
    )
}

