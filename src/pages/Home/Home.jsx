import styles from "./Home.module.css";

export const Home = () => {
  return (
    <main className={styles.mainHome}>
      <section className={styles.cardPrincipal}>
        <div className={styles.acao}>
          <div>
            <h3>Meu espaço</h3>
          </div>

          <div>
            <button><strong>Novo serviço</strong></button>
            <button><strong>Novo cliente</strong></button>
          </div>

        </div>

        <div className={styles.busca}>
          <div>
            <h3>Buscar</h3>
          </div>
          <div>
            <form>
              <div className={styles.camposPesquisa}>
                <input placeholder="ex.: 000.000.000-00" />
                <button>Buscar CPF</button>
              </div>
              <div className={styles.camposPesquisa}>
                <input placeholder="Digite o placa do veículo do cliente" />
                <button>Buscar veículo</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.relatorios}>
        <div>
          <h3>Dashboard</h3>
        </div>

        <div className={styles.caixaDados}>
          <div className={styles.quantiServico}>
            <p>Quantidade de serviços do mês</p>
            <p>100</p>
          </div>
          <div className={styles.valorFaturado}>
            <p>valor faturado no mês</p>
            <p>100</p>
          </div>
        </div>
      </section>
    </main>
  );
}