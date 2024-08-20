import { Link } from "react-router-dom";
import thsma from '/th/sma.jpg'

export function SmaItem() {

    return (
        <>
            <Link className="fl" to="/Sma">
                <picture>
                    <img src={thsma} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">UX User Flow - Gamification</div>
                <section class="infojos">
                    <div class="info">Mobile Design of User Flow for Smartico Integration, Widgets, Cards, Menus, Casino Offers & Bonuses etc</div>
                    <Link className="ba" to="/Sma">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Sma() {
    return (
        <>
            <h1>UX User Flow - Gamification</h1>
            <h2>Smartico Integration</h2>

            <div class="ziar">
                <p><span class="tit">Problem Statement</span>Online casinos often struggle to maintain player engagement and loyalty, leading to high player turnover and reduced lifetime value. Players may experience a lack of progression, personalization, and social interaction, which can diminish their overall enjoyment and commitment to the platform. Additionally, businesses face challenges in obtaining valuable data insights and gaining a competitive edge in a saturated market.
                </p>
                <div class="maxc">
                    <p><span class="tit">Solution</span>
                    </p>
                    <ul>
                        <li>Create a sense of progression and accomplishment for players, encouraging them to continue playing to unlock new achievements and reach higher levels.</li>
                        <li>Introduce daily, weekly, or special challenges and missions to keep gameplay dynamic and engaging, offering players new objectives and rewards.</li>
                        <li>Foster social interaction and competition by displaying leaderboards and player rankings, motivating players to improve their standing and engage with the community.</li>
                        <li>Offer various rewards such as points, badges, and bonuses to incentivize continued play and enhance player satisfaction.</li>
                        <li>Utilize the data generated from gamified interactions to gain valuable insights into player behavior, preferences, and trends, informing business strategies and marketing efforts.</li>
                    </ul>
                </div>
                <div class="maxc">
                    <p><span class="tit">Result</span>By leveraging gamification, online casinos can achieve significantly higher player engagement and retention rates. Players experience a more enjoyable and personalized gaming experience, which fosters a sense of loyalty and community. Businesses benefit from increased player activity and spending, along with insightful data that informs marketing and development strategies. Ultimately, gamification drives sustainable growth and a stronger market position for online casinos.
                    </p>
                </div>
            </div>

            <picture>
                <img src="/sma.jpg" alt="" loading="lazy" width="1117" />
            </picture>

        </>
    )
}

