import { Link } from "react-router-dom";
import thvq from '/th/tk.jpg'

export function VqItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thvq} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">VQ Istanbul</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vq() {
    return (
        <>
            <h1>vq</h1>
        </>
    )
}

