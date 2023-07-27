import "./style.css";

import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";

import { Arepas } from "./pages/Arepas/Arepas";

import { Cachapas } from "./pages/Cachapas/Cachapas";

import { Sancochos } from "./pages/Sancochos/Sancochos";

import { Divider } from "./components/Divider/Divider";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();
linkPage("#homelink", Home);
linkPage("#arepaslink", Arepas);
linkPage("#cachapaslink", Cachapas);
linkPage("#sancochoslink", Sancochos);
Home();
changeTheme();
footer.insertAdjacentHTML("beforebegin", Divider());
