import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/system';
import { Card } from '@mui/material';


export const data = {
  labels: ['amazon', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 10)',
        'rgba(54, 162, 235, 5)',
        'rgba(255, 206, 86, 5)',
        'rgba(75, 192, 192, 5)',
        'rgba(153, 102, 255, 5)',
        'rgba(255, 159, 64, 5)',
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],

      borderWidth: 1,
    },
  ],
};
ChartJS.register(ArcElement, Tooltip, Legend);


function DashBoard() {
  // margin=0 auto
  return (
    <Box flex={1} p={2}>
    <Card style={{maxWidth:300, margin:"0 0 ",padding:"20px 5px"}}>  

  <Doughnut data={data} />
  </Card>
  </Box>
  );
}
export default DashBoard;