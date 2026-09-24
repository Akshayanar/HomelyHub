import { Property } from "../Models/propertyModel.js";
import { Booking } from "../Models/bookingModel.js";

//createOrder : booking any property
const createOrder = async (req, res) => {
    const { amount, propertyId, fromDate, toDate, guests } = req.body;

    //orderID : order_1780533652671
    const orderId = "order_" + Date.now();

    res.json({
        success: true,
        message: "Order created Successfully",
        orderId,
        amount,
        propertyId,
        fromDate,
        toDate,
        guests
    });
};

// verifyPayment
// 25, 26
// 1. save the booking
// 2. Block these dates

const verifyPayment = async (req, res) => {
    const { orderId, bookingDetails, forceStatus } = req.body;

    if (forceStatus === "success") {
        const paymentId = "pay_" + Date.now();

        //save booking
        const newBooking = await Booking.create({
            user: req.user._id,
            property: bookingDetails.propertyId,
            price: bookingDetails.price,
            fromDate: bookingDetails.fromDate,
            toDate: bookingDetails.toDate,
            guests: bookingDetails.guests,
            numberOfNights: bookingDetails.numberOfNights
        });

        const updatedProperty = await Property.findByIdAndUpdate(
            bookingDetails.propertyId,
            {
                $push: {
                    currentBookings: {
                        bookingId: newBooking._id,
                        fromDate: bookingDetails.fromDate,
                        toDate: bookingDetails.toDate,
                        userId: req.user._id
                    }
                }
            },
            { new: true }
        );

        res.json({
            success: true,
            message: "Payment Successful, Booking Confirmed",
            paymentId,
            bookingId: newBooking._id,
            updatedProperty
        });
    } else {
        res.json({
            success: false,
            message: "Payment Failed, Booking Not Confirmed",
            orderId
        });
    }
}
//get my bookings
const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user._id });

        res.status(200).json({
            status: "success",
            data: {
                bookings
            }
        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: error.message
        })
    }
}
//get one booking details 
const getBookingDetails = async (req, res) => {
    try {
        const bookings = await Booking.findById(req.params.bookingId);

        res.status(200).json({
            status: "success",
            data: {
                bookings
            }
        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: error.message
        })
    }
}

export { createOrder, verifyPayment, getUserBookings, getBookingDetails };