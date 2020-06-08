import Styled from "styled-components";

const MainContent = Styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  @media (max-width: 600px) {
    margin: 1rem auto;
  }
`;

export default MainContent;
