import { Link } from "react-router-dom";
import thbo from '/th/bob.jpg'

export function BoItem() {

    return (
        <>
            <Link className="fl" to="/Bo">
                <picture>
                    <img src={thbo} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Reinvent Yourself</div>
                    <Link className="ba" to="/Bo">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Bo() {
    return (
        <>


            <div class="item2-gap">

                <div class="item2">
                    <h1>Reinvent Yourself</h1>
                    <h2>Banners - Digital Marketing</h2>

                    <div class="mb">

                        <img src="/bob-pliant-fatza.jpg" alt="" loading="lazy" width="800" />
                        <img src="/bob-rollup-1.jpg" alt="" loading="lazy" width="350" />
                        <img src="/bob.png" alt="" loading="lazy" width="533" class="sha" />
                        <img src="/m-bob-proctor-aida-cv-m1.jpg" alt="" loading="lazy" width="533" />


                    </div>
                </div>

            </div>
        </>
    )
}

