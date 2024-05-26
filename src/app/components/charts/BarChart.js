"use client"

import { useRef, useEffect } from "react"
import { Chart } from "chart.js"
import { DataForChart, backgroundColor, borderColor } from "./ChartData.js"

function BarChart(data){
    const chartRef = useRef(null)
    const infos = data.data

    let infos_for_graph = DataForChart(infos)

    let infos_data = infos_for_graph[1]
    let infos_labels = infos_for_graph[0]



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
                        label: "",
                        data: infos_data,
                        backgroundColor: backgroundColor,
                        borderWidth: 1,
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    labels: {
                        display:false,
                    }
                },
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
                        barThickness: 30,
                        categoryPercentage: 0.8, 
                        barPercentage: 0.9 
                    }]
                }
            }
        });

        chartRef.current.chart = newChart
    }, [])
    return <div id="chart-container">
        <canvas style={{position: "relative", width: "80%", height: "10vh"}} ref={chartRef}/>
    </div>
}

export default BarChart