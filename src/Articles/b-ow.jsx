import { Link } from "react-router-dom";
import thow from '/th/g12.jpg'

export function OwItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thow} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Own your Data</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ow() {
    return (
        <>
            <h1>ow</h1>
        </>
    )
}

