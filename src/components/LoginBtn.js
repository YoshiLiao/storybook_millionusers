import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  button {
    margin-right:20px;
  }
  div {
    margin-bottom:10px;
    padding: 10px;
    width:100%;
  }
  .type1, .type3 {
    background: rgb(243, 255, 253);
  }
  .type1 button {
    background: rgba(79, 213, 152, 0.18);
    font-size: 16px;
  }
  .type1 button.selected {
    color: rgb(255, 255, 255);
    background: linear-gradient(90deg, rgb(78, 212, 151) 18.84%, rgb(68, 168, 242) 124.75%)
  }
  .type1 button.default:hover {
    background: rgba(79, 213, 152, 0.4);
    transition-duration: 0.5s;
  }
`;

export default function LoginBtn({handleLogin, handleSignUp}) {
  return ( 
      <Container>
        <div className="type1">
          <button className="selected" onClick={handleLogin}>Log in</button>

          <button className="selected" onClick={handleSignUp}>Sign up</button>
        </div>
      </Container>
  );
}