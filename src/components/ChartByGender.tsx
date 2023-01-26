import React, { useEffect, useState } from "react";
import { getRatingGender } from "../fetchers/getRatingGender";
import { IdataChart, RatingGender } from "../types/DataTypes";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartByGender() {
  const [data, setData] = useState<RatingGender[]>();
  const [dataChart, setDataChart] = useState<IdataChart>();
  useEffect(() => {
    getRatingGender().then((result) => setData(result));
  }, []);
  useEffect(() => {
    if (data) {
      const bgColors: string[] = [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ];
      const borderColors: string[] = [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ];
      const ndataChart = {
        labels: data.map((item) => item._id),
        datasets: [
          {
            label: "Rating",
            data: data.map((item) => item.rating),
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      };
      setDataChart(ndataChart);
    }
  }, [data]);
  if (!dataChart) {
    return <h1>No data to display !</h1>;
  }

  return (
    <div className="containerchart">
      <h1>Rating by Gender</h1>
      <Bar data={dataChart} />
    </div>
  );
}
