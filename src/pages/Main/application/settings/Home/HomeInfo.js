
import UserInfo from "../../../scripts/users"
import deskScreen from "../../../../../image/wallpaper/default/img0.jpg"

const HomeWindowsInfo = () => {
    return (
        <div className="windows-info">
            <div className="home-screen">
                <img className="desktop-screen" src={deskScreen} alt="Windows"/>
            </div>
            <div className="desktop-content">
                <span className="desktop-name">{UserInfo.userNick}</span>
                <span className="desktop-code">{UserInfo.userCode}</span>
            </div>
        </div>
    )
}

export default HomeWindowsInfo