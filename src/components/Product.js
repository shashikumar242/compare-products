import React, { useState } from "react";
import styled from "styled-components";

export default function Product({ product, handleSelect, handleUnselect }) {
  const [select, setSelect] = useState(false);
  return (
    <Image>
      {<img src={product.imgsrc} alt=""></img>}
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>

      <button
        disabled={select}
        onClick={() => {
          handleSelect(product);
          setSelect(!select);
        }} >
        Select to compare
      </button>

      <button
        disabled={!select}
        onClick={() => {
          handleUnselect(product.id);
          setSelect(!select);
        }} >
        Unselect
      </button>
    </Image>
  );
}

const Image = styled.div`
  flex: 1 1 18%;
  height: auto;
  margin: 4px;
  padding: 20px 0;
  width: auto;
  button{
    border-radius: 10px;
    padding: 10px;
    margin-inline: 10px;
     font-weight:400;
  }
`;
