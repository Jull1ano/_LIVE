import { Link } from "react-router-dom";
import thent from '/th/ft.jpg'

export function EntItem() {

    return (
        <>
            <Link className="fl" to="/Ent">
                <picture>
                    <img src={thent} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Integrated Marketing Effort</div>
                <section class="infojos">
                    <div class="info">Landing Page for SaaS Cloud Summit</div>
                    <Link className="ba" to="/Ent">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Ent() {
    return (
        <>
           

<div class="item2-gap">               

    <div class="item2">
        <h1>Integrated Marketing Effort</h1>
        <h2>Landing Page for SaaS Cloud Summit</h2>      

        <div class="ziar">
            <p><span class="tit">Problem Statement</span>Attendees of the European Cloud Summit seek effective strategies for protecting, controlling, and managing cloud data and may require extra motivation to deeply engage with the event.</p>
            <div class="maxc">
                <p><span class="tit">Solution</span>Create a landing page that highlights the summit's themes and benefits, and features a free t-shirt offer to encourage early registration and participation. The page will detail the summit's keynotes, workshops, and networking opportunities, enhancing early attendee engagement.</p>                            
            </div>
            <div class="maxc">
                <p><span class="tit">Result</span>The landing page boosts pre-event engagement and registration by offering a free t-shirt, motivating attendees to register early and actively participate. This strategy cultivates a community eager to explore advancements in cloud data security and management.</p>                          
            </div>
        </div>


        <picture>
            <img src="/drag.jpg" alt="" loading="lazy" width="1117"/>
        </picture>
    </div>

    <div class="item2">
        <h2>Data Protection for your NetApp</h2>
        <picture>
            <img src="/enter.jpg" alt="" loading="lazy" width="1117"/>
        </picture>
    </div>

    <div class="item2">
        <h2>Landing Page for SaaS Platform</h2>                   
  

        <div class="ziar">
            <p><span class="tit">Problem Statement</span>Businesses need effective defenses against data breaches and losses, particularly as ransomware attacks increase. Secure, dependable backup and replication solutions are essential.</p>
            <div class="maxc">
                <p><span class="tit">Solution</span>Create a landing page that highlights our leadership in backup and replication, emphasizing our on-premises and cloud-based solutions with scalable, instant recovery options that avoid the need for ransom payments.</p>                            
            </div>
            <div class="maxc">
                <p><span class="tit">Result</span>The landing page effectively communicates the security and reliability of our solutions, increasing trust and adoption among businesses looking for robust data protection, thereby enhancing our market position and customer base.</p>                          
            </div>
        </div>


        <picture>
            <img src="/cor.jpg" alt="" loading="lazy" width="1117"/>
        </picture>
    </div>

</div>
        </>
    )
}

