
const NameSearch = ({setQuery}) => {
  return (
<input 
name="name"
type="text"
className="search form-control"
placeholder="type book name..."
onChange={(event) =>
setQuery(event.target.value)}
    />     
  );
};

export default NameSearch;
