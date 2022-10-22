import styles from "./Header.module.css";
import logoCar from "../../assets/img/logoCar.jpg"
import iconUser from "../../assets/img/user.svg"

export const Header = () => {
  return (
    <main className={styles.mainHeader}>
      <div className={styles.campoLogo}>
        <img src={logoCar} alt="logo do lava rápido"/>
      </div>

      <div className={styles.campoUser}>
        <img src={iconUser} alt="icon de usuário"/>
        <p>Olá Fulano</p>
      </div>
    </main>
  );
}