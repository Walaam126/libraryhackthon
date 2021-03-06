import { useParams, Redirect,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BorrowedMembers from "./BorrowedMembers";
import ToBorrowMembers from "./ToBorrowMembers";
import { useState } from "react";
import { BorrowBook, ReturnBook } from '../store/actions';
import { LibBtn,PageTitle,Comment } from "../styles";
function BookDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const books = useSelector((state) => state.books);
    const members = useSelector((state) => state.members);
    const [memberID, setMember] = useState("");
    const [borrowstat, setBorrow] = useState(true);
    const { bookSlug } = useParams();
    const _book = books.find((book) => book.slug === bookSlug);
    if(!_book){return <Redirect to="/books"/>}
    const borrwedby = _book.borrowedBy.map((id) => members.find((member) => member.id === id));
    const borrwedmembers = borrwedby.reverse().map((member) => <BorrowedMembers member={member} key={member.id} />);

    const memberslist = members.map((member) => <ToBorrowMembers member={member} key={member.id} />);
    const handleChange = (e) => {
        setMember(e.target.value);
    }

   const checkBorrowStatus=(membership, currentBooksNo)=>{
       if (membership === "platinum" && currentBooksNo < 5) return true;
       else if (membership === "gold" && currentBooksNo < 3) return true;
       else if (membership === "silver" && currentBooksNo < 2) return true;
       else return false;
    }

    const borrowBook = () => {
        const borrwedMember = members.find((member) => member.id === parseInt(memberID));
        const currentBooksNo = borrwedMember.currentlyBorrowedBooks.length;
        if (checkBorrowStatus(borrwedMember.membership, currentBooksNo)) { 
            _book.available = false;
            _book.borrowedBy = [..._book.borrowedBy, parseInt(memberID)];
            dispatch(BorrowBook(_book, parseInt(memberID)));
            history.push("/books");
         }
        else setBorrow(false);
    }

    const returnBook = () => {
        const currentmemberID = _book.borrowedBy[_book.borrowedBy.length-1];
        _book.available = true;
        dispatch(ReturnBook(_book, currentmemberID));
        history.push("/books");
    }
    return (
        <div>
            <div className="container">
            <br></br><br></br>
                <PageTitle>{_book.title}</PageTitle>
                <h4>{_book.author}</h4>
                <p>{_book.genre.join(" - ")}</p>
                <div style={{ fontWeight: "bold" }}>
                {_book.available ? <p style={{ color: "green" }}>Available</p>
                    : <p style={{ color: "red" }}>Unavailable</p>}
                </div>
        
                <br></br>
                <h5>Borrowed by:</h5>
                {borrwedby.length === 0 ? <p>Not borrowed yet...</p> : true}
                <div className="row">    
                    <div className="col-6">
                         {borrwedmembers}
                    </div>
                    <div className="col-6">
                        <div className="d-flex position-relative">
                            <h5>Borrow To:</h5> 
                        <select className="form-select" aria-label="Default select example" name="memberslist"
                             onChange={handleChange} value={memberID} disabled={_book.available ? false : true}
                        >
                            <option value="" selected>Select Member To Borrow</option>
                            {memberslist}
                            </select>
                            <LibBtn className="btn" onClick={borrowBook}
                            disabled={_book.available ? false : true}
                            style={{marginLeft:"10px"}}>Set</LibBtn>
                             {_book.available ? "" :<LibBtn className="btn" onClick={returnBook} style={{float:"right", marginLeft:"10px"}}>Return</LibBtn>}
                        </div>
                        {!borrowstat?<Comment>Failed! member has reached maximum amount of membership books</Comment>:""}
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default BookDetails;
  