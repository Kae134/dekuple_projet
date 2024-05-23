import styles from "./Login.module.css";
import { createClient } from "../../../utils/supabase/createClient";
import Valider from "./Form";


export default function LoginUser() {
    return (
        <div>   
            <div className={`${styles.rond} ${styles.rond1} ${styles.violet}`}></div>
            <div className={`${styles.rond} ${styles.rond2} ${styles.violet}`}></div>
            <div className={`${styles.rond} ${styles.rond3} ${styles.violet}`}></div>
            <div className={`${styles.rond} ${styles.rond4} ${styles.violet}`}></div>
            <div className={`${styles.rond} ${styles.rond5} ${styles.blur}`}></div>
            <div className={`${styles.rond} ${styles.rond6} ${styles.blur}`}></div>
            <Valider /> 
        </div>
    )
}