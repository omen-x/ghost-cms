import styled from 'styled-components';


export const LoginFormWrap = styled.form`
  background: #ffffff;
  max-width: 320px;
  margin: 100px auto 50px;
  border-radius: 4px;
  padding: 0 20px 20px;
  border: 1px solid;
  text-align: center;
  
  & > * {
    box-sizing: border-box;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input {
    display: inline-block;
    padding: 8px 15px;
    border: 1px solid;
    margin-bottom: 30px;
    width: 100%;
    max-width: 100%;
  }
  
  button {
    display: inline-block;
    padding: 8px 25px; 
  }
`;

export const LoginFormTitle = styled.h4`
  font-size: 22px;
  text-align: center;
  margin-bottom: 25px;
`;

export const FormError = styled.p`
  color: red;
`;
