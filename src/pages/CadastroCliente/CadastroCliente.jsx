import iconCar from "../../assets/img/car.svg"
import styles from "./CadastroCliente.module.css";
import iconUserInsert from "../../assets/img/userInsert.svg"
import { MascaraCPF } from "../../components/MascaraCPF/MascaraCPF";
// import { MascaraCEP } from "../../components/MascaraCEP/MascaraCEP";
import { MascaraPLACA } from "../../components/MascaraPLACA/MascaraPLACA"
import { MascaraCelular } from "../../components/MascaraCelular/MascaraCelular";
import { useState } from "react";

export const CadastroCliente = () => {
  const [dados, setDados] = useState({
    cep: "",
    endereco: { localidade: "", uf: "", logradouro: "" },
  });

  async function buscaCep(event) {
    console.log(event.target.value);
    try {
      const res = await fetch(
        `https://viacep.com.br/ws/${event.target.value}/json/`
      );

      const data = await res.json();
      const { localidade, uf, logradouro, bairro } = data;

      if (data.erro) {
        toastAlertErro("CEP informado não foi encontrado");
        return;
      }

      setDados({
        ...dados,
        endereco: {
          localidade,
          uf,
          logradouro,
          bairro,
        },
      });
    } catch (erro) {
      toastAlertErro("Insira um CEP válido");
    }
  }

  function verificaInputsNumericos(event) {
    const numeros = event.target.value.replace(/[^\d\s.-]/gi, "");

    if (event.target.id === "cep") {
      setDados({ ...dados, cep: numeros });
    }
  }

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
              <input
                placeholder="CEP"
                type="text"
                id="cep"
                onBlur={buscaCep}
                required
                value={dados.cep}
                onChange={verificaInputsNumericos} />
            </div>
          </div>

          <div className={styles.caixaDOIS}>
            <label>Rua:</label>
            <input 
              placeholder="Rua"
              type="text"
              id="rua"
              required
              readOnly
              value={dados.endereco.logradouro}/>

            <label>Bairro:</label>
            <input
              placeholder="Bairro"
              type="text"
              id="bairro"
              required
              readOnly
              value={dados.endereco.bairro} />
          </div>

          <div className={styles.caixaTRES}>
            <label>Número:</label>
            <input name="name" placeholder="Número" />
            <label>Cidade:</label>
            <input placeholder="Cidade"
                type="text"
                id="cidade"
                required
                readOnly
                value={dados.endereco.localidade}/>
                
            <label>UF:</label>
            <input placeholder="UF"
                type="text"
                id="uf"
                required
                readOnly
                value={dados.endereco.uf}/>
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

      <div className={styles.areaBotao} type="submit">
        <button><strong>Cadastrar cliente</strong></button>
      </div>
    </main>
  );
}