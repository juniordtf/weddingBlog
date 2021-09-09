import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
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
};

export default Menu;
