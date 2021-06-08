import React from 'react';
import { Line } from "react-chartjs-2";


export const Temperatura = () => {
    //CHART
    const data = {
		labels: ["1", "2", "3", "4", "5", "6"],
		datasets: [
			{
				label: "History",
				data: [12, 19, 3, 5, 2, 3],
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
        <div className="temperatura__container">
                <div className="temperatura__content">
                <i className="fas fa-temperature-high"></i>
        
                <h2 className="inactive"> -4 ℃</h2>
            </div>
		<div className="temperatura__chart">
			<Line data={data} options={options} width={600}/>
		</div>
           
        </div>
    )
}
