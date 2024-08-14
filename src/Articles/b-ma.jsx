import { Link } from "react-router-dom";
import thma from '/th/th-01.jpg'

export function MaItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thma} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Tech Summit 2024</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ma() {
    return (
        <>
            <h1>ma</h1>
        </>
    )
}

