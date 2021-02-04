import Member from "./Member";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddNewbtn,PageTitle } from "../styles";
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
        <PageTitle style={{textAlign:"center"}}>Members List</PageTitle><br></br>
               
        <Link to="/members/AddMember">
            <AddNewbtn className="btn">Add New Member</AddNewbtn>
            </Link>
      <table className="table table-hover table-bordered results">
        <thead>
          <tr>
        <th className="col-5">Name</th>
        <th className="col-3">Membership</th>
  
        <th className="col-3"></th>
          </tr>
        </thead>
        <tbody>
          {memberlist}
        </tbody>
        </table> 
  
        </div>
  
        <div className="col-2"></div> 
    </div>
    </div>
    </>
  );
}

export default MembersList;
