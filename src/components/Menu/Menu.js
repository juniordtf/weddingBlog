import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { NavLink } from "react-router-dom";
import Monograma from "./assets/MonogramaEFlores.png";

const Menu = ({ open, mobile, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} mobile={mobile} aria-hidden={!isHidden} {...props}>
      <div>
        <img src={Monograma} alt="Monograma" width="232" height="104" />
        <h1>Raíssa & Djalma</h1>
        <h2>03.09.22</h2>
      </div>
      <NavLink to="/" tabIndex={tabIndex}>
        <span aria-hidden="true">⌂ </span>
        Home
      </NavLink>
      <NavLink to="/nossaHistoria" tabIndex={tabIndex}>
        <span aria-hidden="true">👩‍❤️‍👨 </span>
        Nossa historia
      </NavLink>
      <NavLink to="/local" tabIndex={tabIndex}>
        <span aria-hidden="true">🎉 </span>
        Local
      </NavLink>
      <NavLink to="/ondeFicar" tabIndex={tabIndex}>
        <span aria-hidden="true">🛌 </span>
        Onde Ficar
      </NavLink>
      <NavLink to="/listaDePresentes" tabIndex={tabIndex}>
        <span aria-hidden="true">🎁 </span>
        Lista de Presentes
      </NavLink>
      <NavLink to="/mensagens" tabIndex={tabIndex}>
        <span aria-hidden="true">📩 </span>
        Recados
      </NavLink>
      <NavLink to="/rsvp" tabIndex={tabIndex}>
        <span aria-hidden="true">✔️ </span>
        Confirme sua presença
      </NavLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  mobile: bool.isRequired,
};

export default Menu;
