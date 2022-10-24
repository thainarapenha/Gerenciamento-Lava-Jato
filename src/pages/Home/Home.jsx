import styles from "./Home.module.css"
import iconMenu from "../../assets/img/menu.svg"
import iconAdd from "../../assets/img/adicionar.svg"
import iconfile from "../../assets/img/dados.svg"
import { MascaraCPF } from "../../components/MascaraCPF/MascaraCPF"
import { MascaraPLACA } from "../../components/MascaraPLACA/MascaraPLACA"

import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.mainHome}>
      <section className={styles.cardPrincipal}>
        <div className={styles.acao}>
          <div className={styles.caixaTitulo}>
            <img src={iconAdd} />
            <h3>Meu espaço</h3>
          </div>

          <div>
            <button onClick={() => navigate("/servico")}><strong>Novo serviço</strong>
            </button>
            <button onClick={() => navigate("/cadastro")}><strong>Novo cliente</strong></button>
          </div>

        </div>

        <div className={styles.busca}>
          <div className={styles.caixaTitulo}>
            <img src={iconMenu} />
            <h3>Buscar</h3>
          </div>

          <div>
            <form>
              <div className={styles.camposPesquisa}>
                <MascaraCPF/>
                <button>Buscar CPF</button>
              </div>
              <div className={styles.camposPesquisa}>
                <MascaraPLACA/>
                <button>Buscar veículo</button>
              </div>
            </form>
          </div>
        </div>

        {/* lembrar de colocar uma div para retorno de pesquisa do banco */}
      </section>

      <section className={styles.relatorios}>
        <div className={styles.caixaTitulo}>
          <img src={iconfile} />
          <h3>Dashboard</h3>
        </div>

        <div className={styles.caixaDados}>
          <div className={styles.quantiServico}>
            <p>Quantidade de serviços do mês</p>
            <span>100</span>
          </div>
          <div className={styles.valorFaturado}>
            <p>Valor faturado no mês</p>
            <span>100</span>
          </div>
        </div>
      </section>
    </main>
  );
}