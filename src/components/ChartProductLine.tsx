import React, { useEffect, useState } from "react";
import { getSalesProductLine } from "../fetchers/getSalesProductLine";
import { IdataChart, SalesProduct } from "../types/DataTypes";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartProductLine() {
  const [data, setData] = useState<SalesProduct[]>();
  const [dataChart, setDataChart] = useState<IdataChart>();
  useEffect(() => {
    getSalesProductLine().then((result) => setData(result));
  }, []);

  useEffect(() => {
    if (data) {
      const bgColors: string[] = [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ];
      const borderColors: string[] = [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ];
      const ndataChart = {
        labels: data.map((item) => item._id),
        datasets: [
          {
            label: "Count Product Line",
            data: data.map((item) => item.count),
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
      <h1>Gross volume by Product Line</h1>
      <Pie data={dataChart} />
    </div>
  );
}
