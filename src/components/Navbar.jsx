import { Link } from "react-router-dom";

const Navbar = ({ total }) => {
    console.log(total !== 0)
    return (
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/favorites"><li>Favorites</li></Link>
                <Link to="/cart"><li>Cart</li></Link>
                {
                    total !== 0 ? (
                        <li>$ {total}</li>
                    ) : (
                        <li>Empty Cart!</li>
                    )
                }
            </ul>
    )
}

export default Navbar;