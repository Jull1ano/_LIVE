import { Link } from "react-router-dom";
import thgr from '/th/ok.jpg'

export function GrItem() {

    return (
        <>
            <Link className="fl" to="/Gr">
                <picture>
                    <img src={thgr} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Green Kitchen</div>
                    <Link className="ba" to="/Gr">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Gr() {
    return (
        <>
            <h1>gr</h1>
        </>
    )
}

