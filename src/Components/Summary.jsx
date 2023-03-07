import { Rectangle } from "./Rectangle"

export function Summary(){
    return(
        <section>
            <h2>Summary</h2>

            <Rectangle type={"Reaction"} number={"80"}/>
            <Rectangle type={"Memory"} number={"92"}/>
            <Rectangle type={"Verbal"} number={"61"}/>
            <Rectangle type={"Visual"} number={"73"}/>
        </section>
    )
}