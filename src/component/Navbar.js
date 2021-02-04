// import { GiFilmProjector } from 'react-icons/gi';
function Navbar() {  
    return ( 
<nav className="navbar navbar-dark" style={{backgroundColor: "#0F0F1A"}}>
  <div className="container-fluid">
          <a className="navbar-brand">MY LIBRARY </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
   
  </div>
</nav>
    
  );
}

export default Navbar;
