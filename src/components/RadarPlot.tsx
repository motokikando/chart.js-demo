import React from 'react'
import { Radar } from 'react-chartjs-2'

const data = {
    labels: [
        "React",
        "Vue",
        "Javascript",
        "REST API",
        "Python",
        "R",
        "HTML",
        "CSS"

    ],
    datasets: [
        {
            label: "Person A",
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "#008b8b",
            pointBackgroundColor:  "#008b8b",
            pointBorderColor: "#fff",
            data: [20, 10, 30, 40, 30, 30, 20, 20],
        },
        {
            label: "Person B",
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "#008b8b",
            pointBackgroundColor:  "#008b8b",
            pointBorderColor: "#fff",
            data: [10, 20, 30, 20, 20, 40, 30, 10],
        },
    ],
};

const RadarPlot: React.FC = () => {
    return (
        <div>
            <Radar data={data}/>
        </div>
    )
}

export default RadarPlot
