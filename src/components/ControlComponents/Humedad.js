import React from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
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
                    label: "Humity",
                    data: [2, 19, 45, 99, 50, 20],
                    fill: true,
                    backgroundColor: "#0077b6",
                    borderColor: "#0077b6",
    
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
                <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`} 
                styles={buildStyles({
                       rotation: 0.25,
                       strokeLinecap: 'butt',
                       pathTransitionDuration: 0.5,
                       textSize: '4ch',  
                       pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                       textColor: '#fff',
                       trailColor: '#d6d6d6',
                       backgroundColor: '#3e98c7',
                     })}
                />
            </div>   
            <div className="humedad__chart"> 
                <Line data={data} options={options} width={600}/>
            </div> 
        </div>
    )
}
