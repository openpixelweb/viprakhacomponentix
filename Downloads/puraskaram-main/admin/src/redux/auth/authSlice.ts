import { createSlice } from "@reduxjs/toolkit";

type IUser = { _id: string; name: string; email: string; role?: string; image?: string; phone?: string; };
type IAuth = { accessToken?: string; user: IUser; };

const initialAuthState: { accessToken: string | undefined; user: IUser | undefined } = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    userLoggedIn: (state, { payload }: { payload: IAuth }) => {
      state.accessToken = payload?.accessToken;
      state.user = payload.user;
      if (typeof window !== "undefined") {
        localStorage.setItem("admin_user", JSON.stringify(payload.user));
        if (payload?.accessToken) localStorage.setItem("admin_access_token", payload.accessToken);
      }
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      if (typeof window !== "undefined") {
        localStorage.removeItem("admin_user");
        localStorage.removeItem("admin_access_token");
      }
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
