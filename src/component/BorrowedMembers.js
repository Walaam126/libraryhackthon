import { Link } from "react-router-dom";
function BorrowedMembers({ member }) {
    return (
        <>
      <div className="d-flex position-relative" style={{border: '2px solid black', padding:'10px'}}>
      <div>
     <h5 className="mt-0">{member.firstName.concat(' ', member.lastName)}</h5>
              <p>{member.membership}</p>
              <Link to={`/members/${member.slug}`}><a className="stretched-link">Go to Member page</a>
              </Link>
      </div>
     </div><br></br> 
     </>   
    );
  }

export default BorrowedMembers;
