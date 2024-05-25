import { redirect } from "next/navigation";
import { Input } from "@nextui-org/input";
import styles from "./Login.module.css"
import { createClient } from "@/src/utils/supabase/createClient";
import Link from "next/link";

export default function Valider() {
    async function connexion(formData: FormData) {
        "use server"

        const email_user = formData.get('email') as string;
        const password_user = formData.get('password') as string;

        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({email: email_user, password: password_user})

        console.log(email_user)

        if (error) {
            redirect('/login')
        }

        redirect('/Dekuple-app/accueil')
    };
    return (
        <form action={connexion} className={styles.loginCard}>

            <h2 className={styles.title}>Se connecter</h2>

            <Input type="email" name="email" placeholder="Email" required className={styles.input}/>

            <Input type="password" name="password" placeholder="Mot de passe" required className={styles.input}/>

            <button className={styles.button}>Se connecter</button>
        </form>
    )
}