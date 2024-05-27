"use client"

import { useRef, useEffect } from "react"
import { Chart } from "chart.js"

export default function DonutChart(data){
    const chartRef = useRef(null)
    const infos = data.data

    let infos_labels = []
    let infos_data = []

    if (infos.type === "users") {
        for (const ele of infos.data){
            infos_labels.push(ele.login)
            infos_data.push(ele.id)
        }
    } else if (infos.type === "entreprise") {
        for (const ele of infos.data){
            infos_labels.push(ele.name)
            infos_data.push(ele.Temperature)
        }
    } else if (infos.type === "test") {
        for (const ele of infos.data){
            infos_labels.push(ele.category)
            infos_data.push(ele.value)
        }
    }

    useEffect(()=>{
        if(chartRef.current){
            if(chartRef.current.chart){
                chartRef.current.chart.destroy()
            }
        }

        const context = chartRef.current.getContext("2d");

        const newChart = new Chart(context, {
            type: "doughnut",
            data: {
                labels: infos_labels,
                datasets: [{
                    data: infos_data,
                    backgroundColor:
                    [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 205, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ],
                    hoverOffset: 4,
                    borderWidth: 1,
                    borderColor:
                    [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 205, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ],
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    labels: {
                        fontSize: 8,
                        fontColor: 'white'
                    },
                    position: 'bottom'
                },
                cutoutPercentage: 60
            }
        });

        chartRef.current.chart = newChart
    }, [])
    return<div id="chart-container">
        <canvas style={{width: "100%", height: "auto"}} ref={chartRef}/>
    </div>
}