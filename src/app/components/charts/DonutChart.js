"use client"

import { useRef, useEffect } from "react"
import { DataForChart, backgroundColor, borderColor } from "./ChartData.js"
import { Chart } from "chart.js"

export default function DonutChart(data){
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
            type: "doughnut",
            data: {
                labels: infos_labels,
                datasets: [{
                    data: infos_data,
                    backgroundColor: backgroundColor,
                    hoverOffset: 4,
                    borderWidth: 1,
                    borderColor: borderColor, 
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
    return <div id="chart-container">
        <canvas style={{position: "relative", width: "80%", height: "10vh"}} ref={chartRef}/>
    </div>
}