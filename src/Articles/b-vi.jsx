import { Link } from "react-router-dom";
import thvi from '/th/solid.jpg'

export function ViItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thvi} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Data Foundations</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vi() {
    return (
        <>
            <h1>vi</h1>
        </>
    )
}

