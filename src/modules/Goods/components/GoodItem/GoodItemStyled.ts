import styled from 'styled-components';

export const GoodItemStyled = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
  }

  h4 {
    margin: 0;
    display: inline-block;
  }

  h5 {
    margin: 0;
    display: inline-block;
  }
`;
