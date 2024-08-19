import { Link } from "react-router-dom";
import thha from '/th/sarb.jpg'

export function HaItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thha} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Happy Holidays</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ha() {
    return (
        <>
            <h1>ha</h1>
        </>
    )
}

