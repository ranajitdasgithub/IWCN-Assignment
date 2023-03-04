import "./Style/App.css";
import Navbar from "./Components/Navbar";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

function App() {
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [editId, setEditId] = useState("");
  const getData = () => {
    axios
      .get("https://iwcn-api.onrender.com/notes")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  //Add operation
  const handleAdd = () => {
    const payload = { Title: text };
    axios
      .post("https://iwcn-api.onrender.com/create", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setText("");
    getData();
    window.location.reload();
  };
  //  Delete operation
  const handleDelete = (id) => {
    axios
      .delete(`https://iwcn-api.onrender.com/delete/${id}`)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getData();
    window.location.reload();
  };
  //Edit operation
  const handleEdit = (id) => {
    setToggle(true);
    setEditId(id);
  };

  //Edit popup
  const handleEditAdd = async () => {
    console.log(editId, editText);
    const payload = { Title: editText };
    axios
      .patch(`https://iwcn-api.onrender.com/edit/${editId}`, payload)
      .then((res) => {
        setToggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
    await getData();
    window.location.reload();
  };
  console.log(data);
  return (
    <div id="AppCon">
      <Navbar />
      <div className="inputAdd">
        <input
          value={text}
          type="text"
          className="addnote"
          placeholder="Take a note"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="App">
        {data.length > 0 &&
          data.map((ele, i) => (
            <Notes
              key={i}
              props={ele}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
      </div>
      <div
        show={toggle}
        id="editPopUp"
        style={toggle ? { display: "block" } : { display: "none" }}
      >
        <input
          className="addnote"
          type="text"
          onChange={(e) => setEditText(e.target.value)}
          placeholder="Add new note"
        />

        <button onClick={handleEditAdd}>Add Edited Note</button>
        <div id="cross" onClick={() => setToggle(false)}>
          <RxCrossCircled />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
