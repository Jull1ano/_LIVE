import { Link } from "react-router-dom";
import thpan from '/th/m36.jpg'

export function PanItem() {

    return (
        <>
            <Link className="fl" to="/Pan">
                <picture>
                    <img src={thpan} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Data Resiliency Pillars</div>
                <section class="infojos">
                    <div class="info">Product Landing Page - Marketing.</div>
                    <Link className="ba" to="/Pan">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Pan() {
    return (
        <>
           

            <div class="item2-gap">

                <div class="item2">
                    <h1>Data Resiliency Pillars</h1>
                    <h2>Product Page - Backup for Microsoft 365</h2>


                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>Consumers and professionals seeking expert insights in cloud data management often lack access to authoritative and trustworthy resources that highlight critical industry topics, such as comprehensive backup solutions.
                        </p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>
                            </p>
                            <ul>
                                <li>Create a dedicated landing page for a panel talk featuring industry experts.</li>
                                <li>Highlight our organization's thought leadership in cloud data management.</li>
                                <li>Engage visitors by offering valuable insights related to the topic.</li>
                                <li>Provide options for visitors to register for the panel talk to secure their spot and participate in the live discussion.</li>
                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>This landing page boosts the brand's authority and elevates its reputation by making expert knowledge accessible. It increases awareness of the importance of comprehensive backup solutions and drives registrations for the panel discussion, positioning our offerings as essential tools for effective risk management.
                            </p>
                        </div>
                    </div>


                    <picture>
                        <img src="/m36.jpg" alt="" loading="lazy" width="1117" />
                    </picture>
                </div>



            </div>
        </>
    )
}

