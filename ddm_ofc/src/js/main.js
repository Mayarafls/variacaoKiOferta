import { rotas } from "./rotas/rotas.js";
import { renderNavbar } from "./navbar/navbar.js";

const app = document.querySelector("#app");
renderNavbar(rotas);

function renderApp() {
  const endereco = window.location.hash || "#inicio";
  const partes = endereco.split("?");
  const caminho = partes[0];
  const parametros = new URLSearchParams(partes[1] || "");
  const rota = rotas.find(item => item.url === caminho);

  document.querySelectorAll(".menu-principal a").forEach(link => {
    link.classList.toggle("ativo", link.dataset.rota === caminho);
  });

  if (rota) rota.pagina(app, parametros);
  else rotas.find(item => item.url === "#nao-encontrada").pagina(app);
}
window.addEventListener("hashchange", renderApp);
renderApp();
