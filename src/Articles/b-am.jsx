import { Link } from "react-router-dom";
import tham from '/th/ln3.jpg'

export function AmItem() {

    return (
        <>
            <Link className="fl" to="/Am">
                <picture>
                    <img src={tham} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Amazing Support</div>
                    <Link className="ba" to="/Am">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Am() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Amazing Support</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/lnh-02.jpg" alt="" loading="lazy" width="800" />
                        <img src="/lnh-04.jpg" alt="" loading="lazy" width="800" />
                        <img src="/lnh-07.jpg" alt="" loading="lazy" width="800" />


                    </div>
                </div>

            </div>
        </>
    )
}

