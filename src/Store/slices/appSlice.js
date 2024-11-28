import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        openNavbarMenu: false
    },
    reducers: {
        handleOpenNavbarMenu: (state, action) => {
            state.openNavbarMenu = action.payload;
        }
    },
});

export default appSlice.reducer;

export const {
    handleOpenNavbarMenu
} = appSlice.actions;