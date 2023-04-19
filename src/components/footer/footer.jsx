import React from "react";
import { Link } from "react-router-dom";

export default function Footer () {
    return(
        <footer>
            <h3>&copy; muzaffer t 2023</h3>
            <div>
                <Link to={"https://www.linkedin.com/in/mzffrtp/"}><i class="fa-brands fa-linkedin"></i></Link>
                <Link to={"https://github.com/mzffrtp"}><i class="fa-brands fa-github"></i></Link>
            </div>
        </footer>
    )
}