import axios from "axios";
import { endpoint } from "../constant/endpoint";
import { GenderType } from "../types/DataTypes";

export const getGenderType = async (): Promise<GenderType[]> => {
  const data = await axios.get(endpoint + "gender/type");
  return data.data;
};
