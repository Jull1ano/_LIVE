import { Link } from "react-router-dom";
import thnet from '/th/wig.jpg'

export function NetItem() {

    return (
        <>
            <Link className="fl" to="/Net">
                <picture>
                    <img src={thnet} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Women in Tech</div>
                <section class="infojos">
                    <div class="info">Mini Website for Team Members, Desktop and Mobile</div>
                    <Link className="ba" to="/Net">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Net() {
    return (
        <>
            <h1>net</h1>
        </>
    )
}

