import { Link } from "react-router-dom";
function BorrowedBook({ book }) {

    return (
      <>
    <div className="d-flex position-relative" style={{border: '2px solid black', padding:'10px'}}>
    <div>
   <h5 className="mt-0">{book.title}</h5>
            <p>{book.author}</p>
            <Link to={`/books/${book.slug}`}  className="stretched-link">Go to book page
            </Link>
    </div>
   </div><br></br> 
   </>   
  );
}

export default BorrowedBook;
