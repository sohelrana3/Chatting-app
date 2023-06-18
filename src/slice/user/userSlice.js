import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "user",
    initialState: {
        LoginUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")):null,
    },
    reducers: {
        userdata: (state, action) => {
            console.log("ami user data", action.payload);
            state.LoginUser = action.payload
        },
      
    },
});

// Action creators are generated for each case reducer function
export const { userdata} = counterSlice.actions;

export default counterSlice.reducer;
