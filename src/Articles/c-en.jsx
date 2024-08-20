import { Link } from "react-router-dom";
import then from '/th/st.jpg'

export function EnItem() {

    return (
        <>
            <Link className="fl" to="/En">
                <picture>
                    <img src={then} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Entrance Hall</div>
                    <Link className="ba" to="/En">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function En() {
    return (
        <>
            <h1>en</h1>
        </>
    )
}

