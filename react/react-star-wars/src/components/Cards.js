import { useState } from 'react';

import ShipInfo from "./ShipInfo";

export default function StarshipCard({ StarShip }) {

    let [toggle, setToggle] = useState(false);

    return (
        <div className="cards">
            <article className="card">
                <div className="ship-name" onClick={() => setToggle(!toggle)}>
                  {starShip.name}
                </div>
                {toggle && <ShipInfo StarShip={StarShip}/>}
                
            </article>
        </div>
    )
}