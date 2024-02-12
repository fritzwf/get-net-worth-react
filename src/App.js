import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GetSearch from './components/GetSearch';
import 'bulma/css/bulma.min.css';

const NET_WORTH_URL = '//tv.feuersoft.com/cgi-bin/get_celebrity.cgi?search=';
const NET_WORTH_NOT_FOUND = "Net worth not found";

function App() {
  const [search, setSearch] = useState('');
  const [worth, setWorth] = useState('');
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(true);
  const inputRef = useRef();

  const fetchData = async () => {
    console.log("state: " + search)
    await axios.get(NET_WORTH_URL + search).then((response) => {
      setWorth(response.data);
      response.data.net_worth ? setFound(true) : setFound(false);
      console.log("Fetch data: " + JSON.stringify(response));
      setLoading(false);
      setSearch('');
    });    
  };

  const handleChange = () => {
    setSearch("");
    setWorth("");
    setFound(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearch(inputRef.current.value);
  }

  useEffect(() => {
    if (search) {
      setFound(true);
      fetchData();
    }
  }, [search]);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler} className="Loader-link">
          Enter celebrity <input className="button is-white" ref={inputRef} onChange={handleChange}/> &nbsp;
          <button className="button is-primary" type="submit"> Net Worth </button> &nbsp;&nbsp;
        </form>
        <div className="Loader-link">
          { loading && !worth && search ? <span className="loader Loader-link"></span> : '' }
        </div>
        <div className="Loader-link">
          { !found ? NET_WORTH_NOT_FOUND : '' }
        </div>        
        <GetSearch netWorth={worth} />
      </header>
    </div>
  );
}

export default App;
