import { Link } from "react-router-dom";
import thsm from '/th/trv.jpg'

export function SmItem() {

    return (
        <>
            <Link className="fl" to="/Sm">
                <picture>
                    <img src={thsm} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Smart Investors</div>
                    <Link className="ba" to="/Sm">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Sm() {
    return (
        <>
            <h1>sm</h1>
        </>
    )
}

