import axios from "axios";
import { endpoint } from "../constant/endpoint";
import { RatingGender } from "../types/DataTypes";

export const getRatingGender = async (): Promise<RatingGender[]> => {
  const data = await axios.get(endpoint + "gender/rating");
  return data.data;
};
