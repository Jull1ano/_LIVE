import { Link } from "react-router-dom";
import thadr from '/th/get.jpg'

export function AdrItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thadr} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">High Performance Standards</div>
                <section class="infojos">
                    <div class="info">Vantage Program Website</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Adr() {
    return (
        <>
            <h1>adr</h1>
        </>
    )
}

