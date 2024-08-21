import { Link } from "react-router-dom";
import thin from '/th/bur.jpg'

export function InItem() {

    return (
        <>
            <Link className="fl" to="/In">
                <picture>
                    <img src={thin} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Investitii Bursiere</div>
                    <Link className="ba" to="/In">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function In() {
    return (
        <>


            <div class="item2-gap">

                <div class="item2"><h1>Instrumente Derivate</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/bur.jpg" alt="" loading="lazy" width="800" />
                        <img src="/demo-f.jpg" alt="" loading="lazy" width="800" />
                        <img src="/facebook-derivate.jpg" alt="" loading="lazy" width="800" />
                        <img src="/rosia-banners.png" alt="" loading="lazy" width="533" class="sha" />
                        <img src="/b-home.jpg" alt="" loading="lazy" width="533" />


                        <img src="/bannere1.png" alt="" loading="lazy" width="533" class="sha" />
                        <img src="/banners-forex-green.png" alt="" loading="lazy" width="533" class="sha" />

                        <img src="/facebook-actiuni.jpg" alt="" loading="lazy" width="800" />
                        <img src="/bannere4.png" alt="" loading="lazy" width="533" class="sha" />
                        <img src="/bannere21.png" alt="" loading="lazy" width="533" class="sha" />

                        <img src="/banners-forex4.png" alt="" loading="lazy" width="533" class="sha" />

                        <img src="/branding.jpg" alt="" loading="lazy" width="800" />

                    </div>
                </div>

            </div>
        </>
    )
}

