import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  bookingDetails: {},
  loading: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingRequest(state) {
      state.loading = true;
    },
    setBookingSuccess(state, action) {
        state.booking=false 
  },
  addBooking(state, action) {
    state.bookings.push(action.payload);
  },
  setBookingDetails(state, action) {
    state.bookingDetails = action.payload.bookings;
  }
}
});
export const { setBookingRequest, setBookingSuccess, addBooking, setBookingDetails } = bookingSlice.actions;
export default bookingSlice;