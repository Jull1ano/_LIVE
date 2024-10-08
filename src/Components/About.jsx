import { useEffect } from "react"

export function About() {
    
    useEffect(() => {
        // Set the id and className when the component mounts        
        document.body.className = 'aboutc';

        // Clean up when the component unmounts
        return () => {
            document.body.className = '';
        };
    }, []);


    return (
        <>
            <div className="item2-gap story">
                <div className="item2">
                    <h1>Designing with Purpose</h1>
                    <h2>Connecting Creativity and Technology</h2>

                    <div className="allst">

                        <div className="statement">
                            <div className="bigtitle">
                                Design as a <span>Human Connection</span>
                            </div>
                            <div className="paratext">
                                Design has always been my way of <span>connecting with people</span>. From the early days of my career, I understood that great design isn’t just about aesthetics—it’s about <span>empathy, problem-solving</span>, and creating experiences that make a real difference in people’s lives. This mindset has shaped every project I’ve led, from redesigning websites to crafting complex <span> design systems</span>.
                            </div>
                        </div>


                        <div className="statement">
                            <div className="bigtitle">
                                Merging Technology with <span>Human-Centered</span> Storytelling
                            </div>
                            <div className="paratext">
                                My Master's in <span>Multimedia and Audio-Visual Production</span> from the University of Bucharest wasn't just about technology; it was about <span>understanding people</span> and crafting narratives that resonate. This foundation sharpened my attention to detail and instilled a deep-seated empathy for <span>user needs</span> – skills that translate beautifully into user-centered design.
                            </div>
                        </div>

                        <div className="statement">
                            <div className="bigtitle">
                                Redesigning for Impact: Blending <span>Creativity</span> and Technical Precision
                            </div>
                            <div className="paratext">
                                My professional path took a defining turn at Tradeville. As a UI/UX Designer, I played a key role in redesigning their entire website. This wasn't just aesthetics; it was about crafting a <span>more intuitive and engaging experience</span>. I meticulously crafted high-fidelity designs, ensuring every element aligned with user expectations. Translating these designs into functional realities using <span>HTML/CSS</span> in ASP.NET showcased my technical skill and ability to bridge the gap between creativity and practicality.
                            </div>
                        </div>

                        <div className="statement">
                            <div className="bigtitle">
                                From Design to Development: Strengthening <span>User Experiences</span> Through Code
                            </div>
                            <div className="paratext">
                                In 2015, I broadened my perspective by transitioning to <span>Front-End Developer</span> at Starbyte. Here, I developed fully functional websites with a <span>mobile-first</span> approach. This experience drilled home the importance of clean, efficient code for a seamless user experience. My ability to translate designs from Photoshop to HTML/CSS while maintaining <span>UX/UI principles</span> became a crucial skill I carried forward.
                            </div>
                        </div>

                        <div className="statement">
                            <div className="bigtitle">
                                My most impactful chapter unfolded at Veeam Software, where I served as a <span>Senior Product Designer</span> for eight years.
                            </div>
                            <div className="paratext">
                                <span>Leading a team</span> of seven talented designers on landing page projects, my role was not just to design but to drive meaningful business results. One of my proudest achievements was crafting <span>over 100 landing pages annually</span> for marketing campaigns. These pages, coupled with newsletters and banners, generated <span>exceptional leads</span> across diverse channels. I designed <span>key visual</span> concepts for over ten corporate websites (VeeamON, Modern Data Protection) – each demanding a keen understanding of composition, imagery, color, and typography.
                            </div>
                        </div>

                        <div className="statement">
                            <div className="bigtitle">
                                One of my proudest accomplishments was building a <span>Scalable Design System</span> that increased production efficiency.
                            </div>
                            <div className="paratext">
                                At a pivotal moment in Veeam’s growth journey, I had the opportunity to play a key role in establishing an <span>Efficient Design System</span>. What began as an effort to streamline our design process quickly evolved into something far more impactful. By creating a system that ensured consistency and elevated brand awareness, our team was able to produce <span>higher-quality designs in record time.</span> Using Figma, I crafted both low and high-fidelity prototypes, responsive designs, and reusable components that bridged the gap between concept and execution. The result? Not only enhanced the speed and quality of production but also allowed Veeam to <span>expand its global presence</span> with confidence.
                            </div>
                        </div>

                        <div className="statement">
                            <div className="bigtitle">
                                Beyond the day-to-day,<br/>
                                I championed <span>collaboration</span>.
                            </div>
                            <div className="paratext">
                                In a fast-paced environment where collaboration was crucial, my ability to communicate effectively and adapt to cross-functional goals became essential in driving success. When it came time to integrate Figma into our workflow, <span>I worked closely with stakeholders</span> across the organization—management, marketing, and front-end development—to ensure that every voice was heard and every need was met. By keeping the lines of <span>communication open and transparent</span>, we were able to move fast from concept to final product, ensuring that the design, functionality, and business objectives were perfectly aligned.
                            </div>
                        </div>

                        <div className="statement">
                            <div className="bigtitle">
                                Crafting Impactful Designs That Drive <span>Business Success</span>
                            </div>
                            <div className="paratext">
                                What excites me most about the opportunity to work with you is the chance to bring the same <span>meaningful impact to your organization</span>. With a proven ability to build scalable design systems, I’m confident my passion for <span>user-centric design</span> and focus on aligning with <span>business goals</span> will exceed your expectations. I’m eager to join a forward-thinking company where design drives success. <span className="lastt">Together, we’ll create beautiful, functional products that deliver measurable results and elevate the business.</span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}