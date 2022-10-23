import iconCar from "../../assets/img/car.svg"
import styles from "./CadastroCliente.module.css";
import iconUserInsert from "../../assets/img/userInsert.svg"
import { MascaraCPF } from "../../components/MascaraCPF/MascaraCPF";
import { MascaraCEP } from "../../components/MascaraCEP/MascaraCEP";
import { MascaraPLACA } from "../../components/MascaraPLACA/MascaraPLACA"
import { MascaraCelular } from "../../components/MascaraCelular/MascaraCelular";

export const CadastroCliente = () => {
  return (
    <main className={styles.mainCadastroCliente}>
      <section className={styles.campoForm}>
        <form>
          <div className={styles.caixaTitulo}>
            <img src={iconUserInsert} />
            <h3>Cadastrar informações do cliente</h3>
          </div>

          <div className={styles.caixaZERO}>
            <label>Nome Completo:</label>
            <input name="name" placeholder="Digite nome completo do cliente" />
          </div>

          <div className={styles.caixaUM}>
            <div id={styles.campoCPF}>
              <label>CPF:</label>
              <MascaraCPF />
            </div>

            <div id={styles.campoCEP}>
              <label>CEP:</label>
              <MascaraCEP />
            </div>
          </div>

          <div className={styles.caixaDOIS}>
            <label>Rua:</label>
            <input name="name" placeholder="Rua" />
            <label>Bairro:</label>
            <input name="name" placeholder="Bairro" />
          </div>

          <div className={styles.caixaTRES}>
            <label>Número:</label>
            <input name="name" placeholder="Número" />
            <label>Cidade:</label>
            <input name="name" placeholder="Cidade" />
            <label>UF:</label>
            <input name="name" placeholder="UF" />
          </div>

          <div className={styles.caixaQUATRO}>
            <div id={styles.campoWPP}>
              <label>Contato (WhatsApp):</label>
              <MascaraCelular />
            </div>
            <div id={styles.campoEMAIL}>
              <label>E-mail:</label>
              <input name="name" placeholder="Ex.: joao@exemplo.com" />
            </div>
          </div>

          <div className={styles.caixaTitulo}>
            <img src={iconCar} />
            <h3>Cadastrar informações do veículo</h3>
          </div>

          <div className={styles.caixaCINCO}>
            <label>Marca:</label>
            <input name="name" placeholder="Digite a marca do veículo" />
            <label>Modelo:</label>
            <input name="name" placeholder="Digite o modelo do veículo" />
          </div>

          <div className={styles.caixaSEIS}>
            <label>Placa:</label>
            <MascaraPLACA />
            <label>Cor:</label>
            <input name="name" placeholder="Selecione a cor do veículo" />
          </div>
        </form>
      </section>

      <div className={styles.areaBotao}>
        <button><strong>Cadastrar cliente</strong></button>
      </div>
    </main>
  );
}