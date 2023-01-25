import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateCV from "./pages/createCV";
import { initialState } from "./helper/data";
import { dataContext } from "./context/dataContext";

function App() {
  const [data, setData] = useState(initialState);
  // console.log(data)
  return (
    <dataContext.Provider value={{data, setData}}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/createCV" element={<CreateCV />}/>
      </Routes>
    </dataContext.Provider>
  );
}

export default App;
