import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";



function Home() {
  return (
    <div className="Home">
      <h1 className="text-center">
       Choose An Option
      </h1>
        <div className="list-center">
            <h3 >
              <Link className="center" to={`/register`}>Register</Link>
            </h3>
        </div>
        <div className="list-center">
          <h3 >
            <Link className="center" to={`/admin`}>Admin</Link>
          </h3>
      </div>
    </div>
  );
}

export default Home;