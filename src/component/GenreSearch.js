
const GenreSearch = ({setQuery2}) => {
    return (
  <input 
  name="name"
  type="text"
  className="search form-control"
  placeholder="type a genre name..."
 onChange={(event) =>
  setQuery2(event.target.value)}
      />     
    );
  };
  
  export default GenreSearch;
  