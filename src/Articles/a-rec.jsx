import { Link } from "react-router-dom";
import threc from '/th/rec.jpg'

export function RecItem() {

    return (
        <>
            <Link className="fl" to="/Rec">
                <picture>
                    <img src={threc} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Product Page for Data Platform</div>
                <section class="infojos">
                    <div class="info">SaaS Product Page Design</div>
                    <Link className="ba" to="/Rec">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Rec() {
    return (
        <>
           

<div class="item2-gap">

    <div class="item2">
        <h1>Product Page for Data Platform</h1>
        <h2>SaaS Product Page Design</h2>
        <div class="ziar">
            <p><span class="tit">Problem Statement</span>Organizations face increasing threats from ransomware and cyberattacks, requiring robust and reliable data recovery solutions that can reduce risks and accelerate recovery, yet many lack a comprehensive, easy-to-use platform that ensures data security and quick restoration.</p>
            <div class="maxc">
                <p><span class="tit">Solution</span></p>
                <div class="lineb"></div>
                <ul>
                    <li>Develop a Dedicated Product Page for the Data Platform: Introduce the platform's extensive capabilities in handling data security challenges.</li>
                    <li>Feature Ransomware Recovery: Highlight the ability to protect data against ransomware, focusing on secure backup and secure recovery.</li>
                    <li>Emphasize Comprehensive Data Security: Outline features like multi-layered trusted immutability and total control over data recovery to instill confidence.</li>
                    
                    <li>Guidance on Recovery from Attacks: Provide actionable insights on how to recover from cyberattacks effectively using the platform.</li>
                    <li>Showcase a Unified Solution: Present the Data Platform as a single solution to overcome any cyberthreat, enhancing its appeal as an all-encompassing tool.</li>
                </ul>
            </div>
            <p><span class="tit">Result</span>The product page for Online Data Platform successfully informs and attracts organizations looking for effective solutions to protect against and recover from cyber threats. By clearly presenting the platform’s comprehensive security features and simple, automated recovery processes, the page drives adoption and increases user confidence. Organizations benefit from reduced downtime and enhanced data resilience.</p>
            
        </div>
        <picture>
            <img src="/rec.jpg" alt="" loading="lazy" width="1117"/>
        </picture>
    </div>

</div>
        </>
    )
}

