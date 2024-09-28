import React from 'react';
import { Bar } from 'react-chartjs-2';

const EnrollmentsRecord = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [{
      label: 'New Enrollments',
      data: data.map(item => item.enrollments),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  return (
    <div className="card">
      <h3>Enrollments Record</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default EnrollmentsRecord;
