import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: top;
  background: ${({ theme }) => theme.primaryLightGold};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-right: 1px solid gray;

  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    padding: 1rem;
    font-family: "Lucida Calligraphy";
    font-style: "italic";
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    border-bottom: 1px solid gray;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  h1 {
    font-size: 1rem;
    font-family: "Lucida Calligraphy";
    font-style: "italic";
    font-weight: normal;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;
  }

  h2 {
    font-size: 1rem;
    font-family: "Andale Mono";
    font-style: "italic";
    font-weight: normal;
    letter-spacing: 0.2rem;
    margin-top: -5px;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
  }

  div {
    background: ${({ theme }) => theme.secondaryLight};
  }
`;
