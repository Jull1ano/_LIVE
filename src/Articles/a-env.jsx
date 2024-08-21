import { Link } from "react-router-dom";
import thenv from '/th/vgs.jpg'

export function EnvItem() {

    return (
        <>
            <Link className="fl" to="/Env">
                <picture>
                    <img src={thenv} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Expertise in the Public Sector</div>
                <section class="infojos">
                    <div class="info">SaaS Product Page Design, Design System</div>
                    <Link className="ba" to="/Env">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Env() {
    return (
        <>
            

            <div class="item2-gap">

                <div class="item2">
                    <h1>Expertise in the Public Sector</h1>
                    <h2>SaaS Product Page Design</h2>

                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>
                            Organizations, particularly in the federal sector, face challenges in ensuring robust data protection across diverse environments (cloud, virtual, and physical), which complicates safeguarding mission-critical applications and workloads.
                        </p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>
                            </p>
                            <ul>
                                <li>Develop a mini-site dedicated to showcasing solutions tailored for federal use cases in mission-assured data protection.</li>
                                <li>Provide detailed information on the site about how to protect, manage, and safeguard data and applications, regardless of their location.</li>
                                <li>Emphasize modern data protection strategies on the company’s mini-site.</li>
                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>
                                The mini-site effectively communicates the versatility and reliability of our data protection solutions, increasing confidence among federal agencies and organizations in managing their security needs. This leads to better-informed decisions about data protection strategies, enhanced compliance with federal standards, and stronger safeguarding of critical data and applications.
                            </p>
                        </div>
                    </div>


                    <picture>
                        <img src="/produ2.jpg" alt="" width="1117" />
                    </picture>
                </div>

            </div>
        </>
    )
}

