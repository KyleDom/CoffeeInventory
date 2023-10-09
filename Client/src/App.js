import React from "react";
import Content from "./Components/Content";
import Title from "./Components/Title";
import CoffeeInventory from "./Components/CoffeeInventory";



function App() {
  return (
    <div>
      <div className="mt-5 mb-10 text-lg text-center">
        <Title/>
      </div>
<div className="mb-10">
  <Content />
</div>
<div>
  <CoffeeInventory/>
</div>
    </div>
  );
}

export default App;
