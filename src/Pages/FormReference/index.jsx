import "./style.css";
const FormReference = () => {
  return (
    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeuR5hlCjWw0XT5oqxoNzDsHrTiy8nVUHAgyTMXxrsZ3ETujQ/formResponse">
      <div id="pg00">
        <h1>
          Que bom que você estará com a gente nessa. Já marque o dia 16 de Junho
          no seu calendário e preencha esse formulário digital!
        </h1>
        <button>
          <a href="#pg01">Vamos nessa</a>
        </button>
      </div>
      <div id="pg01">
        <h1>
          Você pode nos dizer como se chama?
        </h1>
        <div className="name">
          <input
            type="text"
            name="entry.1891826285"
            placeholder="Nome"
            required
          />
          <input
            type="text"
            name="entry.503426280"
            placeholder="Sobrenome"
            required
          />
        </div>

        <button>
          <a href="#pg02">Próximo</a>
        </button>
      </div>
      <div id="pg02">
        <h1>
          Que bom te conhecer!! Mas agora me diz, como você se define segundo as
          opçoes abaixo:
        </h1>
        <select name="entry.1359085191" required>
          <option value="Evangélico" selected>
            Evangélico
          </option>
          <option value="Afastado">Afastado</option>
          <option value="Não evangélico">Não evangélico</option>
        </select>
        <input type="text" name="entry.1115605065" placeholder="Igreja" />
        <button>
          <a href="#pg03">Próximo</a>
        </button>
      </div>
      <div id="pg03">
        <h1>Quantos anos de idade você tem?</h1>
        <input
          type="number"
          name="entry.2116132227"
          placeholder="Idade"
          required
        />
        <button>
          <a href="#pg04">Próximo</a>
        </button>
      </div>
      <div id="pg04">
        <h1>Em quais horários você estara com a gente?</h1>
        <div className="time">
          <label>
            <input
              type="checkbox"
              value="10 horas"
              name="entry.136916136"
              id="checkbox 10"
            />
            <span>10 horas</span>
          </label>

          <label>
            <input
              type="checkbox"
              value="15 horas"
              name="entry.136916136"
              id="checkbox 15"
            />
            <span>15 horas</span>
          </label>

          <label>
            <input
              type="checkbox"
              value="19 horas"
              name="entry.136916136"
              id="checkbox 19"
            />
            <span>19 horas</span>
          </label>
        </div>
        <button>
          <a href="#pg05">Próximo</a>
        </button>
      </div>
      <div id="pg05">
        <div className="title">
          <h1>Quer receber emails e mensagens sobre o evento?</h1>
          <span>!Esses campos não são obrigatorios!</span>
        </div>
        <div className="contact">
          <input
            type="number"
            name="entry.1158777911"
            placeholder="DDD + Seu Numero"
          />
          <input type="email" name="entry.2093336467" placeholder="Email" />
        </div>
        <button type="submit">Finalizar</button>
      </div>
    </form>
  );
};
export default FormReference;
