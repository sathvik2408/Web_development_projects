import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <p>The page you are looking for does not exist</p>
            <Link to='/'>Back to homae page</Link>
        </div>
     );
}
 
export default NotFound;