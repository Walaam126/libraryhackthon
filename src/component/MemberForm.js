import { useState } from "react";
import { addMember } from '../store/actions';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LibBtn,PageTitle } from "../styles";
function MemberForm() {
    const history = useHistory();
    const dispatch = useDispatch ();
    const [member, setMember] = useState({
        firstName: "",
        lastName:"",
        currentlyBorrowedBooks: [],
        membership:""
  })
 

    const handleChange = (event) =>
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    
    const resetForm = () => {
        setMember({
            firstName: "",
            lastName:"",
            currentlyBorrowedBooks: [],
            membership:""
      })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addMember(member))
        resetForm();
        history.push("/members");
}
  return (
    <>
      <br></br>
    <div className="container">
        <div className="row">
        <div className="col-3"></div> 
        <div className="col-6">
        <PageTitle style={{textAlign:"center"}}> Add New Member</PageTitle><br></br><br></br>
        <form  onSubmit={handleSubmit}>
    <div className="form-outline mb-4">
    <label className="form-label">First Name</label>
    <input type="text"  className="form-control" name="firstName" onChange={handleChange} value={member.firstName}/>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" name="lastName" onChange={handleChange} value={member.lastName}/>
  </div>
    <div className="form-outline mb-4">
    <label className="form-label" >Membership:</label>{'  '}
    <select className="form-select" aria-label="Default select example" name="membership" onChange={handleChange} value={member.membership}>
  <option value="" selected>Select Membership</option>
  <option value="silver">Silver</option>
  <option value="gold">Gold</option>
  <option value="platinum">Platinum</option>
</select>
    </div>
    <LibBtn type="submit" className="btn btn-block mb-4">Add </LibBtn> 
                      
</form>               
        </div>
  
        <div className="col-3"></div> 
    </div>
      </div>
      </>
  );
}

export default MemberForm;
