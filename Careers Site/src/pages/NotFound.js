import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Error page not found</h1>
      <p>orem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor</p>


      <p>Go to the <Link to='/'>HomePage</Link></p>
    </div>
  )
}
