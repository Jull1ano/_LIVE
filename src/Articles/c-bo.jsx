import { Link } from "react-router-dom";
import thbo from '/th/so3.jpg'

export function BoItem() {

    return (
        <>
            <Link className="fl" to="/Bot">
                <picture>
                    <img src={thbo} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Booth Design</div>
                    <Link className="ba" to="/Bot">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Bot() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Booth Design</h1>
                    <h2>Interior Design and Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/te-01.jpg" alt="" loading="lazy" />

                        <img src="/3d/te-03.jpg" alt="" loading="lazy" />
                        <img src="/3d/te-05.jpg" alt="" loading="lazy" />
                        <img src="/3d/te-04.jpg" alt="" loading="lazy" />

                        <img src="/3d/te-06.jpg" alt="" loading="lazy" />
                        <img src="/3d/te-07.jpg" alt="" loading="lazy" />
                        <img src="/3d/te-08.jpg" alt="" loading="lazy" width="800" />
                    </div>

                </div>


            </div>
        </>
    )
}

