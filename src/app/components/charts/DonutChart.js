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
                    label: 'My First Dataset',
                    data: infos_data,
                    backgroundColor: [
                    'rgb(255, 99, 132, 0.5)',
                    'rgb(54, 162, 235, 0.5)',
                    'rgb(255, 205, 86, 0.5)',
                    'rgb(255, 99, 132, 0.5)',
                    'rgb(54, 162, 235, 0.5)',
                    'rgb(255, 205, 86, 0.5)'
                    ],
                    hoverOffset: 4,
                    borderWidth: 1,
                    borderColor: [
                        'rgb(255, 99, 132, 0.5)',
                        'rgb(54, 162, 235, 0.5)',
                        'rgb(255, 205, 86, 0.5)',
                        'rgb(255, 99, 132, 0.5)',
                        'rgb(54, 162, 235, 0.5)',
                        'rgb(255, 205, 86, 0.5)'
                    ], 
                }]
            }, 
            options: {
                legend: {
                    position: 'bottom'
                },
                cutoutPercentage: 60 
            }
        });

        chartRef.current.chart = newChart
    }, [])
    return<div id="chart-container">
        <canvas style={{width: "100%", height: "100%"}} ref={chartRef}/>
    </div>
}