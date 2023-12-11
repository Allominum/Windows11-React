/* eslint-disable react-hooks/exhaustive-deps */

import "./index.css"
import { Link } from 'react-router-dom'
import { Tooltip, Skeleton } from "antd"
import dateTool from "../../scripts/dates"
import { useState, useEffect, useMemo } from "react"

const SideBox = ({ config }) => {

    const messageList = [
        { id: 1, message: "null" },
        { id: 2, message: "null" },
        { id: 3, message: "null" },
        { id: 4, message: "null" },
        { id: 5, message: "null" },
        { id: 6, message: "null" },
        { id: 7, message: "null" },
        { id: 8, message: "null" },
        { id: 9, message: "null" },
        { id: 10, message: "null" },
    ]

    const [widths, setWidth] = useState(config.width);
    const [widthText, setWidthText] = useState("放大");

    const domtask = (task) => {
        switch (task) {
            case "red":
                setWidth(config.width);
                setWidthText("放大");
                break;
            case "amp":
                if (widths === config.width){
                    setWidthText("缩小");
                    setWidth("calc(100% - 20px)");
                } else 
                if (widths === "calc(100% - 20px)") {
                    setWidthText("放大");
                    setWidth(config.width);
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        setWidth(config.width);
    }, [config.lefts]);

    // eslint-disable-next-line no-unused-vars
    const [arrow, setArrow] = useState('Show');
    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
            return false;
        }

        if (arrow === 'Show') {
            return true;
        }
        return {
            pointAtCenter: true,
        };
    }, [arrow]);

    const [dateText, setDate] = useState("00:00 凌晨好");

    setInterval(() => {
        var date = new dateTool().Date();
        var hello = new dateTool().Hello();
        setDate(date.Hours + ":" + date.Min + " " + hello + "好");
    }, 1000);

    return (
        <>
            <div id="windows11-sidebox" style={{ left: config.lefts,width: widths }} tabIndex={0} onContextMenu={(event) => event.preventDefault()}>
                <div className="sidebox-content">
                    <div className="sidebox-head">
                        <span className="sidebox-time">{dateText}</span>
                        <div className="sidebox-container">
                            <Tooltip placement="bottom" title={'恢复'} arrow={mergedArrow}>
                                <div className="container-box sidebox-refresh-box" onClick={() => domtask("red")}>
                                    <i className="task-icon-refresh"></i>
                                </div>
                            </Tooltip>
                            
                            <Tooltip placement="bottom" title={widthText} arrow={mergedArrow}>
                                <div className="container-box sidebox-amplify-box" onClick={() => domtask("amp")}>
                                    <svg id="sidebox-window-task1" t="1688375489958" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15475" width="16" height="16"><path d="M896 426.666667V170.666667a42.666667 42.666667 0 0 0-42.666667-42.666667H597.333333v85.333333h213.333334v213.333334h85.333333z" fill="#2c2c2c" p-id="15476"></path><path d="M597.333333 486.997333L881.365333 202.986667l-60.352-60.352L537.002667 426.666667 597.333333 486.997333zM128 597.333333v256a42.666667 42.666667 0 0 0 42.666667 42.666667h256v-85.333333H213.333333V597.333333H128z" fill="#2c2c2c" p-id="15477"></path><path d="M426.666667 537.002667L142.634667 821.013333l60.352 60.352L486.997333 597.333333 426.666667 537.002667z" fill="#2c2c2c" p-id="15478"></path></svg>
                                </div>
                            </Tooltip>

                            <Tooltip placement="bottom" title={'头像'} arrow={mergedArrow}>
                                <div className="container-box sidebox-avatar-box">
                                    <div className="sidebox-avatar"></div>
                                </div>
                            </Tooltip>
                        </div>
                    </div>

                    <div id="sidebox-message-1" className="sidebox-message tips-normal">
                        <div className="message-container">
                            <div className="message-info">
                                <div className="icon-box">
                                    <i className="task-icon-google not-allowTheme"></i>
                                </div>

                                <p className="message-content not-allowTheme" style={{ whiteSpace: "nowarp" }}>涉及服务合同纠纷，郑爽被限制高消费，此前被强制执行约2.18亿元</p>
                            </div>

                            <div className="close-button" onClick={() => {
                                document.getElementById("sidebox-message-1").remove();
                            }}>
                                <i className="task-icon-close not-allowTheme"></i>
                            </div>
                        </div>
                    </div>

                    <div id="sidebox-message-2" className="sidebox-message tips-warnning">
                        <div className="message-container">
                            <div className="message-info">
                                <div className="icon-box" style={{ margin: "0 0.5rem" }}>
                                    <svg t="1688382143803" className="icon not-allowTheme" style={{ width: "22px", height: "22px" }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16673" width="18" height="16"><path d="M512 0C229.254842 0 0.010628 229.244214 0.010628 511.989372c0 282.766414 229.244214 512.010628 511.989372 512.010628 282.766414 0 511.989372-229.244214 511.989372-512.010628C1024.010628 229.244214 794.78767 0 512 0zM580.146217 804.23589l-136.271178 0L443.875039 687.626362l136.271178 0L580.146217 804.23589zM580.146217 591.443695l-136.271178 0L443.875039 219.76411l136.271178 0L580.146217 591.443695z" fill="#C42B1C" p-id="16674"></path></svg>
                                </div>

                                <p className="message-content not-allowTheme" style={{ whiteSpace: "nowarp" }}>需要执行相关操作，您的Microsoft账户需要注意</p>
                            </div>

                            <Link style={{ marginRight: "0.5rem" }}>验证账户</Link>
                        </div>
                    </div>

                    <div className="message-list" style={{ marginTop: "10px" }}>
                        {
                            messageList.map(item => (
                                <Skeleton key={item.id} active style={{ marginTop: "25px" }}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBox