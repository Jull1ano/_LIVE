import { Link } from "react-router-dom";
import theas from '/th/cov.jpg'

export function EasItem() {

    return (
        <>
            <Link className="fl" to="/Eas">
                <picture>
                    <img src={theas} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">We have you covered</div>
                <section class="infojos">
                    <div class="info">SaaS Product Page Design</div>
                    <Link className="ba" to="/Eas">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Eas() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>We Have You Covered</h1>
                    <h2>SaaS Product Page Design</h2>


                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>Small businesses often struggle to find data protection solutions that are comprehensive, especially when their data is stored across various environments such as virtual, physical, and cloud platforms.</p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>Create a landing page that emphasizes our all-encompassing data protection solutions, tailored specifically for small businesses. The page will highlight the ease of use and affordability of our products, catering to virtual, physical, and cloud-based data storage needs.</p>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>The landing page effectively communicates the versatility and value of our data protection solutions, attracting small businesses looking for reliable and budget-friendly options. This leads to increased adoption of our products, ensuring that small businesses can secure their diverse data environments without complexity or high costs.</p>
                        </div>
                    </div>


                    <picture>
                        <img src="/covered.png" alt="" loading="lazy" width="1117" />
                    </picture>
                </div>

            </div>
        </>
    )
}

