import React from "react";
import Button from "components/Button";

const App = () => {
  return (
    <>
      <h1>Hello, world!</h1>
      <Button value="Hello rvz 8!" onClick={() => console.log("rvz clicked!1")} disabled />
      <h2>Пока-пока, мир!</h2>
    </>
  );
};

export default App;
