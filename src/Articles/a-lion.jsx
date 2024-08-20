import { Link } from "react-router-dom";
import thlion from '/th/lion.jpg'

export function LionItem() {

    return (
        <>
            <Link className="fl" to="/Lion">
                <picture>
                    <img src={thlion} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Key Visual and Casino LP design</div>
                <section class="infojos">
                    <div class="info">Created a Desktop and Mobile Landing Page for the Casino Founding Members Campaign.</div>
                    <Link className="ba" to="/Lion">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Lion() {
    return (
        <>
            <div className="item2-gap">
                <div className="item2">
                    <h1>Key Visual and Casino LP design</h1>
                    <h2>Landing Page - Desktop</h2>
                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>Potential new users of Royal Casino find it challenging to understand the unique benefits and process of becoming a Founding Member. The communication is cluttered and lacks clarity, making it difficult for users to quickly grasp the value proposition and steps involved.</p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>Simplify and streamline the messaging on the Royal Casino's registration page by breaking down the process into clear, concise steps with visual aids:</p>
                            <div class="lineb"></div>
                            <ul>
                                <li>Simplify the text by breaking it into short, clear, and actionable steps. This will make it easier for users to follow and understand the registration process and the associated benefits.</li>
                                <li>Use headings, subheadings, bullet points, and icons to create a clear visual hierarchy. This will help users quickly scan the content and find the information they need.</li>
                                <li>Include visuals such as icons or infographics to illustrate each step of the process and the key benefits. This will make the content more engaging and easier to understand.</li>
                                <li>Make the CTAs stand out with contrasting colors and compelling text. Ensure that the primary CTA ("Register Now") is prominent and easy to locate.</li>
                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Impact/Result</span></p>
                            <ul>
                                <li>Users can easily understand the steps and benefits of becoming a Founding Member.</li>
                                <li>Clearer messaging and streamlined process lead to more users signing up for the Founding Member program.</li>
                                <li>A more engaging registration experience through the use of visuals and clear CTAs.</li>
                                <li>Highlighting the unique benefits and rewards fosters a sense of exclusivity and partnership, increasing user loyalty.</li>
                            </ul>
                        </div>
                    </div>
                    <picture>
                        <img src="/lion-desk.jpg" alt="" loading="lazy" />
                    </picture>
                </div>
                
                <div className="item2">
                    <h2>Landing Page - Mobile</h2>
                    <div class="ziar para">
                        <p><span class="tit">A mobile-friendly experience</span>Creating a mobile mockup ensures that the registration process and user experience are optimized for mobile users, who constitute a significant portion of the audience. It ensures consistency, accessibility, and usability across all devices, leading to higher engagement and conversion rates.
                        </p>
                    </div>
                    <picture>
                        <img src="/lion-mob.jpg" alt="" loading="lazy" width="375" />
                    </picture>
                </div>
            </div>

        </>
    )
}

