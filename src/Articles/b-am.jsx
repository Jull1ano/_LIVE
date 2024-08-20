import { Link } from "react-router-dom";
import tham from '/th/ln3.jpg'

export function AmItem() {

    return (
        <>
            <Link className="fl" to="/Am">
                <picture>
                    <img src={tham} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Amazing Support</div>
                    <Link className="ba" to="/Am">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Am() {
    return (
        <>
            <h1>am</h1>
        </>
    )
}

