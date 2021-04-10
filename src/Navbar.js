
/* stateless functional component is like: 
const  = () => {
    return (  );
}
export default ;
*/


// Giving my sfc a name of Navbar
const  Navbar= () => {
    return ( 
        <nav className="navbar">
            <h1>The Cloclwork Blog</h1>

            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Write a new blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;