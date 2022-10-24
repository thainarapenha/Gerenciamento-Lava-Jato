import styles from "./Servicos.module.css";
import { MascaraCPF } from "../../components/MascaraCPF/MascaraCPF"
import iconADD from "../../assets/img/iconADD.svg"

export const Servicos = () => {
  // const date = new Date().toLocaleString();

  return (
    <main className={styles.mainServicos}>
      <section className={styles.campoFormServico}>
        <div className={styles.caixaTitulo}>
          <img src={iconADD} />
          <h3>Criar novo serviço de atendimento</h3>
        </div>

        <form>
          <div className={styles.camposPesquisa}>
            <MascaraCPF />
            <button>Buscar CPF</button>
          </div>
        </form>
      </section>

      <section className={styles.campoRetornoForm}>
        {/* area de retorno da api + add serviço */}

        <form>
          <div>
            <label><strong>Nome Completo:</strong></label>
            <span></span>
          </div>

          <div>
            <div>
              <label><strong>CEP:</strong></label>
              <span
                // placeholder="CEP"
                type="text"
                id="cep"
                // onBlur={buscaCep}
                required
              // value={dados.cep}
              ></span>
            </div>
          </div>

          <div>
            <label><strong>Rua:</strong></label>
            <span
              // placeholder="Rua"
              type="text"
              id="rua"
              required
              readOnly
            // value={dados.endereco.logradouro}
            ></span>
          </div>
          
          <div>
            <label><strong>Bairro:</strong></label>
            <span
              // placeholder="Bairro"
              type="text"
              id="bairro"
              required
              readOnly
            // value={dados.endereco.bairro}
            ></span>
          </div>

          <div>
            <label><strong>Número:</strong></label>
            <span></span>
          </div>

          <div>
            <label><strong>Cidade:</strong></label>
            <span
              // placeholder="Cidade"
              type="text"
              id="cidade"
              required
              readOnly
            // value={dados.endereco.localidade} 
            ></span>
          </div>

          <div>
            <label><strong>UF:</strong></label>
            <span
              // placeholder="UF"
              type="text"
              id="uf"
              required
              readOnly
            // value={dados.endereco.uf}
            ></span>
          </div>

          <div>
            <div>
              <label><strong>Contato (WhatsApp):</strong></label>
              <span></span>
            </div>

            <div>
              <label><strong>E-mail:</strong></label>
              <span></span>
            </div>
          </div>

          <div>
            <label><strong>Marca:</strong></label>
            <span></span>
          </div>

          <div>
            <label><strong>Placa:</strong></label>
            <span></span>
          </div>

          <div>
            <label><strong>Cor:</strong></label>
            <span></span>
          </div>
        </form>




        <fieldset>
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