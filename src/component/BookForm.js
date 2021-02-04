import { useState } from "react";
import { addBook } from '../store/actions';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LibBtn,PageTitle, Comment} from "../styles";
function BookForm() {
    const history = useHistory();
    const dispatch = useDispatch ()
    const [book, setBook] = useState({
        title: "",
        author:"",
        genre: "",
        available: true,
        borrowedBy: []
  })

    const handleChange = (event) =>
        setBook({
            ...book,
            [event.target.name]: event.target.value
        });
    
    const resetForm = () => {
        setBook({
            title: "",
            author:"",
            genre: "",
            available: true,
            borrowedBy: []
      })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addBook(book))
        resetForm();
        history.push("/books");
}
    return (
    <>
    <br></br>
<div className="container">
        <div className="row">
        <div className="col-3"></div> 
        <div className="col-6">
        <PageTitle style={{textAlign:"center"}}>Add New Book</PageTitle><br></br>
        <form  onSubmit={handleSubmit}>
    <div className="form-outline mb-4">
    <label className="form-label">Title</label>
    <input type="text"  className="form-control" name="title" onChange={handleChange} value={book.title}/>
  </div>
  <div className="form-outline mb-4">
    <label className="form-label">Author</label>
    <input type="text" className="form-control" name="author" onChange={handleChange} value={book.author}/>
  </div>
    <div className="form-outline mb-4">
    <label className="form-label">Genre:</label>
    <Comment>Write book genres with comma "," as seprator.</Comment>
    <input type="text" className="form-control" name="genre" onChange={handleChange} value={book.genre}/>
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

export default BookForm;
