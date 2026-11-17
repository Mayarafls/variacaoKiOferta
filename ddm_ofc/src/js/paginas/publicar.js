import { animais, publicadores } from "../dadosMockados/animais.js";

function publicar(app) {
  app.innerHTML = `
    <section class="pagina">
      <div><h1>Divulgar um animal</h1><p class="muted">Preencha os dados para colocar um bichinho na lista.</p></div>
      <form class="caixa formulario" id="form-publicar">
        <label for="nome">Nome do animal</label><input id="nome" required maxlength="35" placeholder="Ex.: Floquinho">
        <label for="especie">Espécie</label>
        <select id="especie" required><option value="">Escolha</option><option>Cachorro</option><option>Gato</option><option>Coelho</option></select>
        <label for="porte">Porte</label>
        <select id="porte" required><option value="">Escolha</option><option>Pequeno</option><option>Médio</option><option>Grande</option></select>
        <label for="idade">Idade</label><input id="idade" required placeholder="Ex.: 1 ano">
        <label for="cidade">Cidade</label><input id="cidade" required placeholder="Sua cidade">
        <label for="bairro">Bairro</label><input id="bairro" required placeholder="Seu bairro">
        <label for="descricao">Descrição</label><textarea id="descricao" rows="3" required placeholder="Conte um pouco sobre o animal"></textarea>
        <label for="publicador">Quem está publicando?</label>
        <select id="publicador" required>${publicadores.map(p => `<option value="${p.id}">${p.nome}</option>`).join("")}</select>
        <button type="submit">Publicar animal</button>
        <p id="retorno" class="muted"></p>
      </form>
    </section>`;
  document.querySelector("#form-publicar").addEventListener("submit", event => {
    event.preventDefault();
    const nome = document.querySelector("#nome").value.trim();
    const repetido = animais.find(item => item.nome.toLowerCase() === nome.toLowerCase());
    const retorno = document.querySelector("#retorno");
    if (repetido) {
      retorno.textContent = "Já existe um animal com esse nome na lista. Confira antes de publicar.";
      return;
    }
    const novo = {
      id: Math.max(...animais.map(item => item.id)) + 1,
      nome, especie: document.querySelector("#especie").value,
      porte: document.querySelector("#porte").value,
      idade: document.querySelector("#idade").value,
      cidade: document.querySelector("#cidade").value,
      bairro: document.querySelector("#bairro").value,
      descricao: document.querySelector("#descricao").value,
      emoji: document.querySelector("#especie").value === "Gato" ? "🐱" : document.querySelector("#especie").value === "Coelho" ? "🐰" : "🐶",
      publicadorId: Number(document.querySelector("#publicador").value)
    };
    animais.push(novo);
    retorno.textContent = "Animal publicado com sucesso! (Os dados são temporários e somem ao atualizar a página.)";
    event.target.reset();
  });
}
export default { url: "#publicar", label: "Publicar", icon: "➕", pagina: publicar };
