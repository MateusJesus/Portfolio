import styled from "styled-components";
import background1 from "@/assets/background1.svg";
import background2 from "@/assets/background2.svg";
import DataTechnogies from "@/data/DataTechnologies";
import ItemTec from "./ItemTec";

const TechnologiesStyled = styled.section`
  position: relative;
  background-color: var(--dest);
  margin: 0;

  .tecnologias {
    margin: auto;
    padding: 1em 0;
    font-family: var(--ff-tec);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
    display: flex;
    max-width: 1080px;
    flex-direction: column;
  }

  .tecnologias .title {
    color: var(--bg);
    font-weight: 400;
  }

  .lista {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }

  .tec_background1 {
    width: 100%;
    background-color: var(--dest);
    user-select: none;
  }

  .tec_background2 {
    width: 100%;
    user-select: none;
    background-color: var(--dest);
  }
`;

const TecBackground = styled.img`
  width: 100%;
  user-select: none;
  background-color: var(--dest);
`;

export default function Technologies() {
  return (
    <>
      <TechnologiesStyled>
      <TecBackground className="tec_background1" src={background1} />
        <div className="tecnologias">
          <h1 className="title">Minhas tecnologias</h1>
          <ul className="lista">
            {DataTechnogies.tec.map((item, index) => (
              <ItemTec key={index} technologies={item} />
            ))}
          </ul>
        </div>
      </TechnologiesStyled>
      <TecBackground className="tec_background2" src={background2} />
    </>
  );
}
