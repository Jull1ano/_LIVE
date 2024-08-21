import { Link } from "react-router-dom";
import thtech from '/th/ts2024.jpg'

export function TechItem() {

    return (
        <>
            <Link className="fl" to="/Tech">
                <picture>
                    <img src={thtech} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">Tech Summit 2024 - Key Visual</div>
                <section class="infojos">
                    <div class="info">Landing Page, Newsletter, Social Media Banners, Design System, 3D Booth Design</div>
                    <Link className="ba" to="/Tech">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Tech() {
    return (
        <>
            <div className="container clamp">
                <div class="item2-gap">
                    <div class="item2">
                        <h1>Tech Summit 2024 - Key Visual</h1>
                        <h2>Landing Page - Desktop</h2>
                        <div class="ziar">
                            <p><span class="tit">Problem Statement</span>The ManufactureTech Summit needed to expand its reach and streamline participant engagement in a competitive digital landscape, where potential attendees struggled with accessing key event information and a cumbersome registration process.</p>
                            <div class="maxc">
                                <p><span class="tit">Solution</span>Designed a user-friendly landing page that acts as the event’s digital hub, featuring:</p>
                                <div class="lineb"></div>
                                <ul>
                                    <li>Centralized Event Information: Easy access to schedules, speakers, and workshops.</li>
                                    <li>Simplified Registration Process: Integrated, straightforward sign-up form placed at the end of the presentation.</li>
                                    <li>Engagement Tools: Interactive elements like video teasers and real-time updates.</li>
                                    <li>Marketing Enhancements: SEO-optimized content and social media sharing options.</li>
                                </ul>
                            </div>
                            <div class="maxc">
                                <p><span class="tit">Impact/Result</span></p>
                                <ul>
                                    <li>Increased Registrations: 40% rise in early sign-ups due to an enhanced registration process.</li>
                                    <li>Higher Engagement: Significant upticks in page views and time spent on the page.</li>
                                    <li>Global Reach: 30% increase in international visitors, expanding the event’s global presence.</li>
                                    <li>Stakeholder Satisfaction: Positive feedback on the landing page’s quality and comprehensiveness.</li>
                                </ul>
                            </div>
                        </div>
                        <picture>
                            <img src="/tech.jpg" alt="" />
                        </picture>
                    </div>
                    <div class="item2">
                        <h2>Landing Page - Mobile</h2>
                        <div class="ziar para">
                            <p><span class="tit">A mobile-friendly experience</span>A significant number of users access content primarily through smartphones, making mobile optimization essential for reaching a wider audience. A mobile-friendly page enhances the user experience with improved display, and easier navigation on smaller screens, which is key to keeping visitors engaged and reducing bounce rates.
                            </p>
                        </div>
                        <picture>
                            <img src="/tech-mob.jpg" alt="" loading="lazy" width="375" />
                        </picture>
                    </div>
                    <div class="item2">
                        <h2>Newsletter</h2>
                        <div class="ziar para">
                            <p><span class="tit">Ongoing engagement with attendees</span>It serves as a regular communication channel to update subscribers on summit developments, share industry insights, and build anticipation leading up to the event. This helps in keeping the audience informed and connected, enhancing the overall experience and participation in the summit.</p>
                        </div>
                        <picture>
                            <img src="/tech-news.jpg" alt="" loading="lazy" width="600" />
                        </picture>
                    </div>
                    <div class="item2">
                        <h2>Design System Components</h2>
                        <div class="ziar">
                            <p><span class="tit">Consistency of Brand Elements</span>A combination of strong shapes made from the letters 'tech' and a negative space letter 'e', representing the underlying electronic assistance and AI-powered manufacturing and technology. The consistent application of these elements across all platforms (digital, print, merchandise) will create a recognizable and cohesive brand experience. It will provide visual cues that connect back to the ManufactureTech Summit's mission to showcase and advance the heavy manufacturing technology sector.</p>
                            <p><span class="tit">Key Visual Elements</span>A palette of industrial grays and blues for reliability and innovation, with a touch of vibrant green to highlight the tech aspect. Typography choices ensure that the brand remains accessible and practical, reflecting the industry's focus on functionality and efficiency.</p>
                        </div>
                        <picture>
                            <img src="/t-comp.jpg" alt="" loading="lazy" width="600" />
                        </picture>
                    </div>
                    <div class="item2">
                        <h2>Banners - Digital Marketing</h2>
                        <div class="ziar">
                            <p><span class="tit">Conveying key information</span>Banners are an excellent medium for conveying key information succinctly. They can highlight essential details such as the event date, location, key speakers, and themes.</p>
                            <p><span class="tit">Main tools in marketing campaigns</span>Banners are crucial tools in marketing campaigns. They can be used across various platforms – including social media, websites, and physical locations – to promote the summit and attract attendees. Eye-catching banner designs can generate interest and excitement. </p>
                        </div>
                        <div class="mb">
                            <img src="/t-1600x800-SM.jpg" alt="" loading="lazy" width="1600" />
                            <img src="/t-970x250.jpg" alt="" loading="lazy" width="970" />
                            <img src="/t-300x250.jpg" alt="" loading="lazy" width="300" />
                            <img src="/t-468x60.jpg" alt="" loading="lazy" width="468" />
                            <img src="/t-728x90.jpg" alt="" loading="lazy" width="728" />
                            <img src="/t-600x250.jpg" alt="" loading="lazy" width="600" />
                            <img src="/t-250x250.jpg" alt="" loading="lazy" width="250" />
                            <img src="/t-300x600.jpg" alt="" loading="lazy" width="300" />
                            <img src="/t-160x600.jpg" alt="" loading="lazy" width="160" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div class="item2-gap">
                    <div class="item2">
                        <h1>3D Booth Design</h1>
                        <h2>3D Renderings created in Blender 3D CG technology. <br />
                            (Modelling, Texturing, Shading and Lighting)</h2>
                        <div class="ziar">
                            <p><span class="tit">The Booth Renderings were created, modeled, textured and lighted by myself using Blender 3D and Octane Renderer.</span>A booth at the "ManufactureTech Summit 2024" provides a valuable opportunity for direct engagement and networking. </p>
                            <p><span class="tit"> Hands-on experience for attendees</span>It allows companies to showcase their products, services, and innovations in manufacturing technology, creating a hands-on experience for attendees. This direct interaction fosters business relationships, generates leads, and enhances brand visibility, making it a key component for participants looking to make a significant impact at the summit.</p>
                        </div>
                        <div class="mb">
                            <img src="/3d/te-01.jpg" alt="" />
                            <img src="/3d/te-03.jpg" alt="" />
                            <img src="/3d/te-05.jpg" alt="" />
                            <img src="/3d/te-04.jpg" alt="" />
                            <img src="/3d/te-06.jpg" alt="" />
                            <img src="/3d/te-07.jpg" alt="" />
                            <img src="/3d/te-08.jpg" alt="" loading="lazy" width="800" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

