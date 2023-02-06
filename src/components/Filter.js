import {useState, useEffect } from "react";
import styled from '@emotion/styled';
import $ from "jquery";

import arrow_down from "./images/ic_arrow_down.svg";
import arrow_up from "./images/ic_arrow_up.svg";

const Container = styled.div`
  display:flex;
  position:relative;
  height: 54px;
  background: #F3FFFD;
  box-sizing:border-box;

  button {
    padding: 0;
  }

  .time {
    padding-left:20px;
    height:60px;
    line-height:60px;
    font-size:17px;
    font-weight:500;
    color: rgba(10, 25, 45, 0.62);
  }
  span {
      font-weight:600;
      color: #29AF72;
  }
  .btnBox {
      position:absolute;
      top:0;
      right:30px;
      padding-top:10px;
      height:60px;
      font-size:18px;
      box-sizing:border-box;
  }
  .btnBox > button {
      margin-left:10px;
      padding:0px 20px;
      height: 34px;
      background: rgba(79, 213, 152, 0.18);
      border-radius: 40px;
      border:0px;
      font-weight:500;
      font-size:16px;
      color: rgba(10, 25, 45, 0.62);
      cursor:pointer;
  }
  .btnBox > button:last-of-type {
      margin-left:40px;
      width:180px;
  }
  .btnBox > button:last-of-type:after {
      position: absolute;
      top:18px;
      right:200px;
      content:'';
      width:2px;
      height: 24px;
      background: rgba(10, 25, 45, 0.4);
  }
  .btnBox > button:hover {
      background: rgba(79, 213, 152, 0.4);
      transition-duration: 0.5s;
  }
  .btnBox > button.selected {
      color:#FFFFFF;
      background: linear-gradient(90deg, #4ED497 18.84%, #44A8F2 124.75%);
  }
  .customBox {
      display: flex;
      align-items: center;
      position:absolute;
      top:64px;
      right:0px;
      padding:0px 0px 0px 20px;
      height:70px;
      background: #FFFFFF;
      border-radius:8px;
      box-shadow: 0px 4px 20px rgba(157, 210, 205, 0.6);
      font-size: 16px;
      box-sizing: border-box;
      animation-name: custom;
      animation-duration: 0.4s;
  }
  @keyframes custom{
      from{
          opacity:0;
          top:40px;
      }
      to{
          opacity:1;
          top:64px;
      }
  }
  .customBox.hidden{
      display:none;
  }
  .selection {
      position: relative;
      padding-left: 12px;
      width: 160px;
      height: 40px;
      border: 2px solid rgba(51, 51, 51, 0.2);
      border-radius: 4px;
      box-sizing:border-box;
      color: rgba(51, 51, 51, 0.8);
      font-weight: 600;
      line-height:40px;
      cursor: pointer;
  }
  .selection img {
      position: absolute;
      top: 6px;
      right: 10px;
      transition-duration: 0.6s;
  }
  .selectionBox {
      position: relative;
      top:-5px;
      left:-5px;
      background: #FFFFFF;
      border: 1px solid rgba(51, 51, 51, 0.2);
      box-shadow: 0px 4px 20px rgba(157, 210, 205, 0.5);
  }

  .year {
      height: 32px;
      border-bottom: 1px solid rgba(51, 51, 51, 0.2);
      line-height: 32px;
  }
  .year: last-of-type {
      border-bottom: 0px;
  }
  .year:hover {
      background: rgba(79, 213, 152, 0.2);
      transition-duration: 0.6s;
  }
  .yqBox {
      width:290px;
      margin-left:20px;
      margin-right:10px;
  }
  .yqBox .yq {
      margin-right: 8px;
      width: 50px;
      height: 40px;
      background: rgba(51, 51, 51, 0.12);
      border-radius: 4px;
      border: 0px;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: rgba(51, 51, 51, 0.8);
      cursor: pointer;
  }
  .yqBox .yq:hover {
      background: rgba(51, 51, 51, 0.2);
      transition-duration: 0.5s;
  }
  .yqBox button.selected {
      background: rgba(79, 213, 152, 0.4);
  }
  .yqBox button.selected:hover {
      background: rgba(79, 213, 152, 0.4);
  }
  .submit {
      width: 80px;
      height: 40px;
      background: rgba(41, 175, 114, 0.8);
      border: 0px;
      border-radius: 4px;
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 600;
      cursor:pointer;
  }

`

export default function Filter({period, years}) {
  const [arrow, setArrow] = useState("▼");
  const [custom, setCustom]=useState("hidden");

  // 選擇時間間按鈕事件
  const customBtn = (e) => {       
      if(custom === "hidden"){
          // 樣式
          $(".timeType1, .timeType2").removeClass("selected");
          $(".timeType2").addClass("selected");
          $(".customBox").removeClass("hidden");
          setCustom("show");
          setArrow("▲");

      }else {
          $(".customBox").addClass("hidden");
          setCustom("hidden");
          setArrow("▼");
      }
      e.stopPropagation();
  }
  const type1Event =(e)=>{

    let id = e.target.id;

    $(".timeType1").removeClass("selected");
    $(".timeType2").removeClass("selected");
    $(`#time${id.slice(4,5)}`).addClass("selected");
    $(".yq").removeClass("selected");
    $("#year").addClass("selected");
    // setSelection(false);
    setCustom("hidden");
    setArrow("▼");
    $(".customBox").addClass("hidden");
}

  return (
    <>
      <Container className="filter">
        <div className="time">時間區間：<span>&nbsp;{period[0]}&nbsp;&nbsp;</span> - <span>&nbsp;&nbsp;{period[1]}</span></div>
        <div className="btnBox" >
            <button id="time0" className="timeType1 selected" onClick={(e)=>type1Event(e)}>{years[0]}</button>
            <button id="time1" className="timeType1" onClick={(e)=>type1Event(e)}>{years[1]}</button>
            <button id="customBtn" className="timeType2" onClick={(e)=>customBtn(e)}>選擇統計區間&nbsp;&nbsp;&nbsp;{arrow}</button>
            <div className="customBox hidden" onClick={(e)=>customBtn(e)}>
              <div className="selection">{years[0]}<img src={arrow_down} alt="arrow" /></div>
                <div className="yqBox">
                  <button id="year" className="year yq selected">全年</button>
                  <button id="quarter1" className="yq" >Q1</button>
                  <button id="quarter2" className="yq" >Q2</button>
                  <button id="quarter3" className="yq" >Q3</button>
                  <button id="quarter4" className="yq" >Q4</button> 
                </div>
              </div>
          </div>  
      </Container>
    </>
  );
}