import React from 'react'
import { Pie, Doughnut } from 'react-chartjs-2'

const data = {
    labels: ["Windows", "Mac", "Linux"],
    datasets: [
        {
            data: [90, 7, 3],
            backgroundColor: ["red", "blue", "yellow" ],
            hoverBackgroundColor: ["black", "white", "blue"],
            borderColor: ["transparent", "transparent", "transparent"],

        }
    ]
}

const PiePlot: React.FC  = () => {
    return (
        <div>
            <Pie data = {data} />
            <Doughnut data= {data} />
        </div>
    )
}

export default PiePlot;


