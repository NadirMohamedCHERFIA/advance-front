import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StatusBarChart = ({ data }) => {
  const statusCounts = data.reduce(
    (acc, item) => {
      if (item.Status === 'True') {
        acc.facturable += 1;
      } else if (item.Status === 'False') {
        acc.notFacturable += 1;
      } else if (item.Status === 'None') {
        acc.toBeVerified += 1;
      }
      return acc;
    },
    { facturable: 0, notFacturable: 0, toBeVerified: 0 }
  );

  const chartData = {
    labels: ['Facturable', 'Not facturable', 'To be verified'],
    datasets: [
      {
        label: '# of Status',
        data: [
          statusCounts.facturable,
          statusCounts.notFacturable,
          statusCounts.toBeVerified,
        ],
        backgroundColor: ['#28a745', '#6c757d', '#ffc107'],
        borderColor: ['#28a745', '#6c757d', '#ffc107'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
  plugins: {
    legend: {
      labels: {
        color: "white", // Change legend text color
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white", // Change x-axis label color
      },
    },
    y: {
      ticks: {
        color: "white", // Change y-axis label color
      },
    },
  },
};

  return (
    <div style={{ width: '70%', height: '70%' }}>
      <Bar data={chartData}  options={options}/>
    </div>
  );
};

export default StatusBarChart;