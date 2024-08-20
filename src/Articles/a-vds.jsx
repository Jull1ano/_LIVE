import { Link } from "react-router-dom";
import thvds from '/th/vds.jpg'

export function VdsItem() {

    return (
        <>
            <Link className="fl" to="/Vds">
                <picture>
                    <img src={thvds} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">New Design System Released</div>
                <section class="infojos">
                    <div class="info">UI Kit and Visual Principles - Design System</div>
                    <Link className="ba" to="/Vds">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Vds() {
    return (
        <>

            <div class="item2-gap">

                <div class="item2">
                    <h1>New Design System Released</h1>
                    <h2>UI Kit and Visual Principles</h2>


                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>In 2018, our design process faced several challenges due to the absence of a unified design system. Different guidelines and versions were used for third-party agencies, leading to inconsistencies within platforms. Additionally, a significant workload imbalance existed, with 450 marketing specialists assigning over 4500 tasks to just 28 designers in 2019.</p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>To address these issues, we developed a new design system and implemented several key changes:</p>
                            <div class="lineb"></div>
                            <ul>
                                <li>We unified all the grids for the portals and sites, both for the design and developer's side, ensuring responsive layouts and consistency across platforms.</li>
                                <li>Added a clear library of color palettes, a font system, and curated spacing between elements to maintain visual harmony and distribution in layouts to enhance usability.</li>
                                <li>Adoption of an atoms and molecules design system for modular and scalable design components.</li>
                                <li>Introduction of a new icon system in both line and isometric styles for better coherence and enhanced visual expression.</li>

                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Impact/Result</span>The introduction of our new Design System resulted in significant enhancements across multiple metrics:</p>
                            <div class="lineb"></div>
                            <ul>
                                <li>Tasks were completed 1.5 times faster.</li>
                                <li>Improved consistency between platforms for a cohesive user experience.</li>
                                <li>Always-updated guides for third-party agencies, enhancing collaboration.</li>
                                <li>Transparency within teams reached 100%.</li>
                                <li>Achieved balance between design resources and workload, enhancing productivity.</li>
                            </ul>
                        </div>
                    </div>


                    <div class="vds">
                        <img src="/vds-01.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/vds-02.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/vds-03.jpg" alt="" loading="lazy" width="1117" />
                        <img src="/vds-04.jpg" alt="" loading="lazy" width="1117" />
                    </div>

                </div>

            </div>

        </>
    )
}

