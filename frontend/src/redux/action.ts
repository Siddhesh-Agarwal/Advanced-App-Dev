import ProfileData from '@/types/ProfileData';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type SiteConfigData = {
    isAdmin: boolean;
    profile: ProfileData;
}

function avatarURL(name: string) {
    return `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${name.replace(" ", "+")}`
}

const initialState: SiteConfigData = {
    isAdmin: true,
    profile: {
        name: "John Doe",
        avatar: avatarURL("John Doe"),
        email: "janedoe@example.com",
        phoneNo: "+91 987654321",
    }
}

const setSiteConfigData = createSlice({
    name: "setData",
    initialState: initialState,
    reducers: {
        switchIsAdmin: (state, action: PayloadAction<{ isAdmin: boolean }>) => {
            state.isAdmin = action.payload.isAdmin;
        },

        switchProfile: (state, action: PayloadAction<{ name: string; email: string; phoneNo: string }>) => {
            state.profile.name = action.payload.name;
            state.profile.avatar = avatarURL(state.profile.name);
            state.profile.email = action.payload.email;
            state.profile.phoneNo = action.payload.phoneNo;
        },
    }
})

export const { switchIsAdmin, switchProfile } = setSiteConfigData.actions
export default setSiteConfigData.reducer 
