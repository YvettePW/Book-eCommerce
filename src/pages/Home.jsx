import BooksList from "../components/BooksList";

const Home = ({ books, handleAddToFavorites, handleAddToCart }) => {
    return (
        <div>
            <h2>Books List</h2>
            <BooksList books={books} updateFavorite={handleAddToFavorites} handleAddToCart={handleAddToCart} /> 
        </div>
    )
}

export default Home;