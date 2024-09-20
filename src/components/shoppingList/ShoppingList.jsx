import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function ShoppingList(props) {
  let shoppingList = props.shoppingList;
  function deleteItem(event) {
    console.log('Item ID using event.target.id', event.target.id);
    axios
      .delete(`/api/shoppingList/${event.target.id}`)
      .then(() => {
        props.fetchShoppingList();
      })
      .catch((error) => {
        console.error('Error in deleting item', error);
      });
  }
  function purchasedItem(event) {
    console.log('Item ID using event.target.id', event.target.id);
    axios
      .put(`/api/shoppingList/${event.target.id}`)
      .then((response) => {
        props.fetchShoppingList();
      })
      .catch((error) => {
        console.error('Error in updating purchase status', error);
      });
  }

  return (
    <Row>
      {shoppingList.map((item) => (
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card key={item.id}>
            <p>
              {item.name} {item.quantity} {item.unit}
            </p>
            <button id={item.id} type='button' onClick={deleteItem}>
              Delete Item
            </button>
            <button id={item.id} type='button' onClick={purchasedItem} disabled={item.purchased}>
              {item.purchased ? 'Purchased' : 'Item Needed'}
            </button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

//go and make a shopping list item comp
// let setPurchaseClass = () => (purchased ? 'class="purchased"' : '');
// let disableBttn = () => (item.purchased ? 'disabled' : '');
// let completedYesNo = () => (chore.isComplete ? 'yes' : 'no');
