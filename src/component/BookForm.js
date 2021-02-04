import { useState } from "react";
import { addBook } from '../store/actions';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
        <h2> Add New Book</h2>  <br></br>
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
    <label className="form-label" >Genre:</label>
    <p>Write book genres with comma "," as seprator.</p>
    <input type="text" className="form-control" name="genre" onChange={handleChange} value={book.genre}/>
    </div>
    <button type="submit" className="btn btn-primary btn-block mb-4">Add </button> 
                      
</form>               
        </div>
  
        <div className="col-3"></div> 
    </div>
            </div>
    </>
  );
}

export default BookForm;
