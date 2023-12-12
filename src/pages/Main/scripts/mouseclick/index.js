
import "./index.css"
import { useState } from "react";
import { Divider, message } from 'antd'

import wallpaper0 from "../../../../image/wallpaper/default/img0.jpg"
import wallpaper1 from "../../../../image/wallpaper/ThemeA/img0.jpg"
import wallpaper2 from "../../../../image/wallpaper/ThemeA/img1.jpg"
import wallpaper3 from "../../../../image/wallpaper/ThemeA/img2.jpg"
import wallpaper4 from "../../../../image/wallpaper/ThemeA/img3.jpg"
import wallpaper5 from "../../../../image/wallpaper/ThemeB/img0.jpg"
import wallpaper6 from "../../../../image/wallpaper/ThemeB/img1.jpg"
import wallpaper7 from "../../../../image/wallpaper/ThemeB/img2.jpg"
import wallpaper8 from "../../../../image/wallpaper/ThemeB/img3.jpg"
import wallpaper9 from "../../../../image/wallpaper/ThemeC/img0.jpg"
import wallpaper10 from "../../../../image/wallpaper/ThemeC/img1.jpg"
import wallpaper11 from "../../../../image/wallpaper/ThemeC/img2.jpg"
import wallpaper12 from "../../../../image/wallpaper/ThemeC/img3.jpg"
import wallpaper13 from "../../../../image/wallpaper/ThemeD/img0.jpg"
import wallpaper14 from "../../../../image/wallpaper/ThemeD/img1.jpg"
import wallpaper15 from "../../../../image/wallpaper/ThemeD/img2.jpg"
import wallpaper16 from "../../../../image/wallpaper/ThemeD/img3.jpg"

import wallpaper17 from "../../../../image/wallpaper/default/img1.jpg"
import wallpaper18 from "../../../../image/wallpaper/default/img2.jpg"

const wallpaperList = [wallpaper0,wallpaper1,wallpaper2,wallpaper3,wallpaper4,wallpaper5,wallpaper6,wallpaper7,wallpaper8,wallpaper9,wallpaper10,wallpaper11,wallpaper12,wallpaper13,wallpaper14,wallpaper15,wallpaper16,wallpaper17,wallpaper18]

