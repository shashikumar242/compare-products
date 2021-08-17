import { useState } from "react";
import Compare from "./components/Compare";
import ProductsContainer from "./components/ProductsContainer";
import {Route,Switch} from 'react-router-dom';

 

function App() {

  const[productsArr,setProductsArr] = useState([]);

  return (
     
    <div className="App">
      <Switch>
        <Route exact path ="/" >  <ProductsContainer productsArr={productsArr} setProductsArr={setProductsArr}/></Route>
        <Route path="/compare" > <Compare productsArr={productsArr} /> </Route>
      </Switch>
      
    </div>
  );
}

export default App;
