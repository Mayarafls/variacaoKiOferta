function inicio(app) {
  app.innerHTML = `
    <section class="pagina">
      <div class="chamada">
        <div class="emoji">🐾</div>
        <h1>Encontre um novo melhor amigo!</h1>
        <p>Veja animais que estão esperando por uma família cheia de carinho.</p>
      </div>
      <div class="caixa busca-grande">
        <h2>Procurar um animal</h2>
        <input id="busca-inicio" type="search" placeholder="Digite nome, espécie ou cidade...">
        <button id="buscar-inicio">Buscar animais</button>
      </div>
      <div>
        <h2>Escolha por categoria</h2>
        <div class="categorias">
          <button data-categoria="Cachorro">🐶 Cachorros</button>
          <button data-categoria="Gato">🐱 Gatos</button>
          <button data-categoria="Coelho">🐰 Coelhos</button>
          <button data-categoria="">Todos</button>
        </div>
      </div>
      <div class="caixa">
        <h2>Como funciona?</h2>
        <p>1. Procure um bichinho que combine com você.</p>
        <p>2. Veja as informações e conheça quem publicou.</p>
        <p>3. Entre em contato com o responsável para conversar sobre a adoção.</p>
      </div>
    </section>`;
  document.querySelector("#buscar-inicio").addEventListener("click", () => {
    const termo = document.querySelector("#busca-inicio").value.trim();
    location.hash = `#resultados?q=${encodeURIComponent(termo)}`;
  });
  document.querySelector("#busca-inicio").addEventListener("keydown", e => {
    if (e.key === "Enter") document.querySelector("#buscar-inicio").click();
  });
  document.querySelectorAll("[data-categoria]").forEach(botao => {
    botao.addEventListener("click", () => location.hash = `#resultados?categoria=${encodeURIComponent(botao.dataset.categoria)}`);
  });
}
export default { url: "#inicio", label: "Início", icon: "🏠", pagina: inicio };
