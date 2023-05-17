import "./index.css"
import axios from "axios"
import {useEffect} from "react"

function App() {

  function fetchUsers(){
    axios.get("http://localhost:4200/").then((res) => {
      console.log(res.data)
    })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="container">
      <input type="text" placeholder="autor" /> <br />
      <input type="text" placeholder="data dodania" /> <br />
      <input type="text" placeholder="tresc" /> <br />
      <button>Dodaj</button>
    </div>
  );
}

export default App;
