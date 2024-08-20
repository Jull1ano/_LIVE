import { Link } from "react-router-dom";
import thki from '/th/sc2.jpg'

export function KiItem() {

    return (
        <>
            <Link className="fl" to="/Ki">
                <picture>
                    <img src={thki} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Scandinavian Kitchen</div>
                    <Link className="ba" to="/Ki">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ki() {
    return (
        <>
            <h1>ki</h1>
        </>
    )
}

