import { Link } from "react-router-dom";
import thsin from '/th/vbsf.jpg'

export function SinItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thsin} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Integrated Approach for Backup</div>
                <section class="infojos">
                    <div class="info">SaaS Product Platform Design</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Sin() {
    return (
        <>
            <h1>sin</h1>
        </>
    )
}

