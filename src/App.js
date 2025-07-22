import './App.css';
import { Name } from './components/Name';
import { Description } from './components/Description';
import { Image } from './components/Image';
import { Price } from './components/Price';
import useProducts from './product';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


function App() {
  const products = useProducts();
  const [image , setImage] = useState('https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small_2x/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg');
  const [name , setName] = useState('zil');
  return (
    <Container> 
    
       <Card key={products.id}>
        <Card.Body>
        
          <Image url={products.url} />
          <Name name={products.name} />
          <Description description={products.description} />
          <Price price={products.price} />
        </Card.Body>
       </Card>

      <p className='mt-4'>
       {
          name ? <Image url={image} style={{width: '20%', height: '10%'}} /> : <Name name={'Hello , there !'} />
       }
      </p>
      
      
    </Container>
  );
}

export default App;
