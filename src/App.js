import './App.css';
import Card from './Card';
import { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState([])

  const getData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
    const data = await res.json()
    console.log (data)

    setCountries(data)
  }


  return (
    <div className="App">
      <div className="inputs container">
            <input id = "searchbar" className="form-control form-control-lg" placeholder="Search by country"
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCountries([])
              getData();
            }}
            ></input>

            
        </div>

        {
          
            <div className='container cards row'>
              {countries.map((country) => (
                <Card country = {country} 
            </div>
          ) 
        }
    </div>
  );
}

export default App;
