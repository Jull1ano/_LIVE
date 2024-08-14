import { AmItem } from "../Articles/b-am";
import { AvItem } from "../Articles/b-av";
import { GdItem } from "../Articles/b-gd";
import { MaItem } from "../Articles/b-ma";
import { MeItem } from "../Articles/b-me";
import { OwItem } from "../Articles/b-ow";
import { TeItem } from "../Articles/b-te";
import { VqItem } from "../Articles/b-vq";


export function Gr() {
    return (
        <>
            <section className="sgr">
                <h1>Graphic Design</h1>
                <h2>Examples of Graphic Design Projects Created for Comprehensive Digital Marketing Campaigns</h2>
                <ul className="grid">
                    <li className="item"><TeItem /></li>
                    <li className="item"><MaItem /></li>
                    <li className="item"><VqItem /></li>
                    <li className="item"><AmItem /></li>
                    <li className="item"><GdItem /></li>
                    <li className="item"><OwItem /></li>
                    <li className="item"><AvItem /></li>
                    <li className="item"><MeItem /></li>
                </ul>
            </section>
        </>
    )
}