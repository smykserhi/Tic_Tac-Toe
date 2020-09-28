import React from "react"
import X from "../images/1.png"
import O from "../images/0.png"

const Players = (props)=>{
    return(
        <div className="players">
            <span><img className="icon" src={X} alt="X"/> player: {props.name_X}</span>
            <span><img className="icon" src={O} alt="X"/> player: {props.name_0}</span>
        </div>
    )
}
export default Players