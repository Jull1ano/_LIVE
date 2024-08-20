import { Link } from "react-router-dom";
import threg from '/th/reg2.jpg'

export function RegItem() {

    return (
        <>
            <Link className="fl" to="/Reg">
                <picture>
                    <img src={threg} alt="" />
                </picture>
            </Link>
            <section className="padext">
                <div class="ths">UX Register Flow</div>
                <section class="infojos">
                    <div class="info">Mobile Design of User Flow for Sign-Up Pages, UX Research and User Journey.</div>
                    <Link className="ba" to="/Reg">
                        <span>View More</span><i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </section>
            </section>
        </>
    )
}

export function Reg() {
    return (
        <>
            <div class="item2-gap">

                <div class="item2">
                    <h1>Register - User Flow</h1>
                    <h2>Sign-Up Flow for Mobile</h2>

                    <div class="ziar">
                        <p><span class="tit">Problem Statement</span>The current user data collection method is unfriendly and may reduce registrations. Issues include lack of assistance (e.g., suggestions, pre-filled info), obtaining marketing consent, handling incorrect data (email, password, phone number, CNP), navigating back, cancelling registration, re-engaging abandoned users, verifying identity, and managing deposit and payment failures.
                        </p>
                        <div class="maxc">
                            <p><span class="tit">Solution</span>
                            </p>
                            <ul>
                                <li>Redesign user data collection forms to be more user-friendly and supportive</li>
                                <li>Implement in-line suggestions and pre-filled fields to guide users. Provide contextual help and error messages to clarify issues and solutions. Offer clear options for users to navigate back or cancel.</li>
                                <li>Streamline navigation and provide straightforward options for cancellation</li>
                                <li>Create a clear process for verifying identity and handling incorrect data</li>
                                <li>To ensure robust handling of payment processing issues, implement systems for detecting and notifying users of errors, offer multiple secure payment options, and provide dedicated support channels. </li>

                            </ul>
                        </div>
                        <div class="maxc">
                            <p><span class="tit">Result</span>
                            </p>
                            <ul>
                                <li>Organized Registration Process: The registration is broken into distinct, relevant steps, beginning with email, password, and phone number input.</li>
                                <li>Consent and Navigation: Users provide marketing consent and proceed using the “Accept All and Continue” button, simplifying the process.</li>
                                <li>Phone Number Validation: Users validate their phone number via SMS, with live chat support available for troubleshooting errors.</li>
                                <li>Personal Information Collection: Users complete their profile with additional personal details and are then prompted to make their first deposit.</li>
                            </ul>
                        </div>
                    </div>


                    <picture>
                        <img src="/register.jpg" alt="" loading="lazy" width="1117" />
                    </picture>

                </div>

            </div>
        </>
    )
}

