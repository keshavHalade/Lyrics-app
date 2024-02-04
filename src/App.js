import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Search from "./component/search/Search";
import Navbar from "./component/navbar/Navbar";
import Dashboard from "./component/dashboard/Dashboard";

import { createContext, useState } from 'react';

export const MyContext = createContext("");

function App() {

const [lyricData, setLyricData] = useState();
const [lyric, setLyrics] = useState();

  return (
    <div className="App">
      <MyContext.Provider value={{lyricData, setLyricData, lyric, setLyrics}}  >
      <Navbar />
      <Search />
      <hr />
      <Dashboard  />
      </MyContext.Provider>

      
      {/* <BrowserRouter>
       <Route exact path='/' component={Home} />

      </BrowserRouter> */}
    </div>
  );
}

export default App;

/*

api link: https://api.lyrics.ovh/suggest/:searchText

example: https://api.lyrics.ovh/suggest/hello

Lyric
lyric link: https://api.lyrics.ovh/v1/:artist/:title

example: https://api.lyrics.ovh/v1/Adele/Hello

*/
