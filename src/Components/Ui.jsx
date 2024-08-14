import { FebItem } from "../Articles/a-feb"
import { SmaItem } from "../Articles/a-sma"
import { LionItem } from "../Articles/a-lion"
import { RafItem } from "../Articles/a-raf"
import { VdsItem } from "../Articles/a-vds"
import { RegItem } from "../Articles/a-reg"
import { PanItem } from "../Articles/a-pan"
import { TechItem } from "../Articles/a-tech"
import { VdpItem } from "../Articles/a-vdp"
import { CusItem } from "../Articles/a-cus"
import { EnvItem } from "../Articles/a-env"
import { SinItem } from "../Articles/a-sin"
import { RecItem } from "../Articles/a-rec"
import { CubItem } from "../Articles/a-cub"
import { LivItem } from "../Articles/a-liv"
import { EntItem } from "../Articles/a-ent"
import { NetItem } from "../Articles/a-net"
import { AdrItem } from "../Articles/a-adr"
import { VmzItem } from "../Articles/a-vmz"
import { EasItem } from "../Articles/a-eas"


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
                    <li className="item"><PanItem/></li>
                    <li className="item"><TechItem/></li>
                    <li className="item"><VdpItem/></li>
                    <li className="item"><CusItem/></li>
                    <li className="item"><EnvItem/></li>
                    <li className="item"><SinItem/></li>
                    <li className="item"><RecItem/></li>
                    <li className="item"><CubItem/></li>
                    <li className="item"><LivItem/></li>
                    <li className="item"><EntItem/></li>
                    <li className="item"><NetItem/></li>
                    <li className="item"><AdrItem/></li>
                    <li className="item"><VmzItem/></li>
                    <li className="item"><EasItem/></li>
                </ul>
            </section>
        </>
    )
}