import { Link } from "react-router-dom";
import thme from '/th/ntp.jpg'

export function MeItem() {

    return (
        <>
            <Link className="fl" to="/Me">
                <picture>
                    <img src={thme} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Meet and Connect</div>
                    <Link className="ba" to="/Me">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Me() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Meet and Connect</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/1600x800-ntp.jpg" alt="" loading="lazy" width="800" />
                        <img src="/1200x628-vl.jpg" alt="" loading="lazy" width="800" />
                        <img src="/1600x800-06-blog.png" alt="" loading="lazy" width="800" />

                    </div>
                </div>

            </div>
        </>
    )
}

