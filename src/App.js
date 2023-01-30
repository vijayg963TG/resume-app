import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { initialState } from "./helper/data";
import { dataContext } from "./context/dataContext";
import { Cvform } from "./pages/Cvform";

function App() {
  const [data, setData] = useState(initialState);
  // console.log(data)

useEffect(() => {
console.log("Some Changes Happend")
}, [data])

  return (
    <dataContext.Provider value={{data, setData}}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cvform" element={<Cvform />}/>
      </Routes>
    </dataContext.Provider>
  );
}

export default App;
