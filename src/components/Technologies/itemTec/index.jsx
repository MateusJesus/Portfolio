import styled from "styled-components";

const ItemTecStyled = styled.li`
  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    height: 6em;
    width: 5em;
    margin: 1em 1em;
    border-radius: 6px;
    background-color: var(--white);
    color: var(--bg-tec);
    font-weight: 400;
  }

  .iconitem {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .iconitem img {
    height: 3em;
  }
`;

export default function ItemTec({ technologies }) {
  const imageUrl = new URL(technologies.image, import.meta.url).href
  console.log(imageUrl);
  
  return (
    <ItemTecStyled>
      <li className="item">
        <div className="iconitem">
          <img src={imageUrl} alt={technologies.alt} />
        </div>
        <div>
          <h3 className="text">{technologies.name}</h3>
        </div>
      </li>
    </ItemTecStyled>
  );
}
