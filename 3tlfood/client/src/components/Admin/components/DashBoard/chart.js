// import React, {useEffect} from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../actions/OrderAction";
import React, {useState, useEffect} from 'react'

import { Pie, Doughnut} from 'react-chartjs-2';

function PieChart() {

    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            labels: ['Thịt', 'Hải sản', 'Tráng miệng', 'Nước uống'],
            datasets: [
              {
                label: 'Average Population',
                
                backgroundColor: [
                  '#B21F00',
                  '#00A6B4',
                  '#C9DE00',
                  '#2FDE00'                  
                ],
                hoverBackgroundColor: [
                '#501800',
                '#003350',
                '#4B5000',
                '#175000'                
                ],
                // data: [600005, 500009, 800000, 800001]
                data: [602, 400, 200, 200]
              }
            ]
          });
    }, [])

    return (
        <div>
            <Pie
          data={data}
          options={{
            title:{
              display:true,
              text:'Average Population PIE Chart',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        {/* <Doughnut
          data={data}
          options={{
            title:{
              display:true,
              text:'Average Population Doughnut',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}
        </div>
    )
}

export default PieChart;