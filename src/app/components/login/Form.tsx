import { redirect } from "next/navigation";
import { Input } from "@nextui-org/input";
import styles from "./Login.module.css"
import { createClient } from "@/src/utils/supabase/createClient";

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
            <form action={connexion} className={styles.login}>
                <h2>Connexion</h2>
                <div className={styles.input}>
                    <label>LOGIN :</label>
                    <Input type="email" name="email" required/>
                </div>
                <div className={styles.input}>
                    <label>Mot de passe :</label>
                    <Input type="password" name="password" required/>
                </div>

                <button>Valider</button>
        </form>
    )
}