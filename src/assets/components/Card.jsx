import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div class="d-flex container-lg justify-content-evenly mt-5">
      <div className='mt-5'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='./images/img2.jpg'/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
      </div>
      <div className='mt-5'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='./images/img3.jpg'/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
      </div>
      <div className='mt-5'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='./images/img1.jpg'/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
      </div>
    </div>
);
}
export default BasicExample;