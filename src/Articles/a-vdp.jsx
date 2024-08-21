import { Link } from "react-router-dom";
import thvdp from '/th/vdp.jpg'

export function VdpItem() {

    return (
        <>
            <Link className="fl" to="/Vdp">
                <picture>
                    <img src={thvdp} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Product Data Platform</div>
                <section class="infojos">
                    <div class="info">Product Landing Page and UI/UX Design</div>
                    <Link className="ba" to="/Vdp">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vdp() {
    return (
        <>


            <div class="item2-gap">

                <div class="item2">
                    <h1>Product Data Platform</h1>
                    <h2>Product and UI/UX Design</h2>

                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>Businesses utilizing Microsoft Exchange need advanced backup and recovery solutions to manage and secure their data efficiently, including the ability to recover hard-deleted items and proactively detect threats, but often lack access to comprehensive tools that provide these capabilities.
                        </p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>
                            </p>
                            <ul>
                                <li>Launch the Product Data Platform Page: Create a dedicated product page for Data Platform with detailed information on its features.</li>
                                <li>Offer a Free 30-Day Premium Trial: Allow users to experience the full capabilities of the platform without initial investment, encouraging adoption.</li>
                                <li>Highlight Microsoft Exchange Features: Detail the specific benefits for Microsoft Exchange users, such as secure backup and recovery of exchange items and the ability to archive entire mailboxes.</li>
                                <li>Enhanced Security Features: Showcase features like early threat detection, proactive threat hunting, and mechanisms to avoid reinfection and automate clean recovery, highlighting the platform's security strengths.</li>
                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>The new product page effectively increases visibility and interest among potential clients, particularly those using Microsoft Exchange. The free trial and detailed explanations of the platform's capabilities lead to higher trial sign-ups and adoption rates. Enterprises benefit from enhanced data resilience and security, ensuring they are well-equipped to handle data challenges and threats, ultimately improving their overall data management and protection strategy.
                            </p>
                        </div>
                    </div>


                    <picture>
                        <img src="/vdp.jpg" alt="" width="1117"/>
                    </picture>
                </div>
            </div>
        </>
    )
}

