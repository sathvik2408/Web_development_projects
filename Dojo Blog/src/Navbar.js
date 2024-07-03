import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (

<nav className="navbar">
    <h1>Dojo blog</h1>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create"style={{
color:'white',
backgroundColor:' #f1356d',
borderRadius:'10px'
        }}>New blog </Link>
    </div>
</nav>

     );
}
 
export default Navbar ;