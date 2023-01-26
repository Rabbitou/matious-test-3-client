export type RatingGender = {
  _id: string;
  rating: number;
};

export type SalesProduct = {
  _id: string;
  count: number;
};

export type GenderType = {
  _id: string[];
  count: number;
};

export interface Idatasets {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

export interface IdataChart {
  labels: string[];
  datasets: Idatasets[];
}

export interface BarType {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}
