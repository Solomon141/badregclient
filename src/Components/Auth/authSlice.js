import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../app/ConfigConstants";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  error: false,
  message: null,
  data: {
    name: "Solomon Gebremichael",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    userlogin: (state, action) => {
      return {
        ...state,
        isAuthenticated:true,
        data: action.payload.responseData.data,
        error:false,
      };
    },
    userregister: (state, action) => {
      console.log("userregister");
    },
    userlogout: (state, action) => {
      return { ...state, isAuthenticated: false, error: 12 };
    },
    verifyuser: (state, action) => {},
    resetpassword: (state, action) => {},
    forgotpassword: (state, action) => {},
    changepassword: (state, action) => {},
  },
});

export const {
  userlogin,
  userregister,
  userlogout,
  verifyuser,
  resetpassword,
  forgotpassword,
  changepassword,
} = authSlice.actions;
export default authSlice.reducer;
