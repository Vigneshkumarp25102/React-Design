import 'bootstrap/dist/css/bootstrap.min.css'
import img4 from '../com(1).jpg'
import img5 from '../com (2).jpg'
import img6 from '../com(3).jpg';
import img from '../car1.jpg'
import img2 from '../car2.jpg'
import img3 from '../car.webp';
import './page1.css';
import Carousel from 'react-bootstrap/Carousel'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export function Page1(){
    return(
        <>
       <div className="container-fluid">
            <div className='row nav'>
                <div className='col-lg-6'>
                    <h2 className='heading1'><span className='heading2'>1</span>PAGE</h2>
                    </div>
                
                <div className=' col-lg-6 nav2'>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav " />
                            <Navbar.Collapse id="basic-navbar-nav ">
                                <Nav className="me-auto ">
                                     <Nav.Link href="/" className='text-primary'>HOME</Nav.Link>
                                     <Nav.Link href='/'className='text-primary'>ABOUT US</Nav.Link>
                                     <Nav.Link href='/'className='text-primary'>OUR SERVICE</Nav.Link>
                                     <Nav.Link href='/'className='text-primary'>OUR PROTFOLIO</Nav.Link>
                                     <Nav.Link href='/'className='text-primary'>CONTACT US</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
     
                    </Navbar>
                </div>
            </div>
       <div className='car'>
       <Carousel>
            <Carousel.Item>
                <img className="d-block w-100"  src={img4} alt="First slide" />
                    <Carousel.Caption className='caption'>
                        <h3>Game Development</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className='butpage1 bg-light text-primary'>GET STARTED</button>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "  src={img5} alt="Second slide"/>
                    <Carousel.Caption className='caption'>
                        <h3>Game Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className='butpage1 bg-light text-primary'>GET STARTED</button>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"  src={img2} alt="Third slide"/>
                    <Carousel.Caption className='caption'>
                        <h3>Game Development</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button className='butpage1 bg-light text-primary'>GET STARTED</button>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>
        </div>
            
    
        </>
    );
}