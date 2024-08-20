import { Link } from "react-router-dom";
import thbo from '/th/so3.jpg'

export function BoItem() {

    return (
        <>
            <Link className="fl" to="/Bot">
                <picture>
                    <img src={thbo} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Booth Design</div>
                    <Link className="ba" to="/Bot">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Bot() {
    return (
        <>
            <h1>bot</h1>
        </>
    )
}

