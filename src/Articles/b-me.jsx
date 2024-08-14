import { Link } from "react-router-dom";
import thme from '/th/ntp.jpg'

export function MeItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thme} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Meet and Connect</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Me() {
    return (
        <>
            <h1>me</h1>
        </>
    )
}

