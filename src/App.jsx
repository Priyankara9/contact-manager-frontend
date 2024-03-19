import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./component/common/NavBar";
import ViewAll from "./component/viewAllContacts/ViewAll";
import AddContact from "./component/addContact/AddContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/Contact/get`);
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const data = await response.json();
        console.log(data);
        setContacts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-fluid size m-0 ">
      <div className="row  row-1">
        <div className="col">
          <NavBar />
        </div>
      </div>

      <Router>
        <div className="row  row-2">
          <div className="col">
            <Routes>
              <Route path="/" element={<ViewAll contacts={contacts} />} />
              <Route path="/add-contact" element={<AddContact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
