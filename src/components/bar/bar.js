import { useEffect } from "react"
import "./bar.css"
export default function Bar({state,value}) {

    return(
            <div className="d-flex align-items-center">
                <div className={`${state} bar mr-2`}>
                    <div className={`${state}-fill h-100`}></div>
                </div>
                <p>{value}</p>
            </div>
    )

}
