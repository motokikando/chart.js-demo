import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Demo line plot",
            backgroudColor: "#008080",
            borderColor: "#7fffd4",
            pointBorderWidth: 10,
            data: [5, 6, 6, 7, 6, 20],

        }
    ]
}

const LinePlot: React.FC = () => {
    return (
        <div>
            <Line data={data}/>
        </div>
    )
}

export default LinePlot
