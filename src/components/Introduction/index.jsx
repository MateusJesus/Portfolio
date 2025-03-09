import styled from "styled-components";

const HomePageStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh;
  img {
    height: 30em;
  }
`;

export default function Introduction({ children }) {
  return <HomePageStyled className="layout">{children}</HomePageStyled>;
}
