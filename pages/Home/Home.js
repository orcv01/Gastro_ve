import "./Home.css";

import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="home">
<h1>Gastronomía Venezolana</h1>
<p>Nuestra Comida más representativa...</p>
<p>La gastronomía venezolana es una fusión de las cocinas indígena, española, africana y portuguesa. Es una cocina muy diversa, con platos que varían de región en región. Algunos de los platos más populares de la gastronomía venezolana incluyen:</p>
<p>Arepas: Las arepas son un plato hecho de harina de maíz. Se pueden rellenar con una variedad de ingredientes, como carne, queso, huevos, frijoles, pollo, verduras, etc.</p>
<p>Cachapa: La cachapa es un plato hecho de harina de maíz y queso. Se cocina en una plancha y se sirve con mantequilla y queso.</p>
<p>Sancocho: El sancocho es un caldo espeso hecho con carne, pollo, verduras y papas. Es un plato típico de las regiones andinas de Venezuela.</p>
</section>`;
};
