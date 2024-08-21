import { Link } from "react-router-dom";
import thadr from '/th/get.jpg'

export function AdrItem() {

    return (
        <>
            <Link className="fl" to="/Adr">
                <picture>
                    <img src={thadr} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">High Performance Standards</div>
                <section class="infojos">
                    <div class="info">Vantage Program Website</div>
                    <Link className="ba" to="/Adr">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Adr() {
    return (
        <>


            <div class="item2-gap">

                <div class="item2">
                    <h1>High Performance Standards</h1>
                    <h2>Vantage Program Website</h2>


                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>
                            Top salespeople in Australia and New Zealand often lack access to exclusive, high-adrenaline rewards that truly acknowledge their professional accomplishments and motivate continued excellence.
                        </p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>
                                Develop a mini-website for the "Vantage Program" to offer top salespeople a unique three-day adventure experience in Queenstown. The site will feature details on 4-star accommodations, activities like off-road biking, clay bird shooting, a helicopter tour over the Wanaka region, and exclusive dining experiences, enticing them to register their interest.
                            </p>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>
                                This mini-website serves as a powerful tool to attract top sales talent by showcasing an extraordinary reward program, increasing registration and participation. It not only boosts morale among sales professionals but also enhances the company's image as an employer that values and invests in its top performers.
                            </p>
                        </div>
                    </div>


                    <picture>
                        <img src="/lpanz.jpg" alt="" loading="lazy" width="1117" />
                    </picture>
                </div>

            </div>
        </>
    )
}

