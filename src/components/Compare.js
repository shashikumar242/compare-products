import React from "react";
import CompareItem from "./CompareItem";
import { useHistory } from "react-router-dom";

const styles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flexStart",
};

const goBackButtonStyle = {
  backgroundColor: "blue",
  padding: 10,
  fontWeight: 600,
  color: "white",
  borderRadius: 20,
  marginLeft:700
};

export default function Compare({ productsArr }) {
  const history = useHistory();

  const handleGoBack = () => {
    history.push("/");
  };

  return (
    <div>
      <button style={goBackButtonStyle} onClick={() => handleGoBack()}>
        GO BACK
      </button>

      <div style={styles}>
        {productsArr.map((product) => {
          return <CompareItem product={product} />;
        })}
      </div>
    </div>
  );
}
