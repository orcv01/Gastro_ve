import "./Arepas.css";

import { cleanPage } from "../../utils/cleanPage";

import { arepas } from "../../data/arepas";

import { ArepaCard } from "../../components/ArepaCard/ArepaCard";

import { Divider } from "../../components/Divider/Divider";

export const Arepas = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="arepas">
<h2>Arepas Venezolanas</h2>
${Divider()}
<div class="arepas-container"></div>
</section>`;
  const container = document.querySelector(".arepas-container");
  for (const arepa of arepas) {
    const figure = document.createElement("figure");
    figure.innerHTML = ArepaCard(arepa);
    container.appendChild(figure);
  }
};
