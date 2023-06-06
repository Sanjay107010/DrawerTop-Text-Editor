import React from "react";
import DrawerMenu from "./pages/DrawerMenu";
import DemoString from "./pages/DemoString";
import { useState } from "react";
import FormValidator from "./pages/FormValidator";

const App = () => {
  const [dark, setDark] = useState(true);
  const togglemode = () => {
    setDark(!dark);
    if (dark === true) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  };
  console.log("============>mode", dark);
  return (
    <>
      <DrawerMenu />
      <DemoString mode={dark} togglemode={togglemode} />
      <FormValidator />
    </>
  );
};

export default App;
