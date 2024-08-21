import { Link } from "react-router-dom";
import thnet from '/th/wig.jpg'

export function NetItem() {

    return (
        <>
            <Link className="fl" to="/Net">
                <picture>
                    <img src={thnet} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Women in Tech</div>
                <section class="infojos">
                    <div class="info">Mini Website for Team Members, Desktop and Mobile</div>
                    <Link className="ba" to="/Net">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Net() {
    return (
        <>
            <div class="item2-gap">

                <div class="item2">
                    <h1>Women in Tech</h1>
                    <h2>Mini Website for Team Members</h2>


                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>
                            The tech industry often struggles with diversity, particularly in recruiting and retaining female talent, which can hinder innovation and cultural inclusivity within companies.
                        </p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>

                            </p>
                            <ul>
                                <li>Create a mini-website that showcases the company's commitment to a supportive environment for women.</li>
                                <li>Highlight the mission of women in the tech sector on the platform.</li>
                                <li>Align the content with diversity and inclusion goals.</li>
                                <li>Share knowledge and experiences to empower women.</li>
                                <li>Enhance the company's culture and image through featured content.</li>
                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>
                                The mini-website boosts recruitment and retention of diverse talent, particularly women, by visibly demonstrating the company's commitment to their growth and success. It fosters a more inclusive workplace culture, driving innovation and business success through a diversified and empowered workforce.
                            </p>
                        </div>
                    </div>


                    <picture>
                        <img src="/wigas.jpg" alt="" loading="lazy" width="1117" />
                    </picture>
                </div>

                <div class="item2">
                    <h2>Mobile Version</h2>
                    <picture>
                        <img src="/vgr.jpg" alt="" loading="lazy" width="360" />
                    </picture>
                </div>

            </div>
        </>
    )
}

