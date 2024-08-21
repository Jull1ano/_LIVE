import { Link } from "react-router-dom";
import thvmz from '/th/vmz.jpg'

export function VmzItem() {

    return (
        <>
            <Link className="fl" to="/Vmz">
                <picture>
                    <img src={thvmz} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Marketing Summit Award</div>
                <section class="infojos">
                    <div class="info">Mini Website for SaaS Summit</div>
                    <Link className="ba" to="/Vmz">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vmz() {
    return (
        <>
           

<div class="item2-gap">

    <div class="item2">
        <h1>Marketing Summit Award</h1>
        <h2>Mini Website for SaaS Summit</h2>      

        <div class="ziar">
            <p><span class="tit">Problem Statement</span>
                Organizations face challenges in effectively leveraging and publicizing their industry achievements, which can limit their potential to build brand credibility and trust within their market and among peers.
            </p>
            <div class="maxc">
                <p><span class="tit">Solution</span>
                  
                </p>
                <ul>
                    <li>Develop a mini-site dedicated to celebrating the company's victory at the EMEA Marketing Summit Award.</li>
                    <li>Use the site as a platform to showcase the company's superior marketing practices and achievements across Europe, the Middle East, and Africa.</li>
                    <li>Highlight the significance of the award in enhancing the company's industry standing and credibility.</li>
                </ul>

            </div>
            <div class="maxc">
                <p><span class="tit">Result</span>
                    The mini-site effectively publicizes the company’s award-winning performance, boosting its reputation and demonstrating its marketing prowess to clients, partners, and industry peers. This acknowledgment helps strengthen trust and confirms the company's capability and excellence, positioning it as a leader in the EMEA marketing community.
                </p>
            </div>
        </div>


        <picture>
            <img src="/vmz.jpg" alt="" loading="lazy" width="1117"/>
        </picture>
    </div>

</div>
        </>
    )
}

