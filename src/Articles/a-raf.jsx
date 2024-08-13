import { Link } from "react-router-dom";
import thraf from '/th/raf.jpg'

export function RafItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thraf} alt="" />
                </picture>
            </Link>
            <div class="ths">RAF - User Flow</div>
            <section class="infojos">
                <div class="info">RAF - User Flow</div>
                <Link className="ba" to="/">
                    <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                </Link>
            </section>
        </>
    )
}

export function Raf() {
    return (
        <>
            <h1>raf</h1>
        </>
    )
}

