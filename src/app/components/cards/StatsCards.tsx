import styles from "./StatsCards.module.css"
import { BarChart } from "../charts/BarChart";
import DonutChart from "../charts/DonutChart"
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
                <div className={styles.carddonut}>
                    <DonutChart data={infos}/>
                </div>
            )
        default:
            <div className={styles.card}>
                <BarChart data={infos}/>
            </div>
            break;
    }
}

export { StatsCards }