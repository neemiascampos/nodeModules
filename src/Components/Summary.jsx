import { Retangle } from "./Rectangle"

export function Summary(){
    return(
        <section>
            <h2>Summary</h2>

            <Retangle type={"Reaction"} number={"80"}/>
            <Retangle type={"Memory"} number={"92"}/>
            <Retangle type={"Verbal"} number={"61"}/>
            <Retangle type={"Visual"} number={"73"}/>
        </section>
    )
}