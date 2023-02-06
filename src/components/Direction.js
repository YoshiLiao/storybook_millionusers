import {useState, useEffect } from "react";
import styled from '@emotion/styled';
import $ from "jquery";

import infoicon from './images/ic_info2.svg';
import direction from "./images/img_direction.svg";

const Container = styled.div`
  position: relative;
  padding: 10px;
  width: 800px;
  background: rgb(231, 249, 247);

  .btnBox button {
      padding: 0px 20px;
      height:26px;
      background: rgba(79, 213, 152, 0.18);
      border-radius: 40px;
      border: 0px;
      font-size:12px;
      font-weight:500;
      color: rgba(51,51,51,0.8);
      cursor: pointer;
      transition-duration: 0.5s;
  }
  .btnBox button:hover {
      background: rgba(79, 213, 152, 0.4);
  }
  button img {
      display:inline-block;
      position: relative;
      top:2px;
      left:-6px;
      width: 17px;
  }
  span {
      position: relative;
      top:-2px;
      font-weight: 600;
      color: #29AF72;
  }
  .direction_content {
      display: none;
  }
  .direction_content {
      padding-top:20px;
  }
  .imgBox {
      padding:20px;
      background: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0px 4px 40px rgb(157 210 205 / 40%);
  }
  img {
      width:100%;
  }


`;

export default function Direction({type, label}) {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState("▼");

  useEffect(()=>{
      if(show){
          $(`.dc0`).eq(0).slideDown("slow");
          setInfo("▲");
      }else if(!show) {
          $(`.dc0`).eq(0).slideUp("slow");
          setInfo("▼");
      }
  },[show])

  const btnEvent = (e) => {
      setShow(!show)
  }
  return ( 
      <Container>
        <div className="direction">
          <div className="btnBox">
            <button className="directionBtn" onClick={(e)=>btnEvent(e)} ><img src={infoicon} /><span>了解定義 {info} </span></button>
            </div>
            <div className={`direction_content dc0`}>
                <div className="imgBox">
                    <img src={direction} alt="用戶關係分層定義" ></img>
                </div>
            </div>
        </div>
      </Container>
  );
}