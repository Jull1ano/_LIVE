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

            <div class="item2-gap">

                <div class="item2">
                    <h1>Green Kitchen</h1>
                    <h2>Architecture Visualization</h2>

                    <div class="mb">
                        <img src="/3d/okit-09.jpg" alt="" loading="lazy" width="1350" />
                        <img src="/3d/okit-13.jpg" alt="" loading="lazy" width="1350" />
                        <img src="/3d/okit-11.jpg" alt="" loading="lazy" width="1350" />
                        <img src="/3d/okit-00.jpg" alt="" loading="lazy" width="800" />
                    </div>

                </div>

            </div>
        </>
    )
}

