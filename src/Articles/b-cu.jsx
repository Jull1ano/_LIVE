import { Link } from "react-router-dom";
import thcu from '/th/47.jpg'

export function CuItem() {

    return (
        <>
            <Link className="fl" to="/Cu">
                <picture>
                    <img src={thcu} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Customers Choice</div>
                    <Link className="ba" to="/Cu">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Cu() {
    return (
        <>
            <h1>cu</h1>
        </>
    )
}

