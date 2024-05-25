import styles from "./Login.module.css";
import { createClient } from "../../../utils/supabase/createClient";
import Valider from "./Form";


export default function LoginUser() {
    return (
        <div className={styles.pageLogin}>
            <Valider />
        </div>
    )
}