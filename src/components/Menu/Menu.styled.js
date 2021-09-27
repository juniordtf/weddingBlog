import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: top;
  position: ${({ mobile }) => (mobile ? "absolute" : "relative")};
  background: ${({ theme }) => theme.primaryLightGold};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: ${({ open }) => (open ? "250px" : "0px")};
  height: 100%;
  visibility: ${({ open }) => (open ? "visible" : "collapse")};
  top: 0;
  left: 0;
  border-right: 1px solid gray;
  z-index: 200;
  overflow-y: auto;

  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }

  a {
    font-size: 0.8rem;
    padding: 0.7rem;
    font-family: "Lucida Calligraphy";
    font-style: "italic";
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    border-bottom: 1px solid gray;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.9rem;
      text-align: left;
      padding: 5%;
    }

    &:hover {
      background-color: ${({ theme }) => theme.secondaryGold};
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
    font-size: 0.9rem;
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
    margin-top: 40px;
  }

  div {
    background: ${({ theme }) => theme.secondaryLight};
  }
`;
