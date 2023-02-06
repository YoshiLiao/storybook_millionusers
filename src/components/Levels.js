import React from 'react';
import styled from '@emotion/styled';

import layer_a from './images/ic_layer_a.svg';
import layer_b from './images/ic_layer_b.svg';
import layer_c from './images/ic_layer_c.svg';
import layer_d from './images/ic_layer_d.svg';
import arrow_right from './images/ic_arrow_right.svg';

const Container = styled.div`
padding:20px;
background: #e7f9f7;

  .box {
    position: relative;
    width: 1240px;
    background: rgb(255, 255, 255);
    border-radius: 8px;
  }

  .levels {
    display:flex;
    justify-content:space-between;
    padding:66px 40px 40px 20px;
    width:100%;
    box-sizing:border-box;
  }
  .levels.disabled {
    opacity:0.1;
  }
  .card {
    padding-top:10px;
    width: 240px;
    height: 200px;
    border-radius: 12px;
    box-sizing:border-box;
    text-align:center;
  }
  h4 {
    margin:8px;
    font-size:20px;
    color: rgba(51, 51, 51, 0.88);
  }
  p {
    color: rgba(51, 51, 51, 0.55);
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

  .count {
    margin:10px 0px 5px;
    font-size: 32px;
    font-weight: 700;
    color: rgba(6, 102, 119, 0.88);
  }
  .tip {
    margin:0;
    font-size:14px;
  }
    .hidden {
        opacity:0.1;
  }
  .arrow_box {
    position:absolute;
    top:160px;
    left:290px;
  }
  .arrow_box.disabled {
    opacity:0.1;
  }
  .arrow_box img {
      margin-right:278px;
  }
  .arrow_box img:first-of-type {
      position:relative;
      left:-7px;
  }
`;
const t_separator = (num)=>{
  const re = new RegExp("(\\d{1,3})(?=(\\d{3})+(?:$|\\D))", "g");
  return num?.toString().replace(re, "$1,");
}

export default function Levels({status}) {
  return ( 
      <Container>
        <div className="box">
          <div className={`levels ${status}`}>
            <div className="card l-e">
              <img src={layer_d} />
              <h4>D.曾經觸及用戶</h4>
              <p className="count">{t_separator(12345)}</p>
              <p className="tip">D類不納入百萬活躍用戶統計</p>
            </div>
            <div className="card l-c">
              <img src={layer_c} />
              <h4>C.淺層接觸關係</h4>
              <p className="count">{t_separator(12345)}</p>
            </div>
            <div className="card l-b">
              <img src={layer_b} />
              <h4>B.中層互動關係</h4>
              <p className="count">{t_separator(12345)}</p>
            </div>
            <div className="card l-a">
              <img src={layer_a} />
              <h4>A.深度服務關係</h4>
              <p className="count">{t_separator(12345)}</p>
            </div>
          </div>
          <div className={`arrow_box ${status}`}>
              <img src={arrow_right} />
              <img src={arrow_right}  />
              <img src={arrow_right}  />
          </div>
        </div>
      </Container>
  );
}