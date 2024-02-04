import { useEffect, useState,useContext } from "react";
import axios from "axios";

import { MyContext } from "../../App";

function Search() {
  const {lyricData, setLyricData} = useContext(MyContext);

  const [input, setInput] = useState(null);

  const API_LINK = "https://api.lyrics.ovh/suggest/";

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  useEffect(() => {
    if (input !== "") {
        axios.get(API_LINK + input)
        .then((response) => {
            setLyricData(response.data[0]);
            console.log("post", lyricData);
          })
        .catch(error => {
            console.error("Error fetching data:", error);
          });
    }
  }, [input]);

 function searchLyrics() {
      console.log("post", lyricData);
  }
  

  return (
    <div className="search-comp">

      <div className="search">
        <input
          type="text"
          id="searchInput"
          value={input || ""}
          onChange={handleInputChange}
          placeholder="Enter Song Name"
        />
        <button onClick={(e) => searchLyrics(e)}>Search</button>
      </div>
    </div>
  );
}

export default Search;

