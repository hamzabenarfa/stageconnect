"use client";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["open", "closed", "not posted"],
  datasets: [
    {
      label: "# of Votes",
      data: [23, 7, 12],
      backgroundColor: [
        "rgb(255,107,50)",
        "rgb(227,217,255)",
        "rgb(255,211,193)",

      ],
      borderColor: [
        "rgb(255,107,50)",
        "rgb(227,217,255)",
        "rgb(255,211,193)",

      ],
      borderWidth: 1,
      cutout: "88%",
      borderRadius: 20,
      offset: 10,
    },
  ],
};

export const options= {
  //maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const JobSummary = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 rounded-3xl py-8 px-8 bg-white">
      <div className="text-black font-bold text-2xl">Job Summary</div>
      <Doughnut data={data} options={options} />
      <div className="flex justify-around w-full mt-4">
        {data.labels.map((label, index) => (
          <div key={index} className="text-left flex items-start justify-between">
            <div
              className="rounded-full mr-2"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></div>
            <div>
              <div>{label}</div>
              <div>{data.datasets[0].data[index]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSummary;
