// importing the Navbar component into this root component
import Navbar from './Navbar';

// importing the homepage component
import Home from './Home';

function App() {

  // setting a variable for dynamic blog title
  // const blogTitle="Welcome to Clockwork's new blog! ";

  // setting a variable for blog views
  // const views = 50;
  
  return (
    <div className="App">

      {/* Nesting our navbar over here (and its self closing tag as you can see ) */}
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
