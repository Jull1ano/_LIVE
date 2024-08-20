import { Link } from "react-router-dom";
import thsc from '/th/buc.jpg'

export function ScItem() {

    return (
        <>
            <Link className="fl" to="/Sc">
                <picture>
                    <img src={thsc} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Scandinavian Interior Design</div>
                    <Link className="ba" to="/Sc">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Sc() {
    return (
        <>
            <h1>sc</h1>
        </>
    )
}

