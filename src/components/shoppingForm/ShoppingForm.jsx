import { useState } from 'react';
import axios from 'axios';

function ShoppingForm({ fetchShoppingList }) {
  let [newItemName, setNewItemName] = useState('');
  let [newItemQuantity, setNewItemQuantity] = useState(0);
  let [newItemUnit, setNewItemUnit] = useState('');

  const addItem = () => {
    axios
      .post('/api/ShoppingList', { name: newItemName, quantity: newItemQuantity, unit: newItemUnit })
      .then((response) => {
        setNewItemName('');
        setNewItemQuantity('');
        setNewItemUnit('');
        fetchShoppingList();
      })
      .catch((err) => {
        alert('Error Adding Guest');
        console.log(err);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(addItem());
    addItem();
  };
  return (
    <>
      <h2>Add new Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={newItemName}
          onChange={(evt) => setNewItemName(evt.target.value)}
        />

        <input
          type='text'
          placeholder='Quantity'
          value={newItemQuantity}
          onChange={(evt) => setNewItemQuantity(evt.target.value)}
        />

        <input
          type='text'
          placeholder='Unit'
          value={newItemUnit}
          onChange={(evt) => setNewItemUnit(evt.target.value)}
        />
        <button type='submit'>Add Item</button>
      </form>
    </>
  );
}

export default ShoppingForm;
