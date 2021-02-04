import { Link } from "react-router-dom";
function Navbar() {  
    return ( 
<nav className="navbar navbar-dark" style={{backgroundColor: "#0F0F1A"}}>
  <div className="container-fluid">
          <a className="navbar-brand">MY LIBRARY </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/`}> Home
              </Link>
        </li>
        <li className="nav-item">
              <Link className="nav-link" to={`/books`}> Books
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={`/members`}> Members
              </Link>
        </li>
      </ul>
   
  </div>
</nav>
    
  );
}

export default Navbar;
