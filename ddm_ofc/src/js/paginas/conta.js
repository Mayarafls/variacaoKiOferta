import { animais, usuarios } from "../dadosMockados/animais.js";
import { cards } from "./ajudantes.js";

function conta(app) {
  const usuario = usuarios.find(item => item.id === 1);
  const meus = animais.filter(animal => animal.publicadorId === usuario.id);
  app.innerHTML = `
    <section class="pagina">
      <h1>Minha conta</h1>
      <div class="caixa perfil">
        <div class="avatar">👤</div>
        <div><h2>${usuario.nome}</h2><p class="muted">${usuario.email}</p><p class="muted">Perfil demonstrativo (sem login real)</p></div>
      </div>
      <div><h2>Animais que publiquei</h2><p class="muted">${meus.length} publicação(ões)</p>${cards(meus)}</div>
    </section>`;
}
export default { url: "#conta", label: "Minha conta", icon: "👤", pagina: conta };
