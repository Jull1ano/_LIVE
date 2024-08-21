import { Link } from "react-router-dom";
import thcus from '/th/spk.jpg'

export function CusItem() {

    return (
        <>
            <Link className="fl" to="/Cus">
                <picture>
                    <img src={thcus} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Addressing Customer Needs</div>
                <section class="infojos">
                    <div class="info">Product Platform, Landing Page, Marketing</div>
                    <Link className="ba" to="/Cus">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Cus() {
    return (
        <>


            <div class="item2-gap">

                <div class="item2">
                    <h1>Addressing Customer Needs</h1>
                    <h2>Product Platform, Landing Page</h2>


                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>Resellers and distributors often struggle to effectively communicate the benefits of backup solutions in a way that resonates with the specific needs of their customers.</p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span></p>
                            <ul>
                                <li>Create a landing page titled "The Customer-Centric Guide to Selling Backup."</li>
                                <li>Provide resellers and distributors with targeted advice on addressing customer needs.</li>
                                <li>Highlight the benefits of backup solutions.</li>
                                <li>Offer tips for enhancing customer conversations.</li>
                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>The landing page empowers resellers and distributors with the necessary tools and knowledge to tailor their sales approach, leading to better customer understanding, increased sales effectiveness, and higher satisfaction rates among clients seeking backup solutions.</p>
                        </div>
                    </div>


                    <picture>
                        <img src="/cus.jpg" alt="" width="1117"/>
                    </picture>
                </div>

            </div>
        </>
    )
}

