import styles from "./StatsCards.module.css";
import BarChart from "../charts/BarChart";
import DonutChart from "../charts/DonutChart";
import PolarChart from "../charts/PolarChart";
import { createClient } from "@/src/utils/supabase/createClient";
import { data } from "autoprefixer";



async function StatsCards(where:string, chart:string) {
    const supabase = createClient(); 

    const { data: users } = await supabase.from(where).select('*');

    const infos = {'type': where, 'data': users}

    switch (chart) {
        case "bar":
            return (
                <div className={styles.card}>
                    <BarChart data={infos}/>
                </div>
            )
            break;
        case "donut":
            return (
                <div className={`${styles.card}`}>
                    <DonutChart data={infos}/>
                </div>
            )
        case "polar":
        return (
            <div className={`${styles.card}`}>
                <PolarChart data={infos}/>
            </div>
        )
        default:
            <div className={`${styles.card}`}>
                <BarChart data={infos}/>
            </div>
            break;
    }
}

function Details(contents:object, angle:boolean){
    if (angle === true) {
        return (
            <div className={`${styles.card} ${styles.carddetails_horizontal} ${styles.top_color_green}`}>
                <h1>{contents.title}</h1>
                <p>{contents.main}</p>
            </div>
        )
    } else {
        return (
            <div className={`${styles.card} ${styles.carddetails_simple} ${styles.top_color_yellow}`}>
                <h1>{contents.title}</h1>
                <p>{contents.main}</p>
            </div>
        )
    }
    
}

function ReportCard(reports:any){
    return (
        <div className={`${styles.card} ${styles.carddetails_simple} ${styles.top_color_red} ${styles.report}`}>
            {reports.map((item)=>{
                return <span>{item.date + " - " + item.data}</span>
            })}
        </div>
    )
}

export { StatsCards, Details, ReportCard }