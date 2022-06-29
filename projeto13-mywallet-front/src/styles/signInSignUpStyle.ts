import styled from "styled-components";

export const SignUpSingInContainer = styled.main`
  min-width: 375px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

export const SignUpSignInForm = styled.form`
  display: flex;
  min-width: 326px;
  min-height: 188px;
  max-height: 330px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 36px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SignUpSignInInput = styled.input`
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
  margin-bottom: 13px;

  &::placeholder {
    color: #000000;
  }
`;

export const SignUpSignInButton = styled.button`
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

export const SignUpSignInSpan = styled.span`
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