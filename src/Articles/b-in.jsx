import { Link } from "react-router-dom";
import thin from '/th/bur.jpg'

export function InItem() {

    return (
        <>
            <Link className="fl" to="/In">
                <picture>
                    <img src={thin} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Investitii Bursiere</div>
                    <Link className="ba" to="/In">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function In() {
    return (
        <>
            <h1>in</h1>
        </>
    )
}

