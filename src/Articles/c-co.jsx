import { Link } from "react-router-dom";
import thco from '/th/pu1.jpg'

export function CoItem() {

    return (
        <>
            <Link className="fl" to="/Co">
                <picture>
                    <img src={thco} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Cozy place</div>
                    <Link className="ba" to="/Co">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Co() {
    return (
        <>
            <h1>co</h1>
        </>
    )
}

