
import "./index.css"
import { useId, useRef, useState } from "react"

const PanelBox = ({ config }) => {

    const inputBright = useId();
    const inputAudios = useId();
    const switchValue = useId();
    const brightValue = useRef(null);
    const audiosValue = useRef(null);

    // eslint-disable-next-line no-unused-vars
    const [bright, setBright] = useState(100);
    // eslint-disable-next-line no-unused-vars
    const [audios, setAudios] = useState(100);

    const rangeOnChange = (task) => {
        switch (task) {
            case "bright":
                document.documentElement.style.filter = `brightness(${brightValue.current.value / 100})`;
                break;
            case "audios":
                break;
            default:
                break;
        }
    }

    const [switches, setSwitches] = useState({
        switch1: true,
        switch2: false,
        switch3: false,
        switch4: false,
        switch5: false,
    });

    const switchOnClick = (item) => {
        switch (item) {
            case "switch-1":
                if (switches["switch3"]) {
                    setSwitches({ ...switches, switch3: false, switch1: true });
                } else {
                    setSwitches({ ...switches, switch3: false, switch1: !switches["switch1"] });
                }
                break;
            case "switch-2":
                setSwitches({ ...switches, switch2: !switches["switch2"] });
                break;
            case "switch-3":
                if (switches["switch3"]) {
                    setSwitches({ ...switches, switch3: false, switch1: false });
                } else {
                    setSwitches({ ...switches, switch3: true, switch1: false });
                }
                
                break;
            case "switch-4":
                config.onSwitch("batteryTheme", !switches["switch4"]);
                setSwitches({ ...switches, switch4: !switches["switch4"] });
                break;
            case "switch-5":
                config.onSwitch("darkTheme", !switches["switch5"]);
                setSwitches({ ...switches, switch5: !switches["switch5"] });
                break;
            case "switch-6":
                config.onSwitch("darkTheme", !switches["switch5"]);
                config.onSwitch("batteryTheme", !switches["switch4"]);
                setSwitches({ ...switches, switch4: !switches["switch4"], switch5: !switches["switch5"] });
                break;
            default:
                break;
        }
    } 

    return (
        <>
            <div id="windows11-panelbox" style={{ bottom: config.bottom }} tabIndex={0} onContextMenu={(event) => event.preventDefault()}>
                <div className="panelbox-content">
                    <div className="content-inner">
                        <div className="panelbox-switch">

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch1'] ? "item-check stateTure" :"item-check" } onClick={() => switchOnClick("switch-1")}>
                                    <i className="task-icon-wifi"></i>
                                </div>
                                <span className="item-name">无线网络</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch2'] ? "item-check stateTure" :"item-check" } onClick={() => switchOnClick("switch-2")}>
                                    <i className="task-icon-bluetooth"></i>
                                </div>
                                <span className="item-name">蓝牙开关</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch1'] === false ? switches['switch3'] ? "item-check stateTure" : "item-check" :"item-check" } onClick={() => switchOnClick("switch-3")}>
                                    <i className="task-icon-plane"></i>
                                </div>
                                <span className="item-name">飞行模式</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch4'] ? "item-check stateTure" :"item-check" } onClick={() => switchOnClick("switch-4")}>
                                    <i className="task-icon-battery"></i>
                                </div>
                                <span className="item-name">护眼模式</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch5'] ? "item-check stateTure" :"item-check" } onClick={() => switchOnClick("switch-5")}>
                                    <i className="task-icon-sun"></i>
                                </div>
                                <span className="item-name">黑暗模式</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch4'] ? switches['switch5'] ? "item-check stateTure" : "item-check" :"item-check" } onClick={() => switchOnClick("switch-6")}>
                                    <i className="task-icon-night"></i>
                                </div>
                                <span className="item-name">夜间模式</span>
                            </div>

                        </div>

                        <div className="panel-ranges">
                            <div className="input-box" id={inputBright}>
                                <div className="icon-box">
                                    <i className="task-icon-brightness"></i>
                                </div>
                                <input id={inputBright} aria-describedby={inputBright} ref={brightValue} onChange={() => rangeOnChange("bright")} min={10} max={100} defaultValue={bright} type="range" className="input range_brightness windows11-input"/>
                            </div>

                            <div className="input-box" id={inputAudios}>
                                <div className="icon-box">
                                    <i className="task-icon-audio3"></i>
                                </div>
                                <input id={inputAudios} aria-describedby={inputAudios} ref={audiosValue} min={10} max={100} defaultValue={audios} type="range" className="windows11-input input range_audio"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panelbox-footent">
                    <div className="footent-inner">
                        <div className="icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24"><path fill="#000000" d="M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h12Zm-.002 1.5H5a1.5 1.5 0 0 0-1.494 1.356L3.5 9v6a1.5 1.5 0 0 0 1.355 1.493L5 16.5h11.998a1.5 1.5 0 0 0 1.493-1.355l.007-.145V9a1.5 1.5 0 0 0-1.355-1.493l-.145-.007ZM6 9h10a1 1 0 0 1 .993.883L17 10v4a1 1 0 0 1-.883.993L16 15H6a1 1 0 0 1-.993-.883L5 14v-4a1 1 0 0 1 .883-.993L6 9h10H6Z"></path></svg>
                        </div>
                        <span className="footent-text">100%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanelBox