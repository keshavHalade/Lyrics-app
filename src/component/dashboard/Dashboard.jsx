import React, { useContext } from "react";
import Card from "./Card";

import { MyContext } from "../../App";

function Dashboard() {
  const { lyricData, setLyricData } = useContext(MyContext);

  return (
    <div>
      <h1 className="text-center">Dashboard</h1>
      <div className="card-container">
        {/* <Card data = {lyricData}/> */}
        <Card />
      </div>
    </div>
  );
}

export default Dashboard;
