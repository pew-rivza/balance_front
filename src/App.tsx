import React, {useState} from "react";
import Button from "components/Button";
import Checkbox from "components/Checkbox";

const App = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <Button value="Hello rvz 8!" onClick={() => console.log("rvz clicked!1")} />
      <Checkbox checked={checked} onChange={handleCheck}/>
      <h2>Пока-пока, мир!</h2>
    </>
  );
};

export default App;
