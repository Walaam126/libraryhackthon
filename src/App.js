import BooksList from "./component/BooksList";
import BookForm from "./component/BookForm";
import BookDetails from "./component/BookDetails";
import MembersList from "./component/MembersList";
import MemberForm from "./component/MemberForm";
import MemberProfile from "./component/MemberProfile";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Switch>
      <Route path="/books/Addbook">
          <BookForm />
        </Route>
        <Route path="/books/:bookSlug" >
            <BookDetails />
          </Route> 
      <Route path="/books" >
          <BooksList />
          </Route>
          <Route path="/members/AddMember">
          <MemberForm />
          </Route>
            <Route path="/members/:memberSlug" >
            <MemberProfile />
          </Route> 
        
          <Route path="/members" >
          <MembersList />
          </Route>
           
        <Route exact path="/">
          <Home />
            </Route>
       
      </Switch>
    </div>
  );
}

export default App;
