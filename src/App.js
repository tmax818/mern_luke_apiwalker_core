
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Search} from "./components/Search";


function App() {
    const [id, setId] = useState("1")
    const [option, setOption] = useState("people")
    const [options, setOptions] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://swapi.dev/api/').then(data => {
            console.log(data)
            let tempOptions = []
            for(let option in data.data){
                tempOptions.push(option)
            }
            setOptions(tempOptions)
        }).catch(e => console.log(e))
    }, [option, id])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(option)
        navigate(`/${option}/${id}`)
    }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          search for: <select value={option} onChange={e => setOption(e.target.value)}>
          {options.map(opt => (
              <option value={opt}>{opt}</option>
          ))}
      </select>
          <input type="number" onChange={e => setId(e.target.value)} />
        <button>submit</button>
      </form>

        <Routes>
            <Route path={'/:search/:id'} element={<Search/>}/>
        </Routes>



    </div>
  );
}

export default App;
