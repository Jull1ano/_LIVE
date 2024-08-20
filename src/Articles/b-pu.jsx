import { Link } from "react-router-dom";
import thpu from '/th/deer.jpg'

export function PuItem() {

    return (
        <>
            <Link className="fl" to="/Pu">
                <picture>
                    <img src={thpu} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Pushing the Boundaries</div>
                    <Link className="ba" to="/Pu">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Pu() {
    return (
        <>
            <h1>pu</h1>
        </>
    )
}

