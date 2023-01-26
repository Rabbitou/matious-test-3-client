import React, { useEffect, useState } from "react";
import { BarType, GenderType, IdataChart } from "../types/DataTypes";
import { getGenderType } from "../fetchers/getGenderType";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartGenderType() {
  const [data, setData] = useState<GenderType[]>();
  const [dataChart, setDataChart] = useState<BarType>();
  useEffect(() => {
    getGenderType().then((result) => setData(result));
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
        labels: ["Member", "Normal"],
        datasets: [
          {
            label: "Female",
            data: data
              .filter((e) => e._id.includes("Female"))
              .sort((a, b) => (a._id[1] === "Member" ? -1 : 1))
              .map((item) => item.count),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderWidth: 1,
          },
          {
            label: "Male",
            data: data
              .filter((e) => e._id.includes("Male"))
              .sort((a, b) => (a._id[1] === "Member" ? -1 : 1))
              .map((item) => item.count),
            backgroundColor: "rgba(54, 162, 235, 0.2)",
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
      <h1>Count by Gender and Type</h1>
      <Bar data={dataChart} />
    </div>
  );
}
