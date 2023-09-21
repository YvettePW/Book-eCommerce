import BookCard from "./BookCard";

const BooksList = ({ books, updateFavorite, handleAddToCart }) => { // 5. we are receiving books here, and destructuring it here instead of using the word props
    return (
        <div className="book-card-container">
            {books.map(book => <BookCard key={book.isbn13} {...book} updateFavorite={updateFavorite} handleAddToCart={handleAddToCart} />)}
        </div>
    )
}

export default BooksList;