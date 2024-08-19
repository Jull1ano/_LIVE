import { Link } from "react-router-dom";
import thbo from '/th/bob.jpg'

export function BoItem() {

    return (
        <>
            <Link className="fl" to="/">
                <picture>
                    <img src={thbo} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Reinvent Yourself</div>
                    <Link className="ba" to="/">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Bo() {
    return (
        <>
            <h1>bo</h1>
        </>
    )
}

