import { Link } from "react-router-dom";
import thsin from '/th/vbsf.jpg'

export function SinItem() {

    return (
        <>
            <Link className="fl" to="/Sin">
                <picture>
                    <img src={thsin} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Integrated Approach for Backup</div>
                <section class="infojos">
                    <div class="info">SaaS Product Platform Design</div>
                    <Link className="ba" to="/Sin">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Sin() {
    return (
        <>
            

<div class="item2-gap">

    <div class="item2">
        <h1>Integrated Approach for Backup</h1>
        <h2>SaaS Product Platform Design</h2>
       

        <div class="ziar">
            <p><span class="tit">Problem Statement</span>
                Businesses navigating the transition to hybrid cloud environments face challenges related to data security, cost, complexity, and vendor lock-in, hindering their ability to effectively manage backup, replication, and recovery.
            </p>
            <div class="maxc">
                <p><span class="tit">Solution</span>
                    Develop a landing page that addresses these challenges by highlighting our comprehensive solutions for backup, replication, and recovery. The page will emphasize our ability to provide bulletproof ransomware protection, facilitate the transition to hybrid clouds, reduce costs and complexity, and avoid vendor lock-in.
                </p>
            </div>
            <div class="maxc">
                <p><span class="tit">Result</span>
                    The landing page effectively communicates the benefits of our data management solutions, leading to increased confidence among businesses about transitioning to hybrid cloud environments. This results in higher adoption rates of our services, reduced operational challenges for clients, and enhanced data security and management efficiency.
                </p>
            </div>
        </div>


        <picture>
            <img src="/slf.jpg" alt=""  width="1117"/>
        </picture>
    </div>

    <div class="item2">
        <h2>SaaS Product Page</h2>
        <picture>
            <img src="/vebr.jpg" alt=""  width="1117"/>
        </picture>
    </div>

</div>
        </>
    )
}

