import { Link } from "react-router-dom";
import thdo from '/th/go.jpg'

export function DoItem() {

    return (
        <>
            <Link className="fl" to="/Do">
                <picture>
                    <img src={thdo} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">A Plate of Donuts</div>
                    <Link className="ba" to="/Do">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Do() {
    return (
        <>
            <h1>do</h1>
        </>
    )
}

