import ProfileData from '@/types/ProfileData';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type SiteConfigData = {
    isDarkMode: boolean;
    isAdmin: boolean;
    profile: ProfileData;
}

function avatarURL(name: string) {
    return `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${name.replace(" ", "+")}`
}

const initialState: SiteConfigData = {
    isDarkMode: false,
    isAdmin: false,
    profile: {
        name: "Siddhesh Agarwal",
        avatar: avatarURL("Siddhesh Agarwal"),
        email: "janedoe@example.com",
        phoneNo: "+91 987654321",
    }
}

const setSiteCongidData = createSlice({
    name: "setData",
    initialState: initialState,
    reducers: {
        switchMode: (state) => {
            state.isDarkMode = !state.isDarkMode
        },
        switchIsAdmin: (state) => {
            state.isAdmin = !state.isAdmin
        },
        switchProfile: (state, action: PayloadAction<{name: string; email: string; phoneNo: string}>) => {
            state.profile.name = action.payload.name;
            state.profile.avatar = avatarURL(state.profile.name);
            state.profile.email = action.payload.email;
            state.profile.phoneNo = action.payload.phoneNo;
        },
    }
})

export const { switchMode, switchIsAdmin, switchProfile } = setSiteCongidData.actions
export default setSiteCongidData.reducer 
