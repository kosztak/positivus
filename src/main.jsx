import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import Header from "./sections/header/Header";
import Main from "./sections/main/Main";
import Footer from "./sections/footer/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>,
);
