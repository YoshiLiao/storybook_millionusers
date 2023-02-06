import React from 'react';
import styled from '@emotion/styled';
import $ from "jquery";

import tab1 from "./images/ic_tab1.svg";
import tab2 from "./images/ic_tab2.svg";
import tab3 from "./images/ic_tab3.svg";

const Container = styled.header`
  height: 64px;
  background: rgb(243, 255, 253);
  box-shadow: rgb(198 232 228) 0px 2px 0px;
  box-sizing: border-box;

  ul {
    position: relative;
    margin: 0px;
    padding: 5px 20px;
    padding-left: 20px;
    height: 100%;
    box-sizing: border-box;
  }
  li {
    position: relative;
    display: inline-block;
    margin-right: 6px;
    padding: 8px 8px 8px 4px;
    width: 138px;
    height: 54px;
    border-radius: 8px;
    color: rgba(10, 25, 45, 0.62);
    font-size: 16px;
    font-weight: 600;
    line-height: 38px;
    transition-duration: 0.4s;
    cursor: pointer;
    box-sizing: border-box;
  }
  li img {
    position: relative;
    top:5px;
    left:2px;
    margin-right:6px;
  }
  li:hover {
    background: rgba(58, 210, 159, 0.15);
  }
  .indicator{
    position: absolute;
    bottom: 0px;
    left: 0px;
    content: '';
    width: 138px;
    height: 6px;
    background: linear-gradient(270deg, #2DBBDE 10%, #08CB88 50%, #07B478 85%);
    transition-duration: 0.2s;
`;

export default function TabBar() {
  // const [tab,setTab] = useState(0);

  const changeTab = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let int_id = parseInt(id.slice(3,4))
    $('.indicator').css('left',(int_id-1)*144+20);
} 
  return ( 
      <Container className="tab_bar">
        <ul>
          <li id="tab1" onClick={(e)=>changeTab(e)}>
          <img src={tab1} alt='tab1' />
            分類統計
          </li>
          <li id="tab2" onClick={(e)=>changeTab(e)}>
            <img src={tab2} alt='tab2' />
            季 / 年細節
          </li>
          <li id="tab3" onClick={(e)=>changeTab(e)}>
            <img src={tab3} alt='tab3' />
            細分客群變化
          </li>
          <div className="indicator"></div>
        </ul>
      </Container>
  );
}