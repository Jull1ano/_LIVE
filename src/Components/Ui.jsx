import { FebItem } from "../Articles/a-feb"
import { SmaItem } from "../Articles/a-sma"
import { LionItem } from "../Articles/a-lion"
import { RafItem } from "../Articles/a-raf"
import { VdsItem } from "../Articles/a-vds"
import { RegItem } from "../Articles/a-reg"


export function Ui() {
    return (
        <>
            <section className="sui">
                <h1>UI <span className="uispanb">/</span> UX Design</h1>
                <h2>Examples of Complex UI / UX Projects Built on a Strong and Tested Design System Foundation</h2>
                <ul className="grid">
                    <li className="item"><FebItem/></li>
                    <li className="item"><SmaItem/></li>
                    <li className="item"><LionItem/></li>
                    <li className="item"><RafItem/></li>
                    <li className="item"><VdsItem/></li>
                    <li className="item"><RegItem/></li>
                </ul>
            </section>
        </>
    )
}