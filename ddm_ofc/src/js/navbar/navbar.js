function renderNavbar(rotas) {
  const nav = document.querySelector("#navbar");
  nav.innerHTML = `<div class="menu-principal">${
    rotas.filter(rota => rota.label !== "").map(rota =>
      `<a href="${rota.url}" data-rota="${rota.url}">${rota.icon} ${rota.label}</a>`
    ).join("")
  }</div>`;
}
export { renderNavbar };
