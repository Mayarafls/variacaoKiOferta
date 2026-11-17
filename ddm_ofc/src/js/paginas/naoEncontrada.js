function naoEncontrada(app) {
  app.innerHTML = `
    <section class="pagina">
      <div class="caixa vazio">
        <div class="emoji-erro">🐾</div>
        <h1>Ops! Página não encontrada.</h1>
        <p>Esse endereço não existe no nosso site.</p>
        <div class="acoes centralizado"><a class="botao" href="#inicio">Voltar para o início</a></div>
      </div>
    </section>`;
}
export default { url: "#nao-encontrada", label: "", icon: "", pagina: naoEncontrada };
