
import ThemeTool from "../../pages/Main/themes"
import { createSlice } from '@reduxjs/toolkit'
import darkBackground from "../../image/wallpaper/dark/img0.jpg"
import lighBackground from "../../image/wallpaper/default/img1.jpg"
const colorList = ThemeTool.colorList,darkTheme = ThemeTool.darkTheme,lightTheme = ThemeTool.lightTheme;

window.addEventListener('resize',(event) => {  
    console.log('窗口大小已经改变，新的视口大小为：' + window.innerWidth + 'x' + window.innerHeight);  
});

const mainStore = createSlice({
    name: "mainStore",

    initialState: {
        hookFocus: null,
        mainStatus: false,
        startAlert: false,
        thisOpened: false,
        screenDisplay: "none",
        darkThemeStatus: false,
        batteryThemeStatus: false
    },

    reducers: {
        setHookFocus(state,action) {
            state.hookFocus = action.payload;
        },

        setMainStatus(state,action) {
            state.mainStatus = action.payload;
        },

        setStartAlert(state,action) {
            state.startAlert = action.payload;
        },

        setThisOpened(state,action) {
            state.thisOpened = action.payload;
        },

        setScreenDisplay(state,action) {
            state.screenDisplay = action.payload;
        },

        setDarkThemeStatus(state,action) {
            if (action.payload) {
                for(let i in colorList) {
                    document.getElementById("root").style.setProperty(`--background`, `url(${darkBackground})`);
                    document.getElementById("frameelement-main").style.setProperty(`--${colorList[i]}`, darkTheme[colorList[i]]);
                }
            } else {
                for(let i in colorList) {
                    document.getElementById("root").style.setProperty(`--background`, `url(${lighBackground})`);
                    document.getElementById("frameelement-main").style.setProperty(`--${colorList[i]}`, lightTheme[colorList[i]]);
                }
            }
            state.darkThemeStatus = action.payload;
        },

        setBatteryThemeStatus(state,action) {
            state.batteryThemeStatus = action.payload;
        }
    }
});

const mainReducer = mainStore.reducer
const { setHookFocus,setMainStatus,setStartAlert,setThisOpened,setScreenDisplay,setDarkThemeStatus,setBatteryThemeStatus } = mainStore.actions

export default mainReducer
export { setHookFocus,setMainStatus,setStartAlert,setThisOpened,setScreenDisplay,setDarkThemeStatus,setBatteryThemeStatus }