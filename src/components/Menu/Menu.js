import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import Engagement from "./assets/engagement.png";

const Menu = ({ open, mobile, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} mobile={mobile} aria-hidden={!isHidden} {...props}>
      <div>
        <img src={Engagement} alt="Engagement" />
        <h1>Raíssa & Djalma</h1>
        <h2>03.09.22</h2>
      </div>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">⌂ </span>
        Home
      </a>
      <a href="/nossaHistoria" tabIndex={tabIndex}>
        <span aria-hidden="true">👩‍❤️‍👨 </span>
        Nossa historia
      </a>
      <a href="/local" tabIndex={tabIndex}>
        <span aria-hidden="true">🎉 </span>
        Local
      </a>
      <a href="/ondeFicar" tabIndex={tabIndex}>
        <span aria-hidden="true">🛌 </span>
        Onde Ficar
      </a>
      <a href="/listaDePresentes" tabIndex={tabIndex}>
        <span aria-hidden="true">🎁 </span>
        Lista de Presentes
      </a>
      <a href="/mensagens" tabIndex={tabIndex}>
        <span aria-hidden="true">📩 </span>
        Recados
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  mobile: bool.isRequired,
};

export default Menu;
