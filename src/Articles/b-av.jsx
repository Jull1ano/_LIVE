import { Link } from "react-router-dom";
import thav from '/th/for.jpg'

export function AvItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thav} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Availability and Enterprise</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Av() {
    return (
        <>
            <h1>av</h1>
        </>
    )
}

