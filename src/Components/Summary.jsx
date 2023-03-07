import { Rectangle } from "./Rectangle"

import iconReaction from '../assets/icon-Reaction.svg'
import iconMemory  from '../assets/icon-Memory.svg'
import iconVerbal  from '../assets/icon-Verbal.svg'
import iconVisual  from '../assets/icon-visual.svg'
export function Summary(){
    return(
        <section>
            <h2>Summary</h2>

            <Rectangle icon={iconReaction} type={"Reaction"} number={80} />
            <Rectangle icon={iconMemory} type={"Memory"} number={92} />
            <Rectangle icon={iconVerbal} type={"Verbal"} number={61} />
            <Rectangle icon={iconVisual} type={"Visual"} number={73} />
        
            <button>Continue</button>
        </section>
    )
}