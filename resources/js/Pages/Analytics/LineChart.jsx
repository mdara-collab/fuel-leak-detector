import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Registering chart components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({
    label,
    data
}) => {
  // Sample data (replace with your actual data)

  // Chart.js data configuration
  const chartData = {
    labels: data.map((row) => row.timestamp), // X-axis labels (years)
    datasets: [
      {
        label: label,
        data: data.map((row) => row.value), // Y-axis data (acquisition counts)
        borderColor: 'rgba(128, 192, 192, 1)', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color under the line
        fill: true, // Fill the area under the line
        tension: 0.4, // Curve of the line
        pointRadius: 0, // Size of the points
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
        pointBorderColor: 'rgba(255, 255, 255, 1)', // Point border color
      },
    ],
  };

  // Chart.js options configuration
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Acquisitions: ${tooltipItem.raw}`; // Custom tooltip
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensure Y axis starts from 0
      },
    },
  };

  return (
    <div style={{ width: '800px' }}>
      <h2>{label}</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