const OnMouseRightClick = ({ opacity, openSettingWindow, openDesktopRefresh, isDeveloper }) => {

    /**
     * 图片预加载，会导致很多问题，已禁用
     */

    // useEffect(() => {
    //     const ImgLoaderTool = (url) => {
    //         new Promise((resolve, reject) => {  
    //             let ImgLoader = new Image();
    //             ImgLoader.src = url;
    //             ImgLoader.onload = () => resolve(ImgLoader);  
    //             ImgLoader.onerror = reject;
    //         });
    //     }
    //     const promises = wallpaperList.map(ImgLoaderTool)
    //     Promise.all(promises)  
    //     .then(imgs => imgs.forEach((img, index) => {
    //         console.log("[图片预加载]主题壁纸-" + index + "加载完成！");
    //     }))
    // .catch(err => console.error(err));
    // },[]);
    
    const [status, setStatus] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const setWallpaper = () => {
        if (!status) {
            setStatus(true);
            let wallIndex = Math.floor(Math.random() * (Math.floor(18) - Math.ceil(0) + 1)) + 0;
            document.documentElement.style.setProperty(`--background`, `url(${wallpaperList[wallIndex]})`);
            messageApi.open({
                type: "success",
                style: {zIndex: 9999},
                content: "切换壁纸成功！",
            });
            setTimeout(() => setStatus(false),2000);
        } else {
            messageApi.open({
                type: "warning",
                style: {zIndex: 9999},
                content: "人家疼，您悠着点！",
            });
        }
    }

    return (
        <div className="mouse-menu" style={{ opacity: opacity }} tabIndex={0} onContextMenu={() => {return false}}>
            {contextHolder}
            <ul className="menu-list">
                <li className="menu-list-item" onClick={openDesktopRefresh} style={{ marginBottom: "3px" }}>
                    <div className="item-icon-box">
                        <svg t="1700786490007" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4043" width="20" height="20"><path d="M769.6 159.488L514.112 0v319.296z" fill="#000000" p-id="4044"></path><path d="M512.96 127.296C275.264 136.128 62.656 331.392 62.656 571.136 62.656 816.384 277.376 1024 522.752 1024c239.616 0 429.12-190.08 437.76-427.712h-65.856C886.08 797.632 726.144 960 522.752 960c-209.024 0-397.12-179.968-397.12-388.864 0-203.456 185.984-369.344 387.328-377.856V127.296z" fill="#000000" p-id="4045"></path></svg>
                    </div>
                    <span className="item-text">刷新图标</span>
                </li>

            
                <li className="menu-list-item" onClick={isDeveloper} style={{ marginBottom: "3px" }}>
                    <div className="item-icon-box">
                        <svg t="1700787179453" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8668" width="20" height="20"><path d="M399.12 231.19c0-92.42-75.16-167.57-167.53-167.57-92.42 0-167.57 75.16-167.57 167.57 0 76.46 51.78 140.4 121.91 160.43l1.7 568.99h89.7V391.6c70.06-20.06 121.79-83.98 121.79-160.41zM231.59 327c-52.82 0-95.83-42.99-95.83-95.81 0-52.84 43.01-95.83 95.83-95.83s95.79 42.99 95.79 95.83c0 52.83-42.97 95.81-95.79 95.81zM838.31 632.61l-1.7-568.99h-89.7v569.02c-70.06 20.05-121.79 83.97-121.79 160.4 0 92.42 75.16 167.57 167.53 167.57 92.42 0 167.57-75.16 167.57-167.57 0-76.46-51.78-140.4-121.91-160.43z m-45.66 256.26c-52.82 0-95.79-42.99-95.79-95.83 0-52.82 42.97-95.81 95.79-95.81s95.83 42.99 95.83 95.81c0 52.85-43.01 95.83-95.83 95.83z" fill="#000000" p-id="8669"></path><path d="M637.61 621.82c3.48-3.94 6.91-7.88 10.01-12.13 2.47-3.41 4.68-6.94 6.89-10.54 3.27-5.27 6.21-10.7 8.87-16.33 1.56-3.32 3.1-6.6 4.44-10.03 2.66-6.74 4.72-13.73 6.49-20.87 0.69-2.81 1.6-5.5 2.15-8.36 1.95-10.14 3.19-20.53 3.19-31.26 0-0.06-0.02-0.11-0.02-0.18s0.02-0.11 0.02-0.17c0-10.73-1.25-21.12-3.19-31.26-0.55-2.87-1.46-5.56-2.16-8.38-1.77-7.14-3.83-14.11-6.48-20.85-1.35-3.45-2.9-6.75-4.47-10.09a164 164 0 0 0-8.83-16.24c-2.23-3.63-4.46-7.19-6.94-10.62-3.07-4.21-6.47-8.12-9.91-12.02-3.29-3.76-6.42-7.59-10.03-11.03-1.92-1.82-4.1-3.32-6.1-5.04-10.9-9.49-22.9-17.57-35.99-24.02-0.96-0.47-1.83-1.06-2.79-1.52-6.43-3.01-13.16-5.31-20-7.5-1.71-0.54-3.27-1.38-5-1.87l-1.7-287.89h-89.7v287.92c-1.78 0.51-3.4 1.37-5.16 1.94-6.73 2.17-13.35 4.42-19.68 7.39-1.26 0.59-2.4 1.36-3.65 1.98-12.65 6.32-24.28 14.14-34.86 23.31-2.12 1.82-4.44 3.41-6.47 5.34-3.57 3.41-6.66 7.21-9.92 10.92-3.48 3.94-6.91 7.88-10.01 12.13-2.47 3.41-4.68 6.94-6.89 10.54a163.92 163.92 0 0 0-8.88 16.34c-1.56 3.31-3.09 6.58-4.43 10.01-2.66 6.75-4.73 13.74-6.5 20.89-0.69 2.81-1.6 5.5-2.15 8.36-1.95 10.14-3.19 20.53-3.19 31.26 0 0.06 0.02 0.11 0.02 0.17s-0.02 0.11-0.02 0.18c0 10.73 1.25 21.12 3.19 31.26 0.55 2.87 1.46 5.56 2.16 8.37 1.77 7.14 3.83 14.11 6.48 20.85 1.35 3.45 2.89 6.74 4.46 10.07 2.66 5.61 5.58 11.01 8.83 16.25 2.23 3.63 4.46 7.19 6.95 10.63 3.07 4.2 6.45 8.1 9.9 11.99 3.29 3.76 6.43 7.6 10.05 11.05 1.92 1.82 4.1 3.32 6.1 5.04 10.88 9.47 22.86 17.54 35.92 23.98 0.99 0.48 1.88 1.1 2.88 1.56 6.42 3.01 13.13 5.29 19.96 7.48 1.71 0.55 3.29 1.39 5.02 1.88l1.7 287.89h89.7V672.7c1.79-0.51 3.41-1.37 5.18-1.94 6.72-2.16 13.33-4.42 19.66-7.38 1.28-0.59 2.43-1.38 3.68-2 12.64-6.32 24.25-14.13 34.83-23.3 2.12-1.82 4.44-3.41 6.47-5.34 3.57-3.42 6.67-7.21 9.92-10.92zM512.1 607.78c-52.76 0-95.67-42.9-95.77-95.66 0.1-52.76 43.05-95.66 95.82-95.66 52.76 0 95.67 42.9 95.77 95.66-0.11 52.76-43.06 95.66-95.82 95.66z" fill="#000000" p-id="8670"></path></svg>
                    </div>
                    <span className="item-text">切换主题</span>
                </li>

                <li className="menu-list-item" onClick={setWallpaper} style={{ marginBottom: "3px" }}>
                    <div className="item-icon-box">
                        <svg t="1701077721020" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4166" width="20" height="20"><path d="M841.71335 65.290005 182.285626 65.290005c-64.511269 0-116.995621 52.484352-116.995621 116.995621L65.290005 841.71335c0 64.511269 52.484352 116.995621 116.995621 116.995621l659.427724 0c64.511269 0 116.995621-52.484352 116.995621-116.995621L958.708971 182.285626C958.708971 117.774357 906.225643 65.290005 841.71335 65.290005zM182.285626 107.833961l659.427724 0c41.051975 0 74.451666 33.398668 74.451666 74.451666l0 136.557142c-150.09446 5.26184-290.370297 66.084091-396.978337 172.692131-49.960879 49.961902-89.841168 107.331517-118.694309 169.625282-83.496669-70.835302-204.372667-75.376735-292.65841-13.617136L107.833961 182.285626C107.833961 141.232628 141.232628 107.833961 182.285626 107.833961zM107.833961 841.71335 107.833961 702.627618c76.54228-74.311473 198.833511-74.234725 275.272437 0.24457-24.303522 65.298192-37.026288 135.112234-37.026288 206.91149 0 2.223644 0.343831 4.366448 0.977257 6.381337L182.285626 916.165016C141.232628 916.165016 107.833961 882.766348 107.833961 841.71335zM841.71335 916.165016 387.646807 916.165016c0.633427-2.01489 0.977257-4.157693 0.977257-6.381337 0-146.71755 57.053414-284.572244 160.647817-388.166647 98.570993-98.570993 228.166583-154.963351 366.894158-160.204725L916.166039 841.71335C916.165016 882.766348 882.766348 916.165016 841.71335 916.165016z" fill="#000000" p-id="4167"></path><path d="M312.397986 413.458683c60.8376 0 110.332874-49.494251 110.332874-110.332874s-49.494251-110.332874-110.332874-110.332874-110.332874 49.494251-110.332874 110.332874S251.559363 413.458683 312.397986 413.458683zM312.397986 235.337913c37.378306 0 67.788919 30.40959 67.788919 67.788919s-30.40959 67.788919-67.788919 67.788919-67.788919-30.40959-67.788919-67.788919S275.018657 235.337913 312.397986 235.337913z" fill="#000000" p-id="4168"></path></svg>
                    </div>
                    <span className="item-text">切换壁纸</span>
                </li>

                <li className="menu-list-item" onClick={openSettingWindow} style={{ marginBottom: "3px" }}>
                    <div className="item-icon-box">
                        <svg t="1700787230700" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9861" width="20" height="20"><path d="M944.48 552.458667l-182.357333 330.666666a73.792 73.792 0 0 1-64.565334 38.325334h-362.133333a73.792 73.792 0 0 1-64.565333-38.325334l-182.357334-330.666666a75.338667 75.338667 0 0 1 0-72.682667l182.357334-330.666667a73.792 73.792 0 0 1 64.565333-38.325333h362.133333a73.792 73.792 0 0 1 64.565334 38.325333l182.357333 330.666667a75.338667 75.338667 0 0 1 0 72.682667z m-55.989333-31.146667a10.773333 10.773333 0 0 0 0-10.378667l-182.037334-330.666666a10.517333 10.517333 0 0 0-9.205333-5.482667H335.733333a10.517333 10.517333 0 0 0-9.205333 5.482667l-182.037333 330.666666a10.773333 10.773333 0 0 0 0 10.378667l182.037333 330.666667a10.517333 10.517333 0 0 0 9.205333 5.472h361.514667a10.517333 10.517333 0 0 0 9.205333-5.472l182.037334-330.666667zM513.738667 682.666667c-94.261333 0-170.666667-76.405333-170.666667-170.666667s76.405333-170.666667 170.666667-170.666667c94.250667 0 170.666667 76.405333 170.666666 170.666667s-76.416 170.666667-170.666666 170.666667z m0-64c58.912 0 106.666667-47.754667 106.666666-106.666667s-47.754667-106.666667-106.666666-106.666667-106.666667 47.754667-106.666667 106.666667 47.754667 106.666667 106.666667 106.666667z" fill="#000000" p-id="9862"></path></svg>
                    </div>
                    <span className="item-text">系统设置</span>
                </li>

                <Divider />

                <li className="menu-list-item" onClick={() => {
                    window.open("https://github.com/yichen9247/Windows11-React");
                }}>
                    <div className="item-icon-box">
                        <svg t="1700786964816" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6074" width="20" height="20"><path d="M82.06 746.65V277.4L511.98 43.79l183.27 99.61-46.42 75.65-136.85-74.39L173.06 328.8v366.35L511.98 879.3l338.91-184.14v-316.9L518.55 559.02l-46.42-75.65 469.82-255.49V746.6L512.02 980.21 82.06 746.65z" p-id="6075" fill="#000000"></path></svg>
                    </div>
                    <span className="item-text">开源地址</span>
                </li>
            </ul>
        </div>
    )
}

export default OnMouseRightClick