import Member from "./Member";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MembersList() {
    const members = useSelector((state) => state.members);
    const memberlist=members.map((member) => <Member member={member} key={member.id} />);
    return (
      <>
        <br></br>
        <div className="container">
        <div className="row">
        <div className="col-2"></div> 
        <div className="col-8">
        <h1>Members List</h1><br></br>
                  {/* <MoviesTable> */}
        <Link to="/members/AddMember">
            <button className="btn btn-primary">Add New Member</button>
            </Link>
      <table className="table table-hover table-bordered results">
        <thead>
          <tr>
        <th className="col-5">Name</th>
        <th className="col-3">Membership</th>
        {/* <th className="col-4">ID</th> */}
        <th className="col-3"></th>
          </tr>
        </thead>
        <tbody>
          {memberlist}
        </tbody>
        </table> 
        {/* </MoviesTable>                     */}
        </div>
  
        <div className="col-2"></div> 
    </div>
    </div>
    </>
  );
}

export default MembersList;
