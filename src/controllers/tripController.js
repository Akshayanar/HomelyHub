// recv the user info
// validate info
// send info to ai/tripPlanner.js
// calculate budget and send to ai/tripPlanner.js

import { Property } from "../Models/propertyModel.js";
import { planTrip } from "../ai/tripPlanner.js";
import { generateDescription } from "../ai/generateDescription.js";

const cleanCity = (text) => text.toLowerCase().replaceAll(" ", "");

const createTripPlan = async (req, res) => {
    try {
        const { destination, budget, days, people, interests } = req.body;

        if (!destination || !budget || !days || !people) {
            return res.status(400).json({
                status: "fail",
                message: "Please fill in destination, budget, days, and people"
            });
        }

        const plan = await planTrip({
            destination: cleanCity(destination),
            budget,
            days,
            people,
            interests: interests || []
        });

        const perNight = Number(budget) / Number(days);
        const city = cleanCity(destination);

        const properties = await Property.find({
            $or: [
                { "address.city": city },
                { "address.area": city },
                { "address.state": city }
            ],
            price: { $lte: perNight },
            maximumGuests: { $gte: Number(people) }
        }).limit(6);

        res.status(200).json({
            status: "success",
            data: {
                plan,
                properties,
                perNight
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
};

const writeDescription = async (req, res) => {
    try {
        const description = await generateDescription(req.body);

        res.status(200).json({
            status: "success",
            data: {
                description
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Could not generate a description"
        });
    }
};

export { createTripPlan, writeDescription };