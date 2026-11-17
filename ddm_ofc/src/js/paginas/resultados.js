import { animais } from "../dadosMockados/animais.js";
import { cards } from "./ajudantes.js";

function resultados(app, params = new URLSearchParams()) {
  const termoInicial = params.get("q") || "";
  const categoriaInicial = params.get("categoria") || "";
  app.innerHTML = `
    <section class="pagina">
      <div><h1>Animais disponíveis</h1><p class="muted">Use a busca para encontrar um companheiro.</p></div>
      <div class="caixa barra-filtros">
        <input id="termo" type="search" placeholder="Nome, espécie ou cidade" value="${termoInicial}">
        <select id="categoria">
          <option value="">Todas as espécies</option>
          <option value="Cachorro">Cachorros</option>
          <option value="Gato">Gatos</option>
          <option value="Coelho">Coelhos</option>
        </select>
        <button id="filtrar">Pesquisar</button>
      </div>
      <p id="quantidade" class="muted"></p>
      <div id="lista-resultados"></div>
    </section>`;
  const select = document.querySelector("#categoria");
  select.value = categoriaInicial;
  function atualizar() {
    const termo = document.querySelector("#termo").value.toLowerCase().trim();
    const categoria = select.value;
    const filtrados = animais.filter(animal => {
      const texto = `${animal.nome} ${animal.especie} ${animal.cidade} ${animal.bairro}`.toLowerCase();
      return texto.includes(termo) && (!categoria || animal.especie === categoria);
    });
    document.querySelector("#quantidade").textContent = `${filtrados.length} animal(is) encontrado(s).`;
    document.querySelector("#lista-resultados").innerHTML = cards(filtrados);
  }
  document.querySelector("#filtrar").addEventListener("click", atualizar);
  document.querySelector("#termo").addEventListener("keydown", e => { if (e.key === "Enter") atualizar(); });
  select.addEventListener("change", atualizar);
  atualizar();
}
export default { url: "#resultados", label: "Resultados", icon: "🔎", pagina: resultados };
