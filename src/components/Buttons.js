import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
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

  .type2 {
    background: #FFFFFF;
  }
  .type2 button {
    background: rgba(51, 51, 51, 0.12);
    border-radius: 4px;
    color: rgba(51, 51, 51, 0.8);
    font-weight: 600;
  }
  .type2 button.default:hover {
    background: rgba(51, 51, 51, 0.2);
    transition-duration: 0.5s;
  }
  .type2 button.selected {
    background: rgba(79, 213, 152, 0.4);
  }
  .type3 button {
    padding: 0px 20px;
    height: 26px;
    background: rgba(79, 213, 152, 0.18);
    border-radius: 40px;
    font-size: 12px;
    font-weight: 500;
    color: #29AF72;
    cursor: pointer;
    transition-duration: 0.5s;
  }
  .type3 button:hover {
    background: rgba(79, 213, 152, 0.4);
  }
`;

export default function Buttons({type, label}) {
  return ( 
      <Container>
        <div className="type1">
          <button className={type}>{label}</button>
        </div>
        <div className="type2">
          <button className={type}>{label}</button>
        </div>
        <div className="type3">
          <button className={type}>{label}</button>
        </div>
      </Container>
  );
}