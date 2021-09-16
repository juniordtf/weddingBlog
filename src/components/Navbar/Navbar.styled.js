import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryLightGold};
  text-align: left;
  height: 64px;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid gray;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  p {
    font-size: 1rem;
    font-family: "Lucida Calligraphy";
    font-style: "italic";
    font-weight: normal;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;
  }
`;
