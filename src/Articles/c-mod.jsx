import { Link } from "react-router-dom";
import thmod from '/th/do.jpg'

export function ModItem() {

    return (
        <>
            <Link className="fl" to="/Mod">
                <picture>
                    <img src={thmod} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Modern Apartment</div>
                    <Link className="ba" to="/Mod">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Mod() {
    return (
        <>
            <h1>mod</h1>
        </>
    )
}

