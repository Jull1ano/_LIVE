import { Link } from "react-router-dom";
import thte from '/th/ln2.jpg'

export function TeItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thte} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Technical Support</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Te() {
    return (
        <>
            <h1>te</h1>
        </>
    )
}

