import { Request, Response } from "express";
import {
generateHondaData,
generateYamahaData,
generateHarleyDivisionData,
generateBugattiData
} from "../services/motorbikeService.js";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getMotorbikeData = async (req: Request, res: Response) => {
  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { manufacturer } = req.params;
    console.log(manufacturer);

    // We will create a variable with a type of WeatherData
    let finalMotorbikeData: MotorBikesData;

    // We will use an if statement to check which city was passed in
    if (manufacturer === "honda") {
      console.log(generateHondaData());
      finalMotorbikeData = generateHondaData();
    } else if (manufacturer === "yamaha") {
      console.log(generateYamahaData());
      finalMotorbikeData = generateYamahaData();
    } else if (manufacturer === "harleyDivision") {
      console.log(generateHarleyDivisionData());
      finalMotorbikeData = generateHarleyDivisionData();
    } else if (manufacturer === "bugatti") {
      console.log(generateBugattiData());
      finalMotorbikeData = generateBugattiData();
    } else {
      // If the motorbike is not listed above, we will throw an error
      res.status(404).send("Motorbike not found");
    }

    // We will return the weather data as JSON
    res.status(200).json(finalMotorbikeData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in getting motorbike data");
  }
};
