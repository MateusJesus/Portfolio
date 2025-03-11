import styled from "styled-components";

const NotFoundStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh;
  img {
    height: 30em;
  }
`;

export default function NotFound() {
  return (
    <NotFoundStyled className="layout">
      <h1 className="title">
        Pagina <strong className="dest">não encontrada :(</strong>
      </h1>
    </NotFoundStyled>
  );
}
