import { useState } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ image, price, title, isbn13, updateFavorite, isFav, handleAddToCart }) => { // 6. using these things
    const [isFavorite, setIsFavorite] = useState(isFav)

    const handleClick = () => {
        if (!isFav) {
            setIsFavorite(!isFavorite)
        };
        updateFavorite(isbn13, isFavorite)
    }

    return (
        <div className="book-card">
            <p onClick={handleClick}>{isFavorite ? "❤️" : "🤍"}</p>
            <Link to={`/bookdetails/${isbn13}`}>
                <img src={image} />
                <p>{title}</p>
                <p>{price}</p>
            </Link>
            <button onClick={() => handleAddToCart(price, title, isbn13)}>Cart</button>
        </div>
    )
}

export default BookCard;

// When clicking on Cart button, we want to add to an array cart on App.js. This array will store objects with: book title, quantity, and unit price. Consider if element is already there. If not, add book title, quantity: 1, unit price. If yes, add one to quantity: quantity + 1.