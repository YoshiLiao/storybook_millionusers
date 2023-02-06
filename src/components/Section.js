import React from 'react';
import styled from '@emotion/styled';
import logo from "./images/img_logo.svg";

const Container = styled.section`
  width: 240px;
  height: 100vh; 
  background: linear-gradient(rgb(45, 187, 222) 5%, rgb(8, 203, 136) 30%);
  box-sizing: border-box;
 
  .logoBox {
    padding-top: 34px;
    height: 180px;
    box-sizing: border-box;
  }
  .logoBox img {
    display: block;
    margin: 0px auto;
    width: 160px;
  }
  .links {
    padding: 0px 20px;
    height: calc(100vh - 190px);
    overflow-y: auto;
  }
  h3 {
    margin: 15px 0px 4px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
  }
  .links a {
    display: block;
    padding-left: 20px;
    width: 100%;
    height: 30px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    line-height: 30px;
    box-sizing: border-box;
  }
  .links > div > div {
    margin: 4px 0px;
    border-radius: 6px;
    cursor: pointer;
  }
  .links .default:hover {
    transition-duration: 0.5s;
    background: rgba(255,255,255,0.15);
  }
  .links div.selected {
    background: rgba(255,255,255,0.52);
  }
  .links div div.selected a {
    color: rgb(19, 133, 112);
  }
`

export default function Section({type1,type2}) {
  return (
    <Container className="leftSide">
        <div className="logoBox">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <div>
            <h3>分類標題</h3>
              <>
                <div className={type1}>
                  <a className='view'>事業群名稱</a>
                </div>
                <div className={type2}>
                  <a className='view'>事業群名稱</a>
                </div>
              </>
          </div>
        </div>
    </Container>
  );
}