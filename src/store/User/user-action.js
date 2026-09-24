import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "./user-slice";
import { axiosInstance } from "../../utils/axios";

const getErrorMessage = (error) =>
  error?.response?.data?.message || error?.message || "Something went wrong";

export const getSignup = (user) => async (dispatch) => {
  try {
    dispatch(userActions.getSignupRequest());
    const { data } = await axiosInstance.post("/v1/user/signup", user);
    dispatch(userActions.getSignupDetails(data.user));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const getLogin = (user) => async (dispatch) => {
  try {
    dispatch(userActions.getLoginRequest());
    const { data } = await axiosInstance.post("/api/v1/rent/user/login", user);
    dispatch(userActions.getLoginDetails(data.user));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const currentUser = () => async (dispatch) => {
  try {
    dispatch(userActions.getCurrentRequest());
    const { data } = await axiosInstance.get("/v1/user/me");
    dispatch(userActions.getCurrentUser(data.user));
  } catch {
    dispatch(userActions.getLogout(null));
  }
};

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.put("/api/user/update", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const forgotPassword = (email) => async (dispatch) => {
  try {
    await axiosInstance.post("/v1/rent/user/forgotPassword", email);
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const resetPassword = (repassword, token) => async (dispatch) => {
  try {
    await axiosInstance.patch(
      `/v1/rent/user/resetPassword/${token}`,
      repassword
    );
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch(userActions.getPasswordRequest());

    await axiosInstance.patch(
      "/v1/rent/user/updateMyPassword",
      passwords
    );

    dispatch(userActions.getPasswordSuccess(true));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axiosInstance.get("/v1/rent/user/logout")
    dispatch(userActions.getLogout(null));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};
