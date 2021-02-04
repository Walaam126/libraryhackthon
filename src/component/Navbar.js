import { Link, NavLink } from "react-router-dom";
import { Navitem } from "../styles";
import { GiBookshelf } from 'react-icons/gi';
function Navbar() {  
    return ( 
<nav className="navbar navbar-expand" style={{backgroundColor: "#6c584c"}}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" style={{ color: "white", fontSize: "20px", fontWeight: "bold" }} to={`/`}>
          <GiBookshelf size="2.5em"/>{' '}
            MY - L I B R A R Y </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
              <Navitem className="nav-item" aria-current="page" to={`/`}> Home
              </Navitem >
       
        
              <Navitem  className="nav-item" to={`/books`}> Books
              </Navitem >
           
            
            <Navitem  className="nav-item" to={`/members`}> Members
              </Navitem>
              
      </ul>
     
  </div>
</nav>
    
  );
}

export default Navbar;
