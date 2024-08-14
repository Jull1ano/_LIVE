import { Link } from "react-router-dom";
import thtech from '/th/ts2024.jpg'

export function TechItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thtech} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Tech Summit 2024 - Key Visual</div>
                <section class="infojos">
                    <div class="info">Landing Page, Newsletter, Social Media Banners, Design System, 3D Booth Design</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Tech() {
    return (
        <>
            <h1>tech</h1>
        </>
    )
}

