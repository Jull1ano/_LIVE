import { BoItem } from "../Articles/c-bo";
import { CoItem } from "../Articles/c-co";
import { DoItem } from "../Articles/c-do";
import { EnItem } from "../Articles/c-en";
import { GrItem } from "../Articles/c-gr";
import { InItem } from "../Articles/c-in";
import { KiItem } from "../Articles/c-ki";
import { MoItem } from "../Articles/c-mo";
import { ModItem } from "../Articles/c-mod";
import { OpItem } from "../Articles/c-op";
import { RoItem } from "../Articles/c-ro";
import { ScItem } from "../Articles/c-sc";
import { WiItem } from "../Articles/c-wi";


export function Re() {
    return (
        <>
            <section className="sre">
                <h1>3D Rendering</h1>
                <h2>Interior Design created in Blender 3D CG technology
                    (3D Modelling, Texturing, Shading and Lighting)</h2>
                <ul className="grid">
                    <li className="item"><OpItem /></li>
                    <li className="item"><MoItem /></li>
                    <li className="item"><GrItem /></li>
                    <li className="item"><ScItem /></li>
                    <li className="item"><RoItem /></li>
                    <li className="item"><KiItem /></li>
                    <li className="item"><InItem /></li>
                    <li className="item"><BoItem /></li>
                    <li className="item"><ModItem /></li>
                    <li className="item"><CoItem /></li>
                    <li className="item"><DoItem /></li>
                    <li className="item"><EnItem /></li>
                    <li className="item"><WiItem /></li>
                </ul>
            </section>
        </>
    )
}