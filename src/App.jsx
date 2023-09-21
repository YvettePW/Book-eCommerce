import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const [books, setBooks] = useState([]) // 2. this is storing on to our state the data we got from our api
  const [favorites, setFavorites] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([])

  const fetchBooks = () => {
    axios.get("https://api.itbook.store/1.0/new") // 1. this is axios getting info from our api
      .then(data => setBooks(data.data.books))
  }

  const handleAddToFavorites = (isbn13, isFavorite) => {
    if (!isFavorite) {
    const favorite = books.find(book => book.isbn13 === isbn13);
    const uniqueList = favorites.filter(book => book.isbn13 !== isbn13);
    setFavorites([...uniqueList, favorite])
    } else {
    const removeFav = favorites.filter(book => book.isbn13 !== isbn13)
    setFavorites(removeFav)
    }
  }

  const handleAddToCart = (bookValue, bookTitle, isbn13) => {
    const bookPrice = Number(bookValue.replace(/[^0-9.-]+/g,""));
    setCartTotal(cartTotal + bookPrice);
    let isInCart = cartItems.find(item => item.isbn13 === isbn13);
    if (isInCart) {
      isInCart.quantity++
    } else { 
      isInCart = { price: bookPrice, title: bookTitle, quantity: 1, isbn13 }
      setCartItems([...cartItems, isInCart])
    }
  }
  
  useEffect(fetchBooks, []) // 3. we are running fetchBooks when its an empty array [], running the api info and storinng it on the state

  return ( // 4. once we have it on our state, we are passing it to books, our component.
      <>
        <Navbar total={cartTotal}/>
        <Routes>
          <Route path="/" element={<Home books={books} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} handleAddToFavorites={handleAddToFavorites} />} />
          <Route path='/bookdetails/:isbn13' element={<BookDetails books={books} />} />
          <Route path='/cart' element={<Cart total={cartTotal} cartItems={cartItems} />} />
        </Routes>
      </>
  );
}

export default App;



/*
1. bug on favorite items that are unselected on books list
2. currency should only show two decimals
3. cart button doesn't work from favorites list
4. improve css
*/