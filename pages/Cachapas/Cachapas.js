import "./Cachapas.css";

import { cleanPage } from "../../utils/cleanPage";

import { cachapas } from "../../data/cachapas";

import { CachapaCard } from "../../components/CachapaCard/CachapaCard";

import { Divider } from "../../components/Divider/Divider";

export const Cachapas = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="cachapas">
<h2>Cachapas Venezolanas</h2>
${Divider()}
<div class="cachapas-container"></div>
</section>`;
  const container = document.querySelector(".cachapas-container");
  for (const cachapa of cachapas) {
    const figure = document.createElement("figure");
    figure.innerHTML = CachapaCard(cachapa);
    container.appendChild(figure);
  }
};
