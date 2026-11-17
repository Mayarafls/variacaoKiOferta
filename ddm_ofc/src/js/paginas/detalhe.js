import { animais, publicadores } from "../dadosMockados/animais.js";

function detalhe(app, params = new URLSearchParams()) {
  const id = Number(params.get("id"));
  const animal = animais.find(item => item.id === id);
  if (!animal) {
    app.innerHTML = `<section class="pagina"><div class="caixa vazio"><h1>Animal não encontrado</h1><a class="botao" href="#resultados">Voltar para resultados</a></div></section>`;
    return;
  }
  const pessoa = publicadores.find(pub => pub.id === animal.publicadorId);
  app.innerHTML = `
    <section class="pagina">
      <a href="#resultados" class="muted">← Voltar para os resultados</a>
      <div class="caixa">
        <div class="detalhe-emoji">${animal.emoji}</div>
        <h1>${animal.nome}</h1>
        <span class="tag">Disponível para adoção</span>
        <div class="detalhe-dados">
          <p><b>Espécie:</b> ${animal.especie}</p>
          <p><b>Porte:</b> ${animal.porte}</p>
          <p><b>Idade:</b> ${animal.idade}</p>
          <p><b>Local:</b> ${animal.bairro}, ${animal.cidade}</p>
          <p><b>Sobre:</b> ${animal.descricao}</p>
        </div>
      </div>
      <div class="caixa">
        <h2>Quem está divulgando?</h2>
        <p><b>${pessoa.nome}</b></p>
        <p class="muted">Bairro: ${pessoa.bairro}</p>
        <p class="muted">Entre em contato para combinar uma conversa e conhecer o animal.</p>
        <button id="interesse">Tenho interesse!</button>
        <p id="aviso-interesse" class="muted"></p>
      </div>
    </section>`;
  document.querySelector("#interesse").addEventListener("click", () => {
    document.querySelector("#aviso-interesse").textContent = "Legal! Este é apenas um projeto demonstrativo, então o contato não é enviado de verdade.";
  });
}
export default { url: "#detalhe", label: "", icon: "", pagina: detalhe };
