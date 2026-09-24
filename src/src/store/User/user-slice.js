import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    isAuthenticated: false,
    loading: false,
    user: null,
    errors: null,
    success: false,
  },

  reducers: {
    getSignupDetails(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },

    getSignupRequest(state) {
      state.loading = true;
    },

    getLoginRequest(state) {
      state.loading = true;
    },

    getLoginDetails(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },

    getError(state, action) {
      state.errors = action.payload;
      state.loading = false;
    },

    getCurrentRequest(state) {
      state.loading = true;
    },

    getUpdateUserRequest(state) {
      state.loading = true;
    },

    getCurrentUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },

    getLogoutRequest(state) {
      state.loading = true;
    },

    getLogout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },

    getPasswordRequest(state) {
      state.loading = true;
    },

    getPasswordSuccess(state, action) {
      state.success = action.payload;
      state.loading = false;
    },

    clearErrors(state) {
      state.errors = null;
    },
  },
});

export const {
  getSignupDetails,
  getLoginRequest,
  getLoginDetails,
  getError,
  getCurrentRequest,
  getCurrentUser,
  getUpdateUserRequest,
  getLogoutRequest,
  getLogout,
  getPasswordRequest,
  getPasswordSuccess,
  clearErrors,
} = userSlice.actions;

export const userActions = userSlice.actions;

export default userSlice.reducer;