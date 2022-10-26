import styles from "./Servicos.module.css";
import iconADD from "../../assets/img/iconADD.svg"
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Servicos = () => {
  const [data, setData] = useState([]);
  const [cpf, setCPF] = useState('');
  const [clientes, setClientes] = useState([]);

  const fetchData = async () => {
    const response = await api.get("/clientes");
    setData(response.data)
    console.log(response?.data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const consultarClientePorCPF = (e) => {
    e.preventDefault();
    const cliente = data.filter(cliente => cliente.cpf == cpf)
    setClientes(cliente);
    console.log(cliente);
  }

  return (
    <main className={styles.mainServicos}>
      <section className={styles.campoFormServico}>
        <div className={styles.caixaTitulo}>
          <img src={iconADD} />
          <h3>Criar novo serviço de atendimento</h3>
        </div>

        <form>
          <div className={styles.camposPesquisa}>
            <input
              onChange={(e) => setCPF(e.target.value)} />
            <button onClick={consultarClientePorCPF}>Buscar CPF</button>
          </div>
        </form>
      </section>

      <section className={styles.campoRetornoForm}>
        <div className={styles.campoHorario}>
          <label><strong>Início do Atendimento: </strong></label>
        </div>

        <div className={styles.formRetorno}>
          {clientes?.map((item, index) => {
            console.log(item.nome);
            return (
              <form key={index}>
                <div>
                  <label><strong>Nome Completo:</strong></label>
                  <span>{item.nome}</span>
                </div>

                <div className={styles.areaInfo}>
                  <div className={styles.cx1}>
                    <label><strong>Rua:</strong></label>
                    <span>{item.rua}</span>
                  </div>

                  <div className={styles.cx1}>
                    <label><strong>Número:</strong></label>
                    <span>{item.numero}</span>
                  </div>

                  <div className={styles.cx1}>
                    <label><strong>Bairro:</strong></label>
                    <span>{item.bairro}</span>
                  </div>
                </div>

                <div className={styles.areaInfo}>
                  <div className={styles.cx1}>
                    <label><strong>CEP:</strong></label>
                    <span>{item.cep}</span>
                  </div>

                  <div className={styles.cx1}>
                    <label><strong>Cidade:</strong></label>
                    <span>{item.cidade}</span>
                  </div>

                  <div className={styles.cx1}>
                    <label><strong>UF:</strong></label>
                    <span>{item.uf}</span>
                  </div>
                </div>

                <div className={styles.areaInfo}>
                  <div className={styles.cx1}>
                    <label><strong>Contato (WhatsApp):</strong></label>
                    <span>{item.contato}</span>
                  </div>

                  <div className={styles.cx1}>
                    <label><strong>E-mail:</strong></label>
                    <span>{item.email}</span>
                  </div>
                </div>

                <section className={styles.areaCarro}>
                  <div className={styles.cx1}>
                    <div>
                      <label><strong>Marca:</strong></label>
                      <span>{item.carros[0].marca}</span>
                    </div>

                    <div>
                      <label><strong>Modelo:</strong></label>
                      <span>{item.carros[0].modelo}</span>
                    </div>
                  </div>

                  <div className={styles.cx2}>
                    <div>
                      <label><strong>Placa:</strong></label>
                      <span>{item.carros[0].placa}</span>
                    </div>

                    <div>
                      <label><strong>Cor:</strong></label>
                      <span>{item.carros[0].cor}</span>
                    </div>
                  </div>
                </section>
              </form>
            );
          })}
        </div>

        <div>
          <fieldset >
            <legend>Selecione quais os serviços desejados:</legend>

            <div className={styles.areaCheck}>
              <div>
                <input type="checkbox" id="LavCompleto" name="scales" />
                <label for="LavCompleto">Lavagem completa</label>
              </div>

              <div>
                <input type="checkbox" id="LavSimples" name="horns" />
                <label for="LavSimples">Lavagem simples</label>
              </div>

              <div>
                <input type="checkbox" id="LavMotor" name="horns" />
                <label for="LavMotor">Lavagem de motor</label>
              </div>
            </div>
          </fieldset>
        </div>

        <div className={styles.Descricao}>
          <label>Adicione alguma observação para o serviço <span>(opcional)</span></label>
          <textarea placeholder="  Ex.: Buscar e deixar em domicílio as 14h."></textarea>
        </div>

        <div className={styles.areaPreco}>
          <label><strong>Valor total: </strong></label>
          <label>R$ <span>00,00</span></label>
        </div>
      </section>

      <div className={styles.areaBotao} type="submit">
        <button><strong>Finalizar atendimento</strong></button>
      </div>
    </main>
  );
}