import React from 'react';
import styled from '@emotion/styled';

import layer_a from './images/ic_layer_a.svg';
import layer_b from './images/ic_layer_b.svg';
import layer_c from './images/ic_layer_c.svg';
import layer_d from './images/ic_layer_d.svg';

const Container = styled.div`
  padding:20px;
  width:100%;
  background: #FFFFFF;

  table {
    position:relative;
    width:100%;
    border: 1px solid rgba(51, 51, 51, 0.15);
    border-radius: 4px;
    border-spacing: 0px;
    border-collapse: collapse;
    color: rgba(51, 51, 51, 0.88);
    margin-bottom:40px;
  }
  thead {
    box-sizing: border-box;
  }

  tr {
      width:100%;
      height:100px;
  }
  tr:last-of-type {
      border-bottom: 0px;
  }
  th,td {
      border: 1px solid rgba(51, 51, 51, 0.3);
  }
  tr th, tr td {
      font-size:22px;
      box-sizing: border-box;
  }
  .tr1 {
      background:#E2FAF7;
      border: 1px solid #98DEC5;
  }
  td.c1{
      border: 0px ;
  }
  .c1 {
      width:220px;
  }
  .c2 {
      width:700px;
  }
  td.c2 {
      padding-left:30px;
      font-weight:500;
  }
  td.c3 {
      padding-right:70px;
      font-size:30px;
      font-weight:600;
      text-align: right;
      color: rgba(6, 102, 119, 0.88);
  }
  .level {
    display:flex;
    align-items:center;
    position:absolute;
    top:100px;
    left:0px;
    width:219px;
    height:100px;
    z-index:500;
}
.level > td {
    display:flex;
    justify-content:flex-start;
    padding-left: 10px;
    width:100%;
    height:60px;
    font-size: 22px;
    font-weight: 600;
    box-sizing:border-box;
    border: 0px;
}
.level td span {
    line-height:60px;
}
.l-a {
  background: rgba(58, 210, 159, 0.4);
}
.l-b {
  background: rgba(58, 210, 159, 0.26);
}
.l-c {
  background: rgba(58, 210, 159, 0.12);
}
.l-d,.l-e {
  background: rgba(51, 51, 51, 0.04);
}
`;

const t_separator = (num)=>{
  const re = new RegExp("(\\d{1,3})(?=(\\d{3})+(?:$|\\D))", "g");
  return num?.toString().replace(re, "$1,");
}

export default function Table({item, count}) {
  return ( 
      <Container>
        <table className="table">
          <thead>
            <tr className="tr1">
                <th className="c1"></th>
                <th className="c2">層級服務項目</th>
                <th className="c3">數據統計</th>
            </tr>
          </thead>
          <tbody>
            <tr rowSpan="3" className="listItem">
              <td className="c1"></td>
              <td className="c2">{item}</td>
              <td className="c3">{t_separator(count)}</td>
            </tr>
            <tr className="level l-a">
              <td>
                <img src={layer_a} />
                <span>A.深度服務</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr className="tr1">
              <th className="c1"></th>
              <th className="c2">層級服務項目</th>
              <th className="c3">數據統計</th>
            </tr>
          </thead>
          <tbody>
            <tr rowSpan="3" className="listItem">
              <td className="c1"></td>
              <td className="c2">{item}</td>
              <td className="c3">{t_separator(count)}</td>
            </tr>
            <tr className="level l-b">
              <td>
                <img src={layer_b} />
                <span>B.中層互動</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr className="tr1">
              <th className="c1"></th>
              <th className="c2">層級服務項目</th>
              <th className="c3">數據統計</th>
            </tr>
          </thead>
          <tbody>
            <tr rowSpan="3" className="listItem">
              <td className="c1"></td>
              <td className="c2">{item}</td>
                <td className="c3">{t_separator(count)}</td>
            </tr>
            <tr className="level l-c">
              <td>
                <img src={layer_c} />
                <span>C.淺層接觸</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr className="tr1">
              <th className="c1"></th>
              <th className="c2">層級服務項目</th>
              <th className="c3">數據統計</th>
            </tr>
          </thead>
          <tbody>
            <tr rowSpan="3" className="listItem">
              <td className="c1"></td>
              <td className="c2">{item}</td>
              <td className="c3">{t_separator(count)}</td>
            </tr>
            <tr className="level l-d">
              <td>
                <img src={layer_d} />
                <span>D.曾經觸及</span>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
  );
}