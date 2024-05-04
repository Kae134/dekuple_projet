import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginForm = () => {
const [login, setLogin] = useState('');
const [password, setPassword] = useState('');

const formulaire = (e) => {
    e.preventDefault();
};

return (
    <form className={styles.form} onSubmit={formulaire}>
        <h1>Connexion</h1>
        <div id="connexion" className={styles.connexion}>
        <label htmlFor="login">Login :</label>
        <input
            type="text"
            id="login"
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            className={styles.input}
        />
        </div>
        <div id="mot_de_passe" className={styles.mot_de_passe}>
        <label htmlFor="mdp">Mot de Passe :</label>
        <input
            type="password"
            id="mdp"
            name="mdp"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
        />
        </div>
        <button type="submit" id="valider" className={styles.button}>Valider</button>
    </form>
    );
};

export default LoginForm;