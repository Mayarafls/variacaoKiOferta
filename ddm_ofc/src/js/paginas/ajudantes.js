import { animais, publicadores } from "../dadosMockados/animais.js";

function cards(lista) {
  if (lista.length === 0) return `<div class="caixa vazio">Não encontramos nenhum animal com essa busca. Tente outro nome ou filtro. 🐾</div>`;
  return `<div class="lista-cards">${lista.map(animal => {
    const pessoa = publicadores.find(pub => pub.id === animal.publicadorId);
    return `<article class="card-animal">
      <div class="foto-animal">${animal.emoji}</div>
      <div class="info-animal">
        <h3>${animal.nome}</h3>
        <p class="muted">${animal.especie} • ${animal.porte} • ${animal.idade}</p>
        <p class="muted">📍 ${animal.cidade}</p>
        <span class="tag">Para adoção</span>
        <div class="acoes"><a class="botao" href="#detalhe?id=${animal.id}">Ver detalhes</a></div>
      </div>
    </article>`;
  }).join("")}</div>`;
}
export { cards };
