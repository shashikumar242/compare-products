import Product from "./Product";
import styled from "styled-components";
import { MobilesData } from "../data";
import { useHistory } from "react-router-dom";

const data = MobilesData();

function ProductsContainer({ productsArr, setProductsArr }) {
  const history = useHistory();

  //  HANDLE - SELECT
  const handleSelect = (product) => {
    setProductsArr([...productsArr, product]);
  };

  // HANDLE - UNSELECT
  const handleUnselect = (id) => {
    const updatedProductArr = productsArr.filter(
      (product) => product.id !== id
    );
    setProductsArr(updatedProductArr);
  };

  // CLICK COMPARE BUTTON -- DIRECT TO COMAPARE COMPONENT
  const directToCompareComp = () => {
    history.push("/compare");
  };

  return (
    <div>
      <Images>
        {data.map((product) => {
          return (
            <Product
              product={product}
              handleSelect={handleSelect}
              handleUnselect={handleUnselect}
            />
          );
        })}
      </Images>

      {/* IF TWO PRODUCST EXIST --- SHOW COMPARE BUTTON */}
      {productsArr[1] && (
        <CompareButton onClick={() => directToCompareComp()}>
          COMPARE -- {productsArr.length}
        </CompareButton>
      )}
    </div>
  );
}

// STYLED-COMPONENTS

const Images = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  width: auto;
`;

const CompareButton = styled.button`
  position: fixed;
  top: 650px;
  right: 100px;
  font-size: 1.5rem;
  background-color: blue;
  color: white;
  font-weight: 600;
  border-radius: 20px;
  padding: 20px;
`;

export default ProductsContainer;
