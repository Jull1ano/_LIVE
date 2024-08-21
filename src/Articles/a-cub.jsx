import { Link } from "react-router-dom";
import thcub from '/th/cub.jpg'

export function CubItem() {

    return (
        <>
            <Link className="fl" to="/Cub">
                <picture>
                    <img src={thcub} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Data Management Solution</div>
                <section class="infojos">
                    <div class="info">SaaS Product Page Design, Platform</div>
                    <Link className="ba" to="/Cub">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Cub() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>Data Management Solution</h1>
                    <h2>SaaS Product Page Design</h2>


                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>Businesses seeking to enhance their data backup and replication capabilities need reliable solutions that not only secure data but also boost sales and revenue.</p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>Develop a SaaS Product page for our backup and replication company's ProPartner program, which explains how our services can help businesses accelerate their operations, increase sales, and earn more.</p>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>The landing page successfully attracts businesses by clearly showcasing the benefits of our ProPartner program, resulting in increased sign-ups and enhanced partner engagement, driving both higher sales and revenues for participants.</p>
                        </div>
                    </div>


                    <picture>
                        <img src="/acc.jpg" alt="" loading="lazy" width="1117" />
                    </picture>
                </div>


            </div>
        </>
    )
}

