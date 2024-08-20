import { Link } from "react-router-dom";
import thro from '/th/mo2.jpg'

export function RoItem() {

    return (
        <>
            <Link className="fl" to="/Ro">
                <picture>
                    <img src={thro} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Room of May</div>
                    <Link className="ba" to="/Ro">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ro() {
    return (
        <>
            <h1>ro</h1>
        </>
    )
}

