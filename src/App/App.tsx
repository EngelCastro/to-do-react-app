import React from "react";
import Button from "./Button";
import Children from "./Children";

function function1 (event: any) {
  console.log("Print event", { event });
}

const App = () => {
  return (
    <React.Fragment>
      <h1>Probando props</h1>

      <Button onClick={function1}>
        <Children text={"hola adfsfd"}/>
      </Button>
    </React.Fragment>
  );
};

export default App;
