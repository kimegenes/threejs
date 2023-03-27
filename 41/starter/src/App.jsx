import { useState, useEffect } from "react"
import Clicker from "./Clicker.jsx"

export default function App()
{

    const [clicker, setClicker] = useState(true)

    const toggleClicker = () => {
        setClicker(!clicker)
    }

    return <>
        <button onClick={toggleClicker}>{clicker ? 'hide ':'show '}clicker</button>
        {/*clicker ? <Clicker/> : null*/}

        {clicker && <>
            <Clicker keyName="countA"/>
            <Clicker keyName="countB"/>
            <Clicker keyName="countC"/>
        </>}
    </>
}