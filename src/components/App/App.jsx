import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import ShoppingList from '../shoppingList/ShoppingList.jsx';
import ShoppingForm from '../shoppingForm/ShoppingForm.jsx';
import Container from 'react-bootstrap/Container';

// import ShoppingItem from '../ShoppingItem/ShoppingItem.jsx';
function App() {
  const [shoppingList, setShoppingList] = useState([]);
  // const [shoppingItem, setShoppingItem] = useState([]);

  useEffect(() => {
    fetchShoppingList();
  }, []);

  const fetchShoppingList = () => {
    axios
      .get('/api/shoppingList')
      .then((response) => {
        console.log(`data from server:`, response.data);
        setShoppingList(response.data);
      })
      .catch((err) => console.error(`Error getting shopping list`, err));
  };
  const addItem = (item) => {
    console.log(item);
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      unit: itemUnit,
    };
    axios
      .post('/api/shoppingList', newItem)
      .then((response) => {
        fetchShoppingList();
      })
      .catch((err) => console.error(`Error posting`, err));
  };

  return (
    <Container>
      <div className='App'>
        <Header />
        <main>
          <p>Under Construction...</p>
          <ShoppingForm fetchShoppingList={fetchShoppingList} />

          <h2>Shopping list</h2>
          <ShoppingList shoppingList={shoppingList} fetchShoppingList={fetchShoppingList} />
          {/* <ShoppingItem shoppingList={it} fetchShoppingList={fetchShoppingList} /> */}
        </main>
      </div>
    </Container>
  );
}

export default App;
