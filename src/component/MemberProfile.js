import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import  BorrowedBook  from "./BorrowedBook";
function MemberProfile() {
    const members = useSelector((state) => state.members);
    const books = useSelector((state) => state.books);
    const { memberSlug } = useParams();
    const _member = members.find((member) => member.slug === memberSlug);
    if(!_member){return <Redirect to="/members"/>}
    const borrwed = _member.currentlyBorrowedBooks.map((id) => books.find((book) => book.id === id));
    const borrwedbooks=borrwed.map((book) => <BorrowedBook book={book} key={book.id} />);   
    return (
        <div>
            <div className="container">
            <br></br><br></br>
                <h1>{_member.firstName.concat(' ', _member.lastName)}</h1>
                <h3>{_member.membership}</h3><br></br><br></br>
                <h5>Borrowed Books:</h5>
                {borrwed.length === 0 ? <p>No borrowed books found...</p> : true}
                <div className="row">    
                    <div className="col-8">
                         {borrwedbooks}
                    </div>
                    
        
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
    );
  }
  
  export default MemberProfile;
  