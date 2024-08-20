import { Link } from "react-router-dom";
import thmo from '/th/mo.jpg'

export function MoItem() {

    return (
        <>
            <Link className="fl" to="/Mo">
                <picture>
                    <img src={thmo} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Moody Room</div>
                    <Link className="ba" to="/Mo">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Mo() {
    return (
        <>
            <h1>mo</h1>
        </>
    )
}

