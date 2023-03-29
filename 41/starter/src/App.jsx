import { useState, useEffect } from "react"
import Clicker from "./Clicker.jsx"

export default function App({clickersCount})
{

    const [clicker, setClicker] = useState(true)
    const [totalClicks, setTotalClicks] = useState(0)

    const toggleClicker = () => {
        setClicker(!clicker)
    }

    const increment = () => {
        setTotalClicks(totalClicks +1)
    }

    return <>
        <div>Total clicks: {totalClicks}</div>
        
        <button onClick={toggleClicker}>{clicker ? 'hide ':'show '}clicker</button>
        {/*clicker ? <Clicker/> : null*/}

        {clicker && <>
            { [...Array(clickersCount)].map((value,index) =>
                <Clicker
                    key={index}
                    increment={ increment }
                    keyName={ `count${index}` }
                />
            ) }
        </>}
    </>
}