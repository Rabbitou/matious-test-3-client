import axios from "axios";
import { endpoint } from "../constant/endpoint";
import { SalesProduct } from "../types/DataTypes";

export const getSalesProductLine = async (): Promise<SalesProduct[]> => {
  const data = await axios.get(endpoint + "sales");
  return data.data;
};
