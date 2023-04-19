import React from "react";
import { Link } from "react-router-dom";

export default function Header () {
    return(
        <header>
            <h2><i className="fa-solid fa-clipboard-check"></i> Your JobBoard</h2>
            <div>
                <Link to={"/"}>Job List</Link>
                <Link to={"/addJob"} >Add Job</Link>
            </div>
        </header>
    )
}