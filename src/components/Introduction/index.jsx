import styled from "styled-components";

const HomePageStyled = styled.section`
  img {
    min-height: 100%;
    max-height: 30em;
    max-width: 100%;
    max-width: 100%;
  }
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`;

export default function Introduction({ children }) {
  return <HomePageStyled className="layout">{children}</HomePageStyled>;
}
