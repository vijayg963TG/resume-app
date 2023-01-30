import React, { useContext, useState } from "react";
import { Footer } from "../components/Footer";
import { Technology } from "../components/Technology";
import { Details } from "../components/Details";
import { dataContext } from "../context/dataContext";
import { Link } from "react-router-dom";


function Home() {
  const [loading, setloading] = useState(true);
  const {data} = useContext(dataContext)

  function print() {
    window.print();
  }

  const downloadPdf = () => {
    setloading(false);
    setTimeout(print, 500);
    setTimeout(() => setloading(true), 2500);
  };


  return (
    <div className="App">
      <div>
        <div className="cvDownload">
          {loading && (
            <div className="flexBetween">
              <button onClick={downloadPdf}>Download</button>
              <Link to={"/cvform"}>
                <button>Cv Form</button>
              </Link>
            </div>
          )}
        </div>
        <div>
          <div className="flex app">
            <Details {...data} />
            <Technology {...data} />
          </div>
     {data.isLogo && <Footer />}
        </div>
      </div>
    </div>
  );
}

export default Home;