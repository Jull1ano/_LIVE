import { Link } from "react-router-dom";
import thac from '/th/rlc.jpg'

export function AcItem() {

    return (
        <>
            <Link className="fl" to="/Ac">
                <picture>
                    <img src={thac} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Achieve Your Potential</div>
                    <Link className="ba" to="/Ac">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ac() {
    return (
        <>
            <h1>ac</h1>
        </>
    )
}

