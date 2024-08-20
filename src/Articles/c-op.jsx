import { Link } from "react-router-dom";
import thop from '/th/op.jpg'

export function OpItem() {

    return (
        <>
            <Link className="fl" to="/Op">
                <picture>
                    <img src={thop} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Open-Plan Kitchen</div>
                    <Link className="ba" to="/Op">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Op() {
    return (
        <>
            <h1>op</h1>
        </>
    )
}

