import React from 'react';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { PuItem } from '../Articles/b-pu';
import { Link } from 'react-router-dom';

export function Mo() {
    return (
        <>
            <section className="smo">
                <h1>Motion Graphics</h1>
                <h2>Motion Graphics and Vector Design created in Illustrator and After Effects and exported as Lottie
                    (Ready for app development - iPhone and Android)</h2>
                <ul className="grid">
                    <li className="item">                       
                        <DotLottiePlayer
                            src="https://lottie.host/d5fcd64f-835e-4749-a42c-9c948e6a25bf/0TgiFrnqih.json" background="transparent" speed="1"
                            autoplay
                            loop
                        >
                            {/* <Controls /> */}
                        </DotLottiePlayer>
                        <section className="padext">
                            <section class="infojos">
                                <div class="ths center">Special Exchange</div>
                            </section>
                        </section>
                    </li>
                    <li className="item">
                        <DotLottiePlayer
                            src="https://lottie.host/d2f5f82e-15ce-4b6a-99e3-90ac33c323f4/vbVCxkQZe2.json" background="transparent" speed="1"
                            autoplay
                            loop
                        >
                            {/* <Controls /> */}
                        </DotLottiePlayer>
                        <section className="padext">
                            <section class="infojos">
                                <div class="ths center">Stay Informed</div>
                            </section>
                        </section>
                    </li>
                    <li className="item">
                        <DotLottiePlayer
                            src="https://lottie.host/cef208f8-0c19-436d-b12f-144da2dfdcd1/EyeaRrvLb2.json" background="transparent" speed="1"
                            autoplay
                            loop
                        >
                            {/* <Controls /> */}
                        </DotLottiePlayer>
                        <section className="padext">
                            <section class="infojos">
                                <div class="ths center">New Home</div>
                            </section>
                        </section>
                    </li>
                    <li className="item">
                        <DotLottiePlayer
                            src="https://lottie.host/8ac5c88d-1c75-4a8c-9ecc-890232a843d6/ewaaZ6UKWN.json" background="transparent" speed="1"
                            autoplay
                            loop
                        >
                            {/* <Controls /> */}
                        </DotLottiePlayer>
                        <section className="padext">
                            <section class="infojos">
                                <div class="ths center">Identity Scan</div>
                            </section>
                        </section>
                    </li> <li className="item">
                        <DotLottiePlayer
                            src="https://lottie.host/faeef0b5-1871-4414-b8e3-ee64a72fd29d/wufRyvNW6G.json" background="transparent" speed="1"
                            autoplay
                            loop
                        >
                            {/* <Controls /> */}
                        </DotLottiePlayer>
                        <section className="padext">
                            <section class="infojos">
                                <div class="ths center">Online Investment</div>
                            </section>
                        </section>
                    </li> <li className="item">
                        <DotLottiePlayer
                            src="https://lottie.host/1caca2ec-e95b-40ca-8d63-688af24a8a7d/bF8qbznm7G.json" background="transparent" speed="1"
                            autoplay
                            loop
                        >
                            {/* <Controls /> */}
                        </DotLottiePlayer>
                        <section className="padext">
                            <section class="infojos">
                                <div class="ths center">Login Details</div>
                            </section>
                        </section>
                    </li>
                </ul>
            </section>
        </>
    )
}