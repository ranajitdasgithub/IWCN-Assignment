import "./Style/App.css";
import Navbar from "./Components/Navbar";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  //const [data,setData]=useState([])
  let data=["kjghgoailghoaghilalgh","jafghdahgaglakgfdjg","ghaohgiaofdgag","foahgiohaioghogh","kjghgoailghoaghilalgh","jafghdahgaglakgfdjg","ghaohgiaofdgag","foahgiohaioghogh","kjghgoailghoaghilalgh","jafghdahgaglakgfdjg","ghaohgiaofdgag","foahgiohaioghogh","kjghgoailghoaghilalgh","jafghdahgaglakgfdjg","ghaohgiaofdgag","foahgiohaioghogh","kjghgoailghoaghilalgh","jafghdahgaglakgfdjg","ghaohgiaofdgag","foahgiohaioghogh","kjghgoailghoaghilalgh","jafghdahgaglakgfdjg","ghaohgiaofdgag","foahgiohaioghogh","kjghgoailghoaghilalgh","jafghdahgaglakgfdjg","ghaohgiaofdgag","foahgiohaioghogh","kjghgoailghoaghilalgh","jafghdahgaglakgfdjg","ghaohgiaofdgag","foahgiohaioghogh"]  
 
  return (
    <div id="AppCon">
      <Navbar />
      <div className="App">
        {data.length>0 && data.map((ele)=>
          <Notes note={ele}/>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
