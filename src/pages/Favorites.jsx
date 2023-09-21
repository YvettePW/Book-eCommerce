import BookCard from "../components/BookCard";

const Favorites = ({ favorites, handleAddToFavorites }) => {
    return (
        <div>
            <h2>Favorite Books</h2>
            <div className="book-card-container">
            {favorites.map(favorite => <BookCard key={favorite?.isbn13} updateFavorite={handleAddToFavorites} {...favorite} isFav />)}
            </div>
        </div>
    )
}

export default Favorites;