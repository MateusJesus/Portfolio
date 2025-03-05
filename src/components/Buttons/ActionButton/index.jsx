import styled from "styled-components";

const ActionButtonStyled = styled.button`
  padding: 0.5em 1em;
  background: none;
  font-size: 20;
  font-weight: 400;
  cursor: pointer;
  color: var(--dest);
  border: 1px solid var(--dest);
  border-radius: 10px;
  transition: box-shadow .3s ease-in-out, background .3s ease-in-out, color .2s ease-in-out;

  &:hover {
    color: var(--bg);
    background: var(--dest);
    box-shadow: 0 0 10px var(--destOP);
  }
`;

export default function ActionButton({ children }) {
  return <ActionButtonStyled>{children}</ActionButtonStyled>;
}
