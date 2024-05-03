"use client"

import { useRef, useEffect } from "react"
import { Chart } from "chart.js"

export default function BarChart(data){
    const chartRef = useRef(null)
    const infos = data.data

    console.log(infos)

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
                        ["rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",
                        "rgba(245, 39, 145, 0.23)",],
                        borderWidth: 1,
                    }
                ]
            },
            options: {
                // responsive: true,
                scales: {
                    x: {
                        type: "category"
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        chartRef.current.chart = newChart
    }, [])
    return<div style={{position: "relative", width: "45vw", height: "10vh"}}>
        <canvas ref={chartRef}/>
    </div>
}