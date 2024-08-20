import { Link } from "react-router-dom";
import thvdp from '/th/vdp.jpg'

export function VdpItem() {

    return (
        <>
            <Link className="fl" to="/Vdp">
                <picture>
                    <img src={thvdp} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Product Data Platform</div>
                <section class="infojos">
                    <div class="info">Product Landing Page and UI/UX Design</div>
                    <Link className="ba" to="/Vdp">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vdp() {
    return (
        <>
            <h1>vdp</h1>
        </>
    )
}

