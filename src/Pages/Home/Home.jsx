import React,{useEffect,useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { height } from '@mui/system';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  const [details,setDetails] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
    .then(res => res.json())
    .then(data => setDetails(data))
  },[])
  return (
    <>
    <Navbar/>
    {/* Carousel */}
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/07032023-UHP-D-Main-P2-Casuals-DennislingoGulmoharJiapur-Min60.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/07032023-UHP-D-Top-P6-IsceneryJDYONLY-Starting499.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/07032023-UHP-D-Main-P3-PremiumWardrobeClassics-MnSGAP-Min20Exrea35.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    {/* Featured products */}
    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-Sectionheader.jpg" alt="" style={{}} />
    <div className='featured'>
      {
        details.map(detail=>(
          <Card style={{ width: '18rem', height: '33rem' }}>
            <Card.Img variant="top" src={detail.image} height="300px" style={{padding: '10px'}}/>
            <Card.Body>
              <Card.Title className='cardTitle'>{detail.title}</Card.Title>
              <Card.Text>
                {(detail.description).slice(0,80)}...
              </Card.Text>
              <div className='btn'>
                <Button variant="dark">${detail.price}</Button>
                <Button variant="primary"> Buy now</Button>
              </div>
             
            </Card.Body>
          </Card>
        ))
      }
        
    </div>

    <Footer />
    </>
  )
}

export default Home