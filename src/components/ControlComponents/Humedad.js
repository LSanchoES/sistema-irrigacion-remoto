import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line } from "react-chartjs-2";



export const Humedad = () => {

        //Circular Progress Bar
        const percentage = 66;

        //CHART
        const data = {
            labels: ["1", "2", "3", "4", "5", "6"],
            datasets: [
                {
                    label: "History",
                    data: [2, 19, 45, 99, 50, 20],
                    fill: true,
                    backgroundColor: "#b7efc5",
                    borderColor: "#b7efc5",
    
                },
            ],
        };
    
        const options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        };

    return (
        <div className="humedad__container">
            <div className="humedad__content">
                <i className="fas fa-hand-holding-water"></i>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>   
            <div className="humedad__chart"> 
                <Line data={data} options={options} width={600}/>
            </div> 
        </div>
    )
}
