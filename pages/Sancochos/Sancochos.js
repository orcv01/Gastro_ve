import "./Sancochos.css";

import { cleanPage } from "../../utils/cleanPage";

import { sancochos } from "../../data/sancochos";

import { SancochoCard } from "../../components/SancochoCard/SancochoCard";

import { Divider } from "../../components/Divider/Divider";

export const Sancochos = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="sancochos">
<h2>Sancochos Venezolanos</h2>
${Divider()}
<div class="sancochos-container"></div>
</section>`;
  const container = document.querySelector(".sancochos-container");
  for (const sancocho of sancochos) {
    const figure = document.createElement("figure");
    figure.innerHTML = SancochoCard(sancocho);
    container.appendChild(figure);
  }
};
