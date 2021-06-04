import React from "react";
import { Line } from "react-chartjs-2";

export const TemperaturaScreen = () => {
	const data = {
		labels: ["1", "2", "3", "4", "5", "6"],
		datasets: [
			{
				label: "Temp History",
				data: [12, 19, 3, 5, 2, 3],
				fill: true,
				backgroundColor: "#10451d",
				borderColor: "#10451d",

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
		<div>
			<Line data={data} options={options} width={800} responsive={true} />
		</div>
	);
};
