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
            type: "polarArea",
            data: {
                labels: infos_labels,
                datasets: [{
                    label: 'My Personalized Dataset',
                    data: infos_data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 205, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ],
                    hoverOffset: 4,
                    borderWidth: 1,
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 205, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                }]
            },
            options: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                scale: {
                    ticks : {
                        display: false,
                    },
                    gridLines: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                }
            }
        });

        chartRef.current.chart = newChart
    }, [])
    return<div id="chart-container">
        <canvas style={{position: "relative", width: "45vw", height: "10vh"}} ref={chartRef}/>
    </div>
}