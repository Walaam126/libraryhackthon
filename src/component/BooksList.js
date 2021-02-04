import Book from "./Book";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import NameSearch from './NameSearch';
import GenreSearch from './GenreSearch';
function BookList() {
    const [searchType, setsearchType] = useState("");
    const setRadioValue = (e) => {
        setsearchType(e);
    }
    //name search
    const [query, setQuery] = useState("");
    //genre search
    const [query2, setQuery2] = useState("");
    const books = useSelector((state) => state.books);
    let filteredbooks = [];
    //if search type is name
    if (searchType === "name")
        filteredbooks = books.filter((book) => (book.title.toLowerCase().includes(query.toLowerCase())))
    else
        filteredbooks = books.filter((book) => (book.genre.join().toLowerCase().includes(query2.toLowerCase())));
    
    
    const booklist=filteredbooks.map((book) => <Book book={book} key={book.id} />);
    return (
      <><br></br>
            <div className="container">
            <h1>Books List</h1><br></br>
        <div className="row">
        <div className="col-11">
            <div className="form-check">
            <input className="form-check-input" type="radio" name="searchType" id="flexRadioDefault1" value="name" onChange={e => setRadioValue(e.currentTarget.value)} />
            <label className="form-check-label" for="flexRadioDefault1">
            Search by Name
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="searchType" id="flexRadioDefault2" value="genre" onChange={e => setRadioValue(e.currentTarget.value)}/>
            <label className="form-check-label" for="flexRadioDefault2">
            Search by Genre
            </label>
            </div>
            {searchType === "name" ? <NameSearch setQuery={setQuery}/> : searchType==="genre"? <GenreSearch setQuery2={setQuery2} /> : ""}       
                        <br></br>
                  {/* <MoviesTable> */}
        <Link to="/books/Addbook">
            <button className="btn btn-primary">Add New Book</button>
            </Link>
      <table className="table table-hover table-bordered results">
        <thead>
          <tr>
          <th>ID</th>
           <th>Title</th>
        <th>Genre</th>
        <th>Available</th>
        
        <th></th>
          </tr>
        </thead>
        <tbody>
          {booklist}
        </tbody>
        </table> 
        {/* </MoviesTable>*/}
        </div>
  
        <div className="col-1"></div> 
    </div>
    </div>
    </>
  );
}

export default BookList;
