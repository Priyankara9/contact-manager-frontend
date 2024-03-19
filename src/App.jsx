import { useState ,useEffect} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './component/common/NavBar';
import ViewAll from './component/viewAllContacts/ViewAll';

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
    <>
      <NavBar/>
      <div>
      <div className='table-size'>
         <ViewAll contacts={contacts} />
      </div>
      </div>
      
      

    </>
  )
}

export default App
