

import { Cards } from "./style"

export function Card(props){
    return(
        <Cards>
            <h1>{props.question}</h1>
            <p>{props.response}</p>
        </Cards>
    )
}