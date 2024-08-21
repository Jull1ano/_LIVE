import { Link } from "react-router-dom";
import thvi from '/th/solid.jpg'

export function ViItem() {

    return (
        <>
            <Link className="fl" to="/Vi">
                <picture>
                    <img src={thvi} alt="" />
                </picture>
            </Link>
            <section className="padext">                
                <section class="infojos">
                <div class="ths">Data Foundations</div>
                    <Link className="ba" to="/Vi">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vi() {
    return (
        <>
         

<div class="item2-gap">


    <div class="item2">
        <h1>Data Foundations</h1>
        <h2>Poster design</h2>

        <div class="mb">
            <img src="/violet.jpg" alt="" loading="lazy" width="1117"/>                        
            
        </div>
    </div>

    <div class="item2 suta">
        <h2>Wide Banner Design</h2>

        <div class="mb">
            
        <img src="/violet-wide.jpg" alt="" loading="lazy" width="1117"/>
            
        </div>
    </div>

</div>
        </>
    )
}

