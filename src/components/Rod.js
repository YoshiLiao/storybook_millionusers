import React from 'react';
import styled from '@emotion/styled';
import layer_a from './images/ic_layer_a.svg';
import layer_b from './images/ic_layer_b.svg';
import layer_c from './images/ic_layer_c.svg';
import layer_d from './images/ic_layer_d.svg';
import layer_e from './images/ic_layer_e.svg';
import arrow_right from './images/ic_arrow_right.svg';

const Container = styled.div`
  display: flex;
  width: 1200px;
  height: 200px;
  background: rgba(74, 180, 144, 0.04);
  border: 3px solid rgb(152, 222, 197);
  box-sizing: border-box;

  .c1 {
    width: 280px;
    font-size: 24px;
    text-align: center;
    line-height: 200px;
    font-weight: 500;
    color: rgba(51, 51, 51, 0.8);
    height: 100%;
    border-right: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
  }
  .c2 {
    position: relative;
    width: 920px;
    height: 100%;
    box-sizing: border-box;
  }

  .rod {
    display:flex;
    justify-content:space-between;
    postion:relative;
    padding:50px 30px 0px;
    box-sizing:border-box;
  }
  .disabled {
    opacity: 0.1;
  }

  .outline {
      position:absolute;
      top:0;
      left:0;
      padding:25px 18px 0px 20px;
      width:100%;
      box-sizing:border-box;
  }
  .outline1, .outline2 {
      float:left;
      position:relative;
      border-radius: 8px;
      box-sizing:border-box;
  }
  .outline1 div, .outline2 div {
      display:flex;
      justify-content:center;
      width:100%;
  }
  .outline h4 {
      position:absolute;
      top:-26px;
      display:inline-block;
      margin:0 auto;
      padding:10px;
      background:#F8FCFA;
      text-align:center;
  }
  .outline1 {
      margin-right:20px;
      width:338px;
      height:166px;
      border: 2.5px solid rgba(51, 51, 51, 0.2);
  }  
  .outline2 {
      width:518px;
      height:166px;
      border: 2.5px solid rgba(41, 153, 190, 0.5);
  }  
  .outline1 h4 {
      color: rgba(51, 51, 51, 0.5);
  }
  .outline2 h4 {
      color: #2999BE;
  }
  .level {
      position: relative;
      width:140px;
      border-radius: 12px;
      box-sizing:border-box;
  }
  .level h4 {
      margin: 0;
      color: #5FC09F;
      font-weight: 700;
      font-size: 30px;
      text-align:center;
  }
  .l-d h4, .l-e h4 {
      color: rgba(51, 51, 51, 0.2);
  }

  .level h4.hidden{
      visibility:hidden;
  }

  .level div {
      display:flex;
  }
  .level div img {
      position: relative;
      top:-6px;
      width: 50px;
  }
  .level p {
      margin-top:0px;
      font-weight: 700;
      font-size: 18px;   
      color: rgba(51, 51, 51, 0.8);
  }
  .hidden {
      opacity:0.1;
  }
  .arrow_box {
      position:absolute;
      top:98px;
      left:178px;
  }
  .arrow_box img {
      margin-right:154px;
      width:25px;
  }
  .arrow_box img:last-of-type {
      margin-right:0px;
  }
  .l-a {
    background: rgba(58, 210, 159, 0.4);
    border: 4px solid rgba(74, 180, 144, 0.8);
  }
  .l-b {
    background: rgba(58, 210, 159, 0.26);
    border: 4px solid rgba(74, 180, 144, 0.8);
  }
  .l-c {
    background: rgba(58, 210, 159, 0.12);
    border: 4px solid rgba(74, 180, 144, 0.8);
  }
  .l-d,.l-e {
    background: rgba(51, 51, 51, 0.04);
    border: 4px solid rgba(51, 51, 51, 0.2);
  }
`;

export default function Rod({status}) {
  return ( 
      <Container className="tr">
          <div className="c1">關係層級變化</div>
          <div className="c2">
            <div className={`rod`}>
              <div className="outline">
                <div className="outline1">
                  <div>
                      <h4>潛在發展用戶</h4>
                  </div>
                </div>
                <div className="outline2">
                  <div>
                      <h4>百萬活躍用戶範疇</h4>
                  </div>
                </div>
              </div>
              <div className={`level l-e ${status}`}>
                  <h4>E</h4>
                  <div>
                      <img src={layer_e} />
                      <p>從未知曉用戶</p>
                  </div>
              </div>
              <div className={`level l-e ${status}`}>
                  <h4>D</h4>
                  <div>
                      <img src={layer_d} />
                      <p>曾經觸及用戶</p>
                  </div>
              </div>
              <div className={`level l-c ${status}`}>
                  <h4>C</h4>
                  <div>
                      <img src={layer_c} />
                      <p>淺層接觸用戶</p>
                  </div>
              </div>
              <div className={`level l-b ${status}`}>
                  <h4>B</h4>
                  <div>
                      <img src={layer_b} />
                      <p>中層互動用戶</p>
                  </div>
              </div>
              <div className={`level l-a ${status}`}>
                  <h4>A</h4>
                  <div>
                      <img src={layer_a} />
                      <p>深度服務用戶</p>
                  </div>
              </div>
              <div className={`arrow_box ${status}`}>
                <img src={arrow_right} />
                <img src={arrow_right} />
                <img src={arrow_right} />
                <img src={arrow_right} />
              </div>
            </div>
          </div>
      </Container>
  );
}