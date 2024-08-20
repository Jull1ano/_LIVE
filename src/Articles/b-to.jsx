import { Link } from "react-router-dom";
import thto from '/th/tools1.jpg'

export function ToItem() {

    return (
        <>
            <Link className="fl" to="/To">
                <picture>
                    <img src={thto} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Tools for Training</div>
                    <Link className="ba" to="/To">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function To() {
    return (
        <>
            <h1>to</h1>
        </>
    )
}

