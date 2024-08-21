import { Link } from "react-router-dom";
import thliv from '/th/cdm.jpg'

export function LivItem() {

    return (
        <>
            <Link className="fl" to="/Liv">
                <picture>
                    <img src={thliv} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Live Data Conference</div>
                <section class="infojos">
                    <div class="info">Mini Website for SaaS Conference</div>
                    <Link className="ba" to="/Liv">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Liv() {
    return (
        <>


            <div class="item2-gap">

                <div class="item2">
                    <h1>Live Data Conference</h1>
                    <h2>Mini Website for SaaS Conference</h2>

                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>Potential conference attendees often struggle to access centralized, comprehensive information about events, hindering their ability to plan participation effectively and engage with content and community.</p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span> </p>
                            <ul>
                                <li>Develop a mini-website dedicated to the conference to serve as a central repository for all relevant information.</li>
                                <li>Include key details such as schedules, speaker bios, session descriptions, and registration information.</li>
                                <li>Enhance the event's visibility through the site.</li>
                                <li>Optimize the site for search engine discovery to target individuals searching for cloud data management resources.</li>
                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>The landing page effectively communicates the versatility and value of our data protection solutions, attracting small businesses looking for reliable and budget-friendly options. This leads to increased adoption of our products, ensuring that small businesses can secure their diverse data environments without complexity or high costs.</p>
                        </div>
                    </div>

                    <picture>
                        <img src="/cdc02.jpg" alt="" loading="lazy" width="1117" />
                    </picture>
                </div>

            </div>
        </>
    )
}

