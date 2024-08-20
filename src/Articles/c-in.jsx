import { Link } from "react-router-dom";
import thin from '/th/tr.jpg'

export function InItem() {

    return (
        <>
            <Link className="fl" to="/Ing">
                <picture>
                    <img src={thin} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Green Interior Design</div>
                    <Link className="ba" to="/Ing">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ing() {
    return (
        <>
            <h1>ing</h1>
        </>
    )
}

