import { Link } from "react-router-dom";
import thmi from '/th/curs.jpg'

export function MiItem() {

    return (
        <>
            <Link className="fl" to="/Mi">
                <picture>
                    <img src={thmi} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Mission Possible</div>
                    <Link className="ba" to="/Mi">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Mi() {
    return (
        <>
            

<div class="item2-gap">


    <div class="item2">
        <h1>Mission Possible</h1>
        <h2>Poster design</h2>

        <div class="mb">
            <img src="/poster_fucsia-1.jpg" alt="" loading="lazy" width="700"/>
            <img src="/poster_blue-1.jpg" alt="" loading="lazy" width="700"/>

        </div>
    </div>

</div>
        </>
    )
}

