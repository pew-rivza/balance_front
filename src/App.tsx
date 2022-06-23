import React, {useEffect, useState} from "react";
import consts from "consts";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import AreaProgress from "components/AreaProgress";
import Area from "./components/Area";

const App = () => {
  const [checked, setChecked] = useState(false);
  const [areas, setAreas] = useState([]);

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    console.log("consts.API", consts.API);
    // @ts-ignore
    // TODO: Дописать в typings типы для апи и накинуть сюда проверок
    // TODO: Сделать моки не только на локальной разработки, но и для сторибука
    // TODO: consts.API.getAreas() должен вызываться один раз на старте. А должны ли возвращаться только категории или возвращать их вместе с тудушками?
    consts.API.getAreas()
      .then(function (response: any) {
        setAreas(response);
      });
  }, []);

  console.log("areas:", areas);

  return (
    <>
      <h1>Hello, world!</h1>
      <Button value="Hello rvz 8!" onClick={() => console.log("rvz clicked!1")} />
      <Checkbox checked={checked} onChange={handleCheck} />
      <AreaProgress value={40} />
      {
        areas.map(area =>
          <Area key={area.id} {...area} />
        )
      }
      <h2>Пока-пока, мир!</h2>
    </>
  );
};

export default App;
