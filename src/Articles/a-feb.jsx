import { Link } from "react-router-dom";
import thfeb from '/th/feb.jpg'

export function FebItem() {

    return (
        <>
            <Link className="fl" to="/Feb">
                <picture>
                    <img src={thfeb} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">V12 Product Launch Event</div>
                <section class="infojos">
                    <div class="info">SaaS Product Page Design - Marketing</div>
                    <Link className="ba" to="/Feb">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Feb() {
    return (
        <>
            <h1>V12 Product Launch Event</h1>
            <h2>SaaS Product Design</h2>

            <div class="ziar">
                <p><span class="tit">Problem Statement</span>Enterprises are often unaware of the latest advancements in data protection, which can leave them vulnerable to data breaches and system failures. They need up-to-date information on how to enhance their data resilience and secure their critical business functions effectively.
                </p>
                <div class="maxc">
                    <p><span class="tit">Solution</span>
                    </p>
                    <ul>
                        <li>Host the V12 Launch Event: Organize an event to introduce the latest in data protection trends and technologies, including the new product offerings for 2023.</li>
                        <li>Showcase New Products: Present the new lineup, including backup solutions for Salesforce, the Data Platform, Data Recovery, and Data Security.</li>
                        <li>Promote Early Registration: Offer special early rate registration to encourage immediate engagement and commitment.</li>
                        <li>Highlight Industry Trends: Discuss the key data protection trends for 2023, giving attendees a strategic view of the landscape.</li>
                    </ul>
                </div>
                <div class="maxc">
                    <p><span class="tit">Result</span>The V12 Launch Event becomes a pivotal platform for educating enterprises about the latest data protection strategies and solutions, resulting in increased early registrations and product adoption. By informing them about the importance of modern, reliable data protection, the company establish itself as a trusted partner in enterprise data security. This event not only strengthens the market position but also ensures enterprises are better equipped to protect their data and maintain business continuity.
                    </p>
                </div>
            </div>
            <picture>              
                <img src="/feb.jpg" alt="" width="1117"/>
            </picture>
        </>
    )
}

