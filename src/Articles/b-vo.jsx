import { Link } from "react-router-dom";
import thvo from '/th/vv.jpg'

export function VoItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thvo} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Digital Transformation</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vo() {
    return (
        <>
            <h1>vo</h1>
        </>
    )
}

