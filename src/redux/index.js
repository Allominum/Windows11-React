
import mainReducer from "./modules/mainStore"
import windReducer from "./modules/windStore"
import hookReducer from "./modules/hookStore"
import sadeReducer from "./modules/sadeStore"
import timeReducer from "./modules/timeStore"
import loginReducer from "./modules/loginStore"

import { configureStore } from "@reduxjs/toolkit"

const WinStore = configureStore({
    reducer: {
        mainReducer: mainReducer,
        windReducer: windReducer,
        hookReducer: hookReducer,
        sadeReducer: sadeReducer,
        timeReducer: timeReducer,
        loginReducer: loginReducer,
    }
});

export default WinStore