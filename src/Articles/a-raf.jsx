import { Link } from "react-router-dom";
import thraf from '/th/raf.jpg'

export function RafItem() {

    return (
        <>
            <Link className="fl" to="/Raf">
                <picture>
                    <img src={thraf} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">RAF - User Flow</div>
                <section class="infojos">
                    <div class="info">Mobile Design of User Flow for Refer a Friend Campaign, UX Research and User Journey.</div>
                    <Link className="ba" to="/Raf">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Raf() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>RAF - User Flow</h1>
                    <h2>Refer a Friend Campaign</h2>

                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>A special opportunity to bring more valuable players to the platform is by creating a referral program aimed at the most active players. These players can invite their friends to the platform in exchange for rewards or bonuses, which is a cost-effective strategy compared to spending money on marketing. The goal is to encourage the best customers to invite their friends, who are likely to be as valuable as they are, thereby increasing brand awareness and engagement.
                        </p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>
                            </p>
                            <ul>
                                <li>Active players invite friends to join the platform. Both the referrer and the referred friend receive rewards upon successful referrals.</li>
                                <li>Apply design thinking by empathizing with the users, defining the referral process, ideating on the incentives, prototyping the referral flow, and testing it with a subset of users.</li>
                                <li>Creating an Optimal Referral Flow, identify key touchpoints where users are most engaged, simplify the invitation process to be seamless and user-friendly, use clear calls to action and provide instant feedback on the referral status.</li>
                                <li>Launching the Program and display the referral link in prominent locations: automatic journey, banner, and main menu entry; utilize multiple channels like emails, in-app notifications, and social media to promote the program.</li>
                                <li>Offering Rewards can be cash rewards for both parties, discounted products, premium features for a limited time and increased product usage limit.</li>
                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>
                            </p>
                            <ul>
                                <li>Increased User Acquisition: Leveraging satisfied users to invite friends, reducing marketing costs.</li>
                                <li>Enhanced Brand Awareness: Through shared referral links, the brand identity becomes more recognizable.</li>
                                <li>Accelerated Growth: Attractive bonuses for both referrers and referees lead to rapid user base expansion.</li>
                                <li>Cost-Effective Marketing: Users bring in new members, eliminating the need for expensive marketing campaigns.</li>
                            </ul>
                        </div>
                    </div>

                    <picture>
                        <img src="/referrer.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/referee.jpg" alt="" loading="lazy" width="1117" />
                    </picture>


                </div>

            </div>
        </>
    )
}

