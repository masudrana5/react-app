import './App.css';
import Countries from './componets/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  )
}

/* function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);
  return (
    <div>
      <h2>My Rest Countries</h2>
      <h3>Available country: { countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )

}

function Country(props) {
  return (
    <div>
      <h2 style={{color: "red"}}>Name: {props.name}</h2>
      <h3 style={{color: "navy"}}>Population: { props.population}</h3>
    </div>
  )
} */

export default App;

  
