import React, { useState } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./introduction.css";
import "./pop-up.css";

const Modal = ({active, setActive}) => {
  return(
    <div class={active ? "modal activemode" : "modal"} onClick={() => setActive(false)}>
      <div class={active ? "modal-content activemode" : "modal-content"} onClick={(e) => e.stopPropagation()}>
        <h2>Data</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last name" />
        <a href="#">Send</a>
        <p class="close" onClick={() => setActive(false)}>
          +
        </p>
      </div>
    </div>
  ) 
};

export default Modal;
