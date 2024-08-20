import { Link } from "react-router-dom";
import thvmz from '/th/vmz.jpg'

export function VmzItem() {

    return (
        <>
            <Link className="fl" to="/Vmz">
                <picture>
                    <img src={thvmz} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Marketing Summit Award</div>
                <section class="infojos">
                    <div class="info">Mini Website for SaaS Summit</div>
                    <Link className="ba" to="/Vmz">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vmz() {
    return (
        <>
            <h1>vmz</h1>
        </>
    )
}

