import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';

function ShoppingItem({ item, shoppingList }) {
  const [purchased, setPurchased] = useState(true);

  return (
    <>
      <Col>
        <Card>
         <Card.Body>
            <Card.Title>{item.itemName}</Card.Title>
            <Card.Subtitle className='text-muted'>{!purchased && item.alias}</Card.Subtitle>
            <Card.Text></Card.Text>

                <Button className='mx-1' variant="primary" size="sm" onClick={() => setPurchased(!purchased)} ></Button>
                <Button variant="primary" onClick={() => shoppingList(item)} size="sm">Purchase</Button>
            </Card.Body>
        </Card> 

       </Col>
    </>
  );
}

export default ShoppingItem;
