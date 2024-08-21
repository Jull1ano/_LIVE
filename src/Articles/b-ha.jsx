import { Link } from "react-router-dom";
import thha from '/th/sarb.jpg'

export function HaItem() {

    return (
        <>
            <Link className="fl" to="/Ha">
                <picture>
                    <img src={thha} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <section class="infojos">
                    <div class="ths">Happy Holidays</div>
                    <Link className="ba" to="/Ha">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ha() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Happy Holidays</h1>
                    <h2>Postcard design</h2>
                    <div class="mb">
                        <img src="/felicitare1.jpg" alt="" loading="lazy" width="533" />
                        <img src="/felicitare.jpg" alt="" loading="lazy" width="533" />
                        <img src="/mn.jpg" alt="" loading="lazy" width="533" />


                    </div>
                </div>

            </div>
        </>
    )
}

