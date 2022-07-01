import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 375px;
  width: 100%;
  padding: 25px 24px 24px 16px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SummaryBox = styled.div`
  min-width: 326px;
  width: 100%;
  min-height: 446px;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 22px;
  margin-bottom: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  font-family: "Raleway", serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
`;

export const InputsAndOutputsContainer = styled.div`
  min-width: 326px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 15px;
`;

export const InputsAndOutputsBox = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 155px;
  min-height: 114px;
  width: 100%;
  padding: 9px 8px;
  background: #a328d6;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    filter: brightness(0.95);
  }
`;

export const InputsAndOutputsText = styled.span`
  display: block;
  font-family: 'Raleway',serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #FFFFFF;
`;
