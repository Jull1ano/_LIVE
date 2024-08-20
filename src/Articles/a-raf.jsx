import { Link } from "react-router-dom";
import thraf from '/th/raf.jpg'

export function RafItem() {

    return (
        <>
            <Link className="fl" to="/Raf">
                <picture>
                    <img src={thraf} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">RAF - User Flow</div>
                <section class="infojos">
                    <div class="info">Mobile Design of User Flow for Refer a Friend Campaign, UX Research and User Journey.</div>
                    <Link className="ba" to="/Raf">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Raf() {
    return (
        <>
            <h1>raf</h1>
        </>
    )
}

