
import "./index.css"
import { useState } from "react"
import callbackIcon from "../../../../image/icon/feedback.png"

const CallBackLayout = () => {
    const [screen, setScreen] = useState(true);
    setTimeout(() => setScreen(false),800);

    return (
        <>
            <div id="window-layout-callback-screen" style={{ opacity: screen ? 1 : 0, zIndex: screen ? 2 : -1 }}>
                <img className="application-icon" src={callbackIcon} alt="反馈社区"/>
            </div>
            <div id="window-layout-callback-screen" style={{ opacity: screen ? 0 : 1 }} onContextMenu={(event) => event.preventDefault()}>
                <div id="feedback"></div>
            </div>
        </>
    )
}

export default CallBackLayout