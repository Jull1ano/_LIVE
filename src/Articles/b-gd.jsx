import { Link } from "react-router-dom";
import thgd from '/th/gd.jpg'

export function GdItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thgd} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Game of Demos</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Gd() {
    return (
        <>
            <h1>gd</h1>
        </>
    )
}

