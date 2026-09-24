import { configureStore } from "@reduxjs/toolkit";

import propertySlice from "../Property/property-slice";
import userSlice from "./user-slice";
import bookingSlice from "../Booking/booking-slice";
import accommodationSlice from "../Accomodation/Accomodation-slice";
import paymentSlice from "../Payment/payment-slice";

const store = configureStore({
  reducer: {
    properties: propertySlice,
    user: userSlice,
    booking: bookingSlice.reducer,
    accommodation: accommodationSlice.reducer,
    payment: paymentSlice.reducer,
  }
})

export default store;
