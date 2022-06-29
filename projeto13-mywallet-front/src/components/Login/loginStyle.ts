import styled from "styled-components";

export const Container = styled.main`
  min-width: 375px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

export const Title = styled.h1`
  font-family: "Saira Stencil One", sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: #ffffff;
`;

export const Form = styled.form`
  display: flex;
  min-width: 326px;
  width: 100%;
  height: 188px;
  margin-top: 24px;
  margin-bottom: 36px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  height: 58px;
  background: #ffffff;
  padding-left: 15px;
  border-radius: 5px;
  font-family: "Raleway", serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #000000;

  &::placeholder {
    color: #000000;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  background: #a328d6;
  border-radius: 5px;
  font-family: "Raleway", serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  cursor: pointer;
  
  &:hover {
    filter: brightness(0.95);
  }
`;

export const Span = styled.span`
  font-family: "Raleway", serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
  
  a {
    font-family: "Raleway", serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    cursor: pointer;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
