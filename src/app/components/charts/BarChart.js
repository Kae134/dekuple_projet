"use client"

import { useRef, useEffect } from "react"
import { Chart } from "chart.js"

function BarChart(data){
    const chartRef = useRef(null)
    const infos = data.data

    console.log(data)

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
            type: "bar",
            data: {
                labels: infos_labels,
                datasets : [
                    {
                        label: "Info",
                        data: infos_data,
                        backgroundColor: 
                        ["rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",
                        "rgba(245, 39, 145, 0.5)",],
                        borderWidth: 1,
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: "rgba(255, 255, 255, 0.1)", 
                        },
                        ticks: {
                            beginAtZero: true 
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            color: "rgba(255, 255, 255, 0.1)", 
                        },
                        barThickness: 40,
                        categoryPercentage: 0.8, 
                        barPercentage: 0.9 
                    }]
                }
            }
        });

        chartRef.current.chart = newChart
    }, [])
    return <div id="chart-container">
        <canvas style={{width: "100%", height: "100%"}} ref={chartRef}/>
    </div>
}

export { BarChart }