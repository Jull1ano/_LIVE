import { Link } from "react-router-dom";
import thmi from '/th/curs.jpg'

export function MiItem() {

    return (
        <>
            <Link className="fl" to="/Mi">
                <picture>
                    <img src={thmi} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Mission Possible</div>
                    <Link className="ba" to="/Mi">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Mi() {
    return (
        <>
            <h1>mi</h1>
        </>
    )
}

